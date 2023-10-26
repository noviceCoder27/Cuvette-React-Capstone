import Form from './Form'
import styles from './InputSection.module.css'

const InputSection = () => {
  return (
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
  )
}

export default InputSection
