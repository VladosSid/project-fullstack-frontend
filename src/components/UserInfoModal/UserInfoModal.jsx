import plus from '../../images/Header/plus.png';
import styles from './UserInfoModal.module.css';
import pen from '../../images/Header/pen.svg';
import user from '../../images/Header/user.png';
import x from '../../images/Header/x.svg';

const UserInfoModal = ({ toggler, open }) => {
  return (
    <div className={open ? styles.backdrop : styles.unactive}>
      <div className={styles.userInfoModal}>
        <button className={styles.closeCross} onClick={() => toggler()}>
          <img src={x} alt="cross" />
        </button>
        <div>
          <img src={user} alt="user" className={styles.userAvaSvg} />
        </div>
        <button className={styles.plusBtn}>
          <input type="file" className={styles.mediaInput} />
          <img src={plus} alt="plus" className={styles.plusSvg} />
        </button>
        <input type="text" placeholder="Olena" className={styles.nameInput} />
        <img src={user} alt="user" className={styles.userSvg} />
        <img src={pen} alt="pen" className={styles.penSvg} />
        <button className={styles.saveBtn}>Save Changes</button>
      </div>
    </div>
  );
};
export default UserInfoModal;
