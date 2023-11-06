import { useEffect } from 'react'
import styles from './News.module.css'
import { useState } from 'react'
import BackgroundImg from './../../assets/background.jpg'


const News = ({date,time}) => {
    const [news,setNews] = useState([]);
    useEffect(() => {
        const fetchNews = async () => {   
            const response = await fetch('https://newsdata.io/api/1/news?apikey=pub_31565004ab0f1a64a071f0881c111e96252d6&q=sports');
            const data = await response.json();
            setNews(data.results);
        }
        fetchNews();
    },[])
    return (
        <div className={styles.news}>
            <div className={styles["image-section"]}>
                {news[0]?.image_url && <img src= {news[0]?.image_url} alt="News Image" />}
                {!news[0]?.image_url && <img src= {BackgroundImg} alt="Background" />}
                <h3 className={styles.heading}>{news[0]?.title}</h3>
                <p className={styles.time}>{date.day}-{date.month}-{date.year} | {time.hours}:{time.minutes} {time.amOrPm}</p>
                <div className={styles.overlay}></div>  
            </div>
            <div className= {styles["news-content"]}>
                <p>{news[0]?.content}</p>
            </div>
        </div>
    )
}

export default News
