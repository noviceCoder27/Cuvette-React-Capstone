import ProfilePic from './../../assets/profile-pic.png'
import styles from './UserCard.module.css'



const UserCard = () => {
  const {name, userName, email} = JSON.parse(localStorage.getItem("user"));
  const categories = JSON.parse(localStorage.getItem("categories"));
  const displayCategories = categories.map((category,index) => (
    <div key = {index}>{category}</div>
  ))
  return (
    <div className={styles.user}>
        <div className={styles["profile-image"]}>
        <img src={ProfilePic} alt="Profile pic" />
        </div>
        <div className={styles["profile-text"]}>
        <div className={styles.headings}>
            <h3>{name}</h3>
            <h3>{email}</h3>
            <h1>{userName}</h1>
        </div>
        <div className={styles.categories}>
            {displayCategories}
        </div>
        </div>
    </div>
  )
}

export default UserCard
