import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { authOperations } from 'redux/users';
import plus from '../../images/Header/plus.png';
import styles from './UserInfoModal.module.css';
import pen from '../../images/Header/pen.svg';
import user from '../../images/Header/user.png';
import x from '../../images/Header/x.svg';

const UserInfoModal = ({ toggler, open }) => {
  const [img, setImg] = useState(null);
  const [name, setName] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const close = e => {
      if (e.keyCode === 27) {
        toggler();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [toggler]);

  const handleUploadClick = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = function () {
        setImg(reader.result);
      };
    }
  };

  const onInputChange = e => {
    setName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('img', img);
    formData.append('username', name);
    dispatch(authOperations.updateUserData(formData));
  };

  const check = e => {
    if (e.currentTarget === e.target) {
      toggler();
    }
  };

  return (
    <div
      className={open ? styles.backdrop : styles.unactive}
      onClick={e => check(e)}
    >
      <div className={styles.userInfoModal}>
        <button className={styles.closeCross} onClick={() => toggler()}>
          <img src={x} alt="cross" />
        </button>
        <div>
          {img ? (
            <img src={img} alt="user" className={styles.uploadedImg} />
          ) : (
            <img src={user} alt="user" className={styles.userAvaSvg} />
          )}
          <label htmlFor="upload" className={styles.addImgInput}>
            <input
              style={{ display: 'none' }}
              type="file"
              accept="image/png, image/jpeg"
              id="upload"
              onChange={e => handleUploadClick(e)}
            />
          </label>
        </div>
        <img src={plus} alt="plus" className={styles.plusSvg} />
        <input
          onInput={e => onInputChange(e)}
          type="text"
          placeholder="Your name"
          className={styles.nameInput}
        />
        <img src={user} alt="user" className={styles.userSvg} />
        <img src={pen} alt="pen" className={styles.penSvg} />
        <button
          type="submit"
          onClick={e => handleSubmit(e)}
          className={styles.saveBtn}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default UserInfoModal;
