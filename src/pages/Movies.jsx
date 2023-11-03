import styles from './../components/movies/Common.module.css'
import ProfilePic from './../assets/profile.png'
import { useState } from 'react'
import Category from '../components/movies/Category'
import { useEffect } from 'react'




const Movies = () => {
    const [movies,setMovies] = useState([]);
    const categories = JSON.parse(localStorage.getItem("categories"));

    const genreMap = {
        "Action": 28,
        "Drama": 18,
        "Romance": 10749
    }
    
      useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTkyYTljMDc5ODcxNWYxNTY2ODY5NGZkMWU2NGNiNCIsInN1YiI6IjY1M2Y1NjFjYmMyY2IzMDBjOTdmODc2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pk7VRsiKJDVcpeZk2kZnFudewADnOO7wEuALCQLF_zg'
            }
          };
        
        const fetchMovies = async () => {
            const allMovies = [];
            for(const category of categories) {
                const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreMap[category]}`, options);
                const data = await response.json();
                allMovies.push(data.results);
            }
            setMovies(allMovies);
        };
        fetchMovies();
    }, []);
    
    const skeleton = categories.map((_,index) => (
        <section className={styles["loading-state"]} key = {index}>
            <div className= {styles.title}></div>
            <div className= {styles["list-movies"]}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            </section>
    ))

    const displayMovies = categories.map((category,index) => (
        <Category key = {category} movie = {movies[index]} category = {category}/>
    ));
    return (
        <div className= {styles.movies}>
            <header>
                <h1>Super App</h1>
                <img src= {ProfilePic} alt="Profile Pic" />
            </header>
            <main>
                <h2>Entertainment according to your choice</h2>
                {movies.length === 0 ? skeleton : displayMovies}
            </main>
        </div>
    )
}

export default Movies
