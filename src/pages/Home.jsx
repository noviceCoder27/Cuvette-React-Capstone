import styles from './../components/home/Common.module.css'
import ProfilePic from './../assets/profile-pic.png'
import News from '../components/home/News'
import Weather from '../components/home/Weather'
import { useEffect } from 'react'
import { useState } from 'react'
import UserCard from '../components/home/UserCard'


const Home = () => {
  const [date,setDate] = useState({day: null, month: null,year: null});
  const [time,setTime] = useState({hours: null,minuts: null,amORPm: null})
  const getToday = () => {
    const dateObj = new Date();
    let day = dateObj.getDate();
    if(String(day).length === 1) {
      day = '0'+ day;
    }
    let month = dateObj.getMonth();
    if(String(month).length === 1) {
      month = '0'+ month;
    }
    const year = dateObj.getFullYear();
    setDate({day,month,year});
  }

  const getCurrentTime = () => {
    const dateObj = new Date();
    let hours = dateObj.getHours();
    let amOrPm;
    if(hours > 12) {
      hours = hours - 12;
      if(String(hours).length === 1) {
        hours = '0' + hours;
      }
      amOrPm = 'PM'
    } else {
      amOrPm = 'AM'
    }
    let minutes = dateObj.getMinutes();
    if(String(minutes).length === 1) {
      minutes = '0'+ minutes;
    }
    setTime({hours,minutes,amOrPm});
  }
  useEffect(() => {
    getToday();
    getCurrentTime();
  },[]);
  return (
    <main className = {styles["home-page"]}>
      <section className={styles["content-section"]}>
        <div className= {styles["user-weather"]}>
            <UserCard />
            <Weather date = {date} time = {time}/>
        </div>
        <News date = {date} time = {time}/>
      </section>
      <section className={styles["nav-section"]}>
        <button>Browse</button>
      </section>
    </main>
  )
}

export default Home
