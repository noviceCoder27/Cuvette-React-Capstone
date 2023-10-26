import styles from './Gallery.module.css';
import ActionImg from './../../assets/action.png'
import ThrillerImg from './../../assets/thriller.png'
import HorrorImg from './../../assets/horror.png'
import RomanceImg from './../../assets/romance.png'
import DramaImg from './../../assets/drama.png'
import FantasyImg from './../../assets/fantasy.png'
import MusicImg from './../../assets/music.png'
import FictionImg from './../../assets/fiction.png'
import WesternImg from './../../assets/western.png'


const Gallery = ({border,addCategory}) => {
  return (
        <section className= {styles.gallery} >
        <div className= {`${styles.category} ${styles.action} ${border.action? styles["green-border"]: ""}`} onClick = {() => addCategory('Action')} >
            <p>Action</p>
            <img src= {ActionImg} alt="Movie Image" />
        </div>
        <div className= {`${styles.category} ${styles.drama} ${border.drama? styles["green-border"]: ""}`} onClick = {() => addCategory('Drama')}>
            <p>Drama</p>
            <img src= {DramaImg} alt="Movie Image" />
        </div>
        <div className= {`${styles.category} ${styles.romance} ${border.romance? styles["green-border"]: ""}`} onClick = {() => addCategory('Romance')}>
            <p>Romance</p>
            <img src= {RomanceImg} alt="Movie Image" />
        </div>
        <div className= {`${styles.category} ${styles.thriller} ${border.thriller? styles["green-border"]: ""}`} onClick = {() => addCategory('Thriller')}>
            <p>Thriller</p>
            <img src= {ThrillerImg} alt="Movie Image" />
        </div>
        <div className= {`${styles.category} ${styles.western} ${border.western? styles["green-border"]: ""}`} onClick = {() => addCategory('Western')}>
            <p>Western</p>
            <img src= {WesternImg} alt="Movie Image" />
        </div>
        <div className= {`${styles.category} ${styles.horror} ${border.horror? styles["green-border"]: ""}`} onClick = {() => addCategory('Horror')}>
            <p>Horror</p>
            <img src= {HorrorImg} alt="Movie Image" />
        </div>
        <div className= {`${styles.category} ${styles.fantasy} ${border.fantasy? styles["green-border"]: ""}`} onClick = {() => addCategory('Fantasy')}>
            <p>Fantasy</p>
            <img src= {FantasyImg} alt="Movie Image" />
        </div>
        <div className= {`${styles.category} ${styles.music} ${border.music? styles["green-border"]: ""}`} onClick = {() => addCategory('Music')}>
            <p>Music</p>
            <img src= {MusicImg} alt="Movie Image" />
        </div>
        <div className= {`${styles.category} ${styles.fiction} ${border.fiction? styles["green-border"]: ""}`} onClick = {() => addCategory('Fiction')}>
            <p>Fiction</p>
            <img src= {FictionImg} alt="Movie Image" />
        </div>
    </section>
  )
}

export default Gallery
