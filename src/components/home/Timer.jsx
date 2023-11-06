import { useState } from 'react';
import styles from './Timer.module.css'
import {BiSolidDownArrow} from 'react-icons/bi'
import {BiSolidUpArrow} from 'react-icons/bi'
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useEffect } from 'react';


const Timer = () => {
    const [startTimer,setStartTimer] = useState(false);
    const [time,setTime] = useState({hours: '00', minutes: '00', seconds: '00'});
    const [timeInSeconds,setTimeInSeconds] = useState(0);
    const [timerID,setTimerID] = useState(null);

    
    useEffect(() => {
        if((time.hours === '00' && time.minutes === '00' && time.seconds === '00') || !startTimer) {
            clearInterval(timerID);
            setStartTimer(false);
        }
    },[time]);

    const renderTime = () => {
        const showInTimer = time;
        return (
          <div className= {styles.timer}>
            <div>{showInTimer.hours}</div>
            <div>:</div>
            <div>{showInTimer.minutes}</div>
            <div>:</div>
            <div>{showInTimer.seconds}</div>
          </div>
        );
    };
    
    const increment = (condition) => {
        switch(condition) {
            case "hours": {
                let hours = parseInt(time.hours);
                hours++;
                hours = String(hours);
                if(hours.length === 1) {
                    hours = "0" + hours;
                }
                setTime({...time, hours})
                break;
            }
                
            case "minutes": {
                let minutes = parseInt(time.minutes);
                minutes++;
                minutes = String(minutes);
                if(minutes.length === 1) {
                    minutes = "0" + minutes;
                }
                setTime({...time, minutes})
                break;
            }
               
            case "seconds": {
                let seconds = parseInt(time.seconds);
                seconds++;
                seconds = String(seconds);
                if(seconds.length === 1) {
                    seconds = "0" + seconds;
                }
                setTime({...time, seconds})
                break;
            }     
        }
    }

    const decrement = (condition) => {
        switch(condition) {
            case "hours": {
                let hours = parseInt(time.hours);
                if(hours > 0) {
                    hours--;
                }
                hours = String(hours);
                if(hours.length === 1) {
                    hours = "0" + hours;
                }
                setTime({...time, hours});
                break;
            }
               
            case "minutes": {
                let minutes = parseInt(time.minutes);
                if(minutes > 0) {
                    minutes--;
                }
                minutes = String(minutes);
                if(minutes.length === 1) {
                    minutes = "0" + minutes;
                }
                setTime({...time, minutes});
                break;
            }
               
            case "seconds": {
                let seconds = parseInt(time.seconds);
                if(seconds > 0) {
                    seconds--;
                }
                seconds = String(seconds);
                if(seconds.length === 1) {
                    seconds = "0" + seconds;
                }
                setTime({...time, seconds});
                break;
            }      
        }
    }
    const decrementTimer = () => {
        setTime(prevTime => {
            let hours = parseInt(prevTime.hours);
            let minutes = parseInt(prevTime.minutes);
            let seconds = parseInt(prevTime.seconds);
            
            if(seconds > 0) {
                seconds--;
            } else if(minutes > 0) {
                seconds = 59;
                minutes--;
            } else if(hours > 0) {
                seconds = 59;
                minutes = 59;
                hours--;
            }
            
            return {
                hours: hours.toString().padStart(2, '0'),
                minutes: minutes.toString().padStart(2, '0'),
                seconds: seconds.toString().padStart(2, '0')
            };
        });
    }


    const timer = () => {
        setStartTimer(prev=> !prev);
        const shoulStart = !startTimer;
        const totalHoursInSeconds = parseInt(time.hours) * 60 * 60;
        const totalMinutesInSeconds = parseInt(time.minutes) * 60;
        const totalTime = totalHoursInSeconds + totalMinutesInSeconds + parseInt(time.seconds);
        if(shoulStart) {
            setTimeInSeconds(totalTime);
            const id = setInterval(() => {
                decrementTimer();
            }, 1000);
            setTimerID(id);
        } else {
            setTime({hours: '00', minutes: '00', seconds: '00'});
            setTimeInSeconds(0);
        }
    }

    
    return (
        <div className={styles["timer-section"]}>
            <div className={styles.progress}>
                <div className= {styles.circle}>
                    <CountdownCircleTimer
                    isPlaying = {true}
                    duration={timeInSeconds}
                    size={"200"}
                    strokeWidth={6}
                    trailColor= 'var(--blue-800)'
                    colors={"var(--light-red)"}
                    onComplete={() => ({ shouldRepeat: false})}
                    >
                        {renderTime}
                    </CountdownCircleTimer>
                </div>
            </div>
            <div className={styles["timer-setter"]}>
                <div className= {styles["timer-values"]}>
                    <div>
                        <div className={styles.title}>Hours</div>
                        <div>
                            <BiSolidUpArrow className= {`${styles.arrow}`} onClick={() => increment('hours')}/>
                            <p>{time.hours}</p>
                            <BiSolidDownArrow className= {`${styles.arrow}`} onClick={() => decrement('hours')}/>
                        </div>
                    </div>
                    <p className={styles.colon}>:</p>
                    <div>
                        <div className={styles.title}>Minutes</div>
                        <div>
                            <BiSolidUpArrow className= {`${styles.arrow}`} onClick={() => increment('minutes')}/>
                            <p>{time.minutes}</p>
                            <BiSolidDownArrow className= {`${styles.arrow}`} onClick={() => decrement('minutes')}/>
                        </div>
                    </div>
                    <p className={styles.colon}>:</p>
                    <div>
                        <div className={styles.title}>Seconds</div>
                        <div>
                            <BiSolidUpArrow className= {`${styles.arrow}`} onClick={() => increment('seconds')}/>
                            <p>{time.seconds}</p>
                            <BiSolidDownArrow className= {`${styles.arrow}`} onClick={() => decrement('seconds')}/>
                        </div>
                    </div>
                </div>
                <div className={styles.btns}>
                    <button className= {`${styles["timer-btn"]}`} onClick={timer}>{!startTimer ? 'Start' : 'Stop'}</button>
                </div>
            </div>
        </div>
    )
}


export default Timer
