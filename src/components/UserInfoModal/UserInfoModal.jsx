// import { useDispatch } from 'react-redux';
import { useState } from 'react';
import plus from '../../images/Header/plus.png';
import styles from './UserInfoModal.module.css';
import pen from '../../images/Header/pen.svg';
import user from '../../images/Header/user.png';
import x from '../../images/Header/x.svg';

const UserInfoModal = ({ toggler, open }) => {
  const [file, setFile] = useState(null);
  // const [name, setName] = useState(null);

  // const dispatch = useDispatch();

  const handleUploadClick = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = function (e) {
        setFile(reader.result);
      };
    }
  };

  // const onInputChange = e => {
  //   setName(e.target.value);
  // };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className={open ? styles.backdrop : styles.unactive}>
      <div className={styles.userInfoModal}>
        <button className={styles.closeCross} onClick={() => toggler()}>
          <img src={x} alt="cross" />
        </button>
        <div>
          {file ? (
            <img src={file} alt="user" className={styles.uploadedImg} />
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
          // onInput={e => onInputChange(e)}
          type="text"
          placeholder="Olena"
          className={styles.nameInput}
        />
        <img src={user} alt="user" className={styles.userSvg} />
        <img src={pen} alt="pen" className={styles.penSvg} />
        <button
          type="submit"
          onSubmit={e => handleSubmit(e)}
          className={styles.saveBtn}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default UserInfoModal;
