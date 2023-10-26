import styles from './../components/register/Common.module.css'
import SuperAppImg from './../assets/super.png'
import InputSection from '../components/register/InputSection'




const Register = () => {
  return (
    <main className={styles["register-page"]}>
      <section className= {`${styles["image-holder"]} ${styles.section}`}>
        <img src= {SuperAppImg} alt = "Disco Image" />
        <p>Discover new things on Superapp</p>
      </section>
      <InputSection />
    </main>
   
  )
}

export default Register
