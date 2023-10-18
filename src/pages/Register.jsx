import styles from './../styles/register/Register.module.css'
import SuperAppImg from './../assets/super.png'
import Form from '../components/register/Form'




const Register = () => {
  return (
    <main className={styles["register-page"]}>
      <section className= {`${styles["image-holder"]} ${styles.section}`}>
        <img src= {SuperAppImg} alt = "Disco Image" />
        <p>Discover new things on Superapp</p>
      </section>
      <section className={`${styles["register-section"]} ${styles.section}`}>
        <div className={styles.heading}>
          <h1>Super App</h1>
          <p>Create your new account</p>
        </div>
       
        <Form />
        <div className={styles.terms}>
          <p>
            By clicking on Sign up. you agree to Superapp <span>Terms and Conditions of Use</span>
          </p>
          <p>
            To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span>
          </p>
        </div>
        
      </section>
    </main>
   
  )
}

export default Register
