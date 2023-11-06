import { useEffect } from 'react'
import styles from './Weather.module.css'
import { useState } from 'react';
import PressureIcon from './../../assets/pressure.png'
import WindIcon from './../../assets/wind.png'
import HumidityIcon from './../../assets/humidity.png'


const Weather = ({date,time}) => {
    const [weather,setWeather] = useState(null);
    const fetchLocation = async () => {   
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=565b2df0c55743a8813161523232510&q=${lat},${lon}`);
            const data = await response.json();
            setWeather(data.current);
        },
        async() => {
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=565b2df0c55743a8813161523232510&q=Guwahati`);
            const data = await response.json();
            setWeather(data.current);
        });
        
    }
    useEffect(() => {
        fetchLocation();
    },[]);
    return (
        <div className={styles.weather}>
            <div className= {styles.date}>
            <p>{date.day}-{date.month}-{date.year}</p>
            <p>{time.hours}:{time.minutes} {time.amOrPm}</p>
            </div>
            <div className={styles.report}>
                <div>
                    <img src = {weather?.condition.icon} alt = "Weather icon" className = {styles["weather-icon"]}/>
                    <p className = {styles["weather-text"]}>{weather?.condition.text}</p>
                </div>
                <div>
                    <div className={styles["col-border"]}></div>
                </div>
                <div className={styles.col3}>
                    <p className={styles["temp-text"]}>{weather?.temp_c}°C</p>
                    <div className={`${styles.info}`}>
                        <img src= {PressureIcon} alt="Pressure Icon" className = {styles["pressure-icon"]}/>
                        <p className = {styles["pressure-text"]}>{weather?.pressure_mb} mbar <br/> Pressure</p>
                    </div>
                </div>
                <div>
                    <div className={styles["col-border"]}></div>
                </div>
                <div className={styles.col3}>
                    <div className={`${styles.info}`}>
                        <img src={WindIcon} alt="Wind Icon" className = {styles["wind-icon"]}/>
                        <p className = {styles["wind-text"]}>{weather?.wind_kph} km/h <br />Wind</p>
                    </div>
                    <div className={`${styles.info} `}>
                        <img src={HumidityIcon} alt="Humidity Icon" className = {styles["humidity-icon"]}/>
                        <p className = {styles["humidity-text"]}>83% <br />Humidity</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather
