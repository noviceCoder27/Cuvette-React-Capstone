import ProfilePic from './../../assets/profile-pic.png'
import styles from './UserCard.module.css'



const UserCard = () => {
  return (
    <div className={styles.user}>
        <div className={styles["profile-image"]}>
        <img src={ProfilePic} alt="Profile pic" />
        </div>
        <div className={styles["profile-text"]}>
        <div className={styles.headings}>
            <h3>KK Vinay</h3>
            <h3>Vinay090@gmail.com</h3>
            <h1>vinay060</h1>
        </div>
        <div className={styles.categories}>
            <div>Horror</div>
            <div>Thriller</div>
            <div>Action</div>
            <div>Fiction</div>
        </div>
        </div>
    </div>
  )
}

export default UserCard
