import styles from './../components/categories/Common.module.css';
import { useState } from 'react';
import Gallery from '../components/categories/Gallery';
import TextSection from '../components/categories/TextSection';


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

    const checkCategoryCriteria = () => {
        if(selectedCategories.length < 3){
            setCategoryCriteria(true);
            return;
        }
        localStorage.setItem("categories",JSON.stringify(selectedCategories));
        setCategoryCriteria(false);
    }

    return (
        <>
            <main className= {styles["category-page"]}>
                <TextSection 
                selectedCategories={selectedCategories} 
                setSelectedCategories={setSelectedCategories} 
                categoryCriteria={categoryCriteria}
                defineBorder = {defineBorder}/>
                <Gallery border = {border} addCategory={addCategory}/>
            </main>
            <footer className= {styles["next-btn-section"]}>
                <button className= {styles["next-page"]} onClick = {checkCategoryCriteria}>
                    Next Page
                </button>
            </footer>
        </>
        
    )
}

export default Categories
