import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { authSelectors } from 'redux/users';
import { authOperations } from 'redux/users';

import styles from './UserInfoModal.module.css';
import plus from '../../../images/Header/plus.svg';
import pen from '../../../images/Header/pen.svg';
import user from '../../../images/Header/user.png';
import x from '../../../images/Header/x.svg';

const UserInfoModal = () => {
  const [image, setImg] = useState(null);
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const target = document.querySelector('body');

  const close = e => {
    if (e.keyCode === 27) {
      setIsOpen(false);
      target.classList.remove(styles.hidden);
    }
  };

  const username = useSelector(authSelectors.getUsername);
  const ava = useSelector(authSelectors.getAvatar);

  useEffect(() => {
    const openBtn = document.getElementById('open-modal-button');
    if (!openBtn) {
      return;
    }
    openBtn.addEventListener('click', () => {
      setIsOpen(true);
      target.classList.add(styles.hidden);
    });

    return openBtn.removeEventListener('click', () => setIsOpen(true));
  });

  useEffect(() => {
    window.addEventListener('keydown', close);

    return () => window.removeEventListener('keydown', close);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUploadClick = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = function () {
        setImg(reader.result);
        setAvatar(file);
      };
    }
  };

  const onInputChange = e => {
    setName(e.target.value);
  };

  const reset = e => {
    setName('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('img', avatar);
    formData.append('username', name);

    dispatch(authOperations.updateUserData(formData));
    reset();
  };

  const closeHandler = e => {
    e.preventDefault();
    setIsOpen(false);
    target.classList.remove(styles.hidden);
  };

  const check = e => {
    if (e.currentTarget === e.target) {
      setIsOpen(false);
      target.classList.remove(styles.hidden);
    }
  };

  return (
    <form
      className={
        isOpen === false
          ? styles.backdrop
          : styles.active + ' ' + styles.backdrop
      }
      id="user-info-modal"
      onClick={check}
    >
      <div className={styles.userInfoModal}>
        <button className={styles.closeCross} onClick={closeHandler}>
          <img src={x} alt="cross" />
        </button>
        <div>
          <img
            src={image ? image : ava}
            alt="user"
            className={styles.uploadedImg}
          />

          <label htmlFor="upload" className={styles.addImgInput}>
            <input
              style={{ display: 'none' }}
              name="picture"
              type="file"
              accept="image/*"
              id="upload"
              onChange={handleUploadClick}
            />
          </label>
        </div>
        <img src={plus} alt="plus" className={styles.plusSvg} />
        <input
          onInput={onInputChange}
          type="text"
          name="name"
          max={15}
          value={name}
          placeholder={username}
          className={styles.nameInput}
        />
        <img src={user} alt="user" className={styles.userSvg} />
        <img src={pen} alt="pen" className={styles.penSvg} />
        <button type="submit" onClick={handleSubmit} className={styles.saveBtn}>
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default UserInfoModal;
