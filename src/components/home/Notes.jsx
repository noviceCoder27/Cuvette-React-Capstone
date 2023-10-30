import styles from './Notes.module.css'


const Notes = () => {
  return (
    <div className={styles.notes}>
        <h3>All Notes</h3>
        <div className= {styles["write-notes"]}>
            <textarea></textarea>
        </div>
        
    </div>
  )
}

export default Notes
