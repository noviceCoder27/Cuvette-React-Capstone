import styles from './../styles/categories/Categories.module.css';
import ActionImg from './../assets/action.png'
import ThrillerImg from './../assets/thriller.png'
import HorrorImg from './../assets/horror.png'
import RomanceImg from './../assets/romance.png'
import DramaImg from './../assets/drama.png'
import FantasyImg from './../assets/fantasy.png'
import MusicImg from './../assets/music.png'
import FictionImg from './../assets/fiction.png'
import WesternImg from './../assets/western.png'
import {TfiClose} from 'react-icons/tfi'
import {AiFillWarning} from 'react-icons/ai'
import { useState } from 'react';


const Categories = () => {
    const [selectedCategories,setSelectedCategories] = useState([]);
    const [categoryCriteria,setCategoryCriteria] = useState(false);
    const [border,setBorder] = useState({
        action: false,
        drama: false,
        romance: false,
        thriller: false,
        horror: false,
        western: false,
        music: false,
        fantasy: false,
        fiction: false
    })

    const defineBorder = (category,condition) => {
        switch(category) {
            case "Action":
                setBorder(prev => ({...prev,action: condition}))
                break;
            case "Drama":
                setBorder(prev => ({...prev,drama: condition}))
                break;
            case "Romance":
                setBorder(prev => ({...prev,romance: condition}))
                break;
            case "Thriller":
                setBorder(prev => ({...prev,thriller: condition}))
                break;
            case "Horror":
                setBorder(prev => ({...prev,horror: condition}))
                break;
            case "Western":
                setBorder(prev => ({...prev,western: condition}))
                break;
            case "Music":
                setBorder(prev => ({...prev,music: condition}))
                break;
            case "Fantasy":
                setBorder(prev => ({...prev,fantasy: condition}))
                break;
            case "Fiction":
                setBorder(prev => ({...prev,fiction: condition}))
                break;
        }
    }

    const addCategory = (category) => {
        defineBorder(category,true);
        setSelectedCategories(prevCategories => {
            const categories = [...prevCategories,category];
            const categorySet =  new Set(categories);
            return [...categorySet];
        })
    }

    const removeCategory = (category) => {
        defineBorder(category,false);
        setSelectedCategories(prevCategories => {
            return prevCategories.filter(item => item !== category)
        })
    }

    const checkCategoryCriteria = () => {
        if(selectedCategories.length < 3){
            setCategoryCriteria(true);
            return;
        }
        localStorage.setItem("categories",JSON.stringify(selectedCategories));
        setCategoryCriteria(false);
    }


    const categoryBtns = selectedCategories.map((item,index) => (
        <button key = {index++}>
            <span>{item}</span>
            <TfiClose className={styles.cross} onClick = {() => removeCategory(item)}/>
        </button>
    ));


    return (
        <>
            <main className= {styles["category-page"]}>
                <section className= {styles["text-section"]}>
                    <h1>Super App</h1>
                    <h3>Choose your entertainment category</h3>
                    {selectedCategories.length !== 0 && <div className={styles["selected-categories"]}>
                        {categoryBtns}
                    </div>}
                    {categoryCriteria && <div className={styles.warning}>
                        <AiFillWarning />
                        <p>Minimum 3 categories requried</p>
                    </div>}
                </section>
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
            </main>
            <footer className= {styles["next-btn-section"]}>
                <button className= {styles["next-page"]} onClick = {checkCategoryCriteria}>Next Page</button>
            </footer>
        </>
        
    )
}

export default Categories
