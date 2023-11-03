import styles from './Common.module.css'


const Category = ({movie,category}) => {
    const displayImages = movie?.map((item,index) => (
        <div key = {index}>
            <img src= {`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt="Movie Image" />
        </div>
    ))
   
    return (
        <section key = { category} className={styles["all-movies"]}>
            <h3>{category}</h3>
            <div className= {styles["movie-images"]}>
                {displayImages}
            </div>
        </section>
        
    )
}

export default Category

