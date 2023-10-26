import styles from './TextSection.module.css'
import {AiFillWarning} from 'react-icons/ai'
import {TfiClose} from 'react-icons/tfi'


const TextSection = ({selectedCategories,setSelectedCategories,categoryCriteria,defineBorder}) => {

    const removeCategory = (category) => {
        defineBorder(category,false);
        setSelectedCategories(prevCategories => {
            return prevCategories.filter(item => item !== category)
        })
    }

    const categoryBtns = selectedCategories.map((item,index) => (
        <button key = {index++}>
            <span>{item}</span>
            <TfiClose className={styles.cross} onClick = {() => removeCategory(item)}/>
        </button>
    ));

    return (
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
    )
}

export default TextSection
