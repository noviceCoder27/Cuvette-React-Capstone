import { useState } from 'react'
import styles from './Form.module.css'


const Form = () => {

    const [formInputs,setFormInputs] = useState({
        name: '',
        userName: '',
        email: '',
        mobile: '',
        isChecked: false
    });
    const [errorMsg,setErrorMsg] = useState({
        name: "",
        userName: "",
        email: "",
        mobile: "",
        isChecked: ""
    })

    const [errorStyles,setErrorStyles] = useState({
        name: {outline: ""},
        userName: {outline: ""},
        email: {outline: ""},
        mobile: {outline: ""}
    })


    const validateName = () => {
        const name = formInputs.name;
        if(name.length === 0) {
            setErrorMsg(prevMsg => ({...prevMsg,name: "Field is required"}));
            setErrorStyles(prevStyles => ({...prevStyles,name: {outline: "1px solid red"}}));
            return false;
        }
        if(!isNaN(name)) {
            setErrorMsg(prevMsg => ({...prevMsg,name: "Enter valid name"}));
            setErrorStyles(prevStyles => ({...prevStyles,name: {outline: "1px solid red"}}));
            return false;
        }
        setErrorMsg(prevMsg => ({...prevMsg,name: ""}));
        setErrorStyles(prevStyles => ({...prevStyles,name: {outline: ""}}));
        return true;
    }

    const validateUserName = () => {
        const userName = formInputs.userName;
        if(userName.length === 0) {
            setErrorMsg(prevMsg => ({...prevMsg,userName: "Field is required"}));
            setErrorStyles(prevStyles => ({...prevStyles,userName: {outline: "1px solid red"}}));
            return false;
        }
        setErrorMsg(prevMsg => ({...prevMsg,userName: ""}));
        setErrorStyles(prevStyles => ({...prevStyles,userName: {outline: ""}}));
        return true;
    }

    const validateEmail = () => {
        const email = formInputs.email;
        if(email.length === 0) {
            setErrorMsg(prevMsg => ({...prevMsg,email: "Field is required"}));
            setErrorStyles(prevStyles => ({...prevStyles,email: {outline: "1px solid red"}}));
            return false;
        }
        const isEmail = /^[a-z0-9]+@[a-z]+\.[a-z]{1,3}$/.test(email);
        if(!isEmail) {
            setErrorMsg(prevMsg => ({...prevMsg,email: "Enter valid email"}));
            setErrorStyles(prevStyles => ({...prevStyles,email: {outline: "1px solid red"}}));
            return false;
        }
        setErrorMsg(prevMsg => ({...prevMsg,email: ""}));
        setErrorStyles(prevStyles => ({...prevStyles,email: {outline: ""}}));
        return true;
    }

    const validateMobile = () => {
        const mobileNum = formInputs.mobile;
        if(mobileNum.length === 0) {
            setErrorMsg(prevMsg => ({...prevMsg,mobile: "Field is required"}));
            setErrorStyles(prevStyles => ({...prevStyles,mobile: {outline: "1px solid red"}}));
            return false;
        }
        if(isNaN(mobileNum)) {
            setErrorMsg(prevMsg => ({...prevMsg,mobile: "Enter valid mobile number"}));
            setErrorStyles(prevStyles => ({...prevStyles,mobile: {outline: "1px solid red"}}));
            return false;
        }
        setErrorMsg(prevMsg => ({...prevMsg,mobile: ""}));
        setErrorStyles(prevStyles => ({...prevStyles,mobile: {outline: ""}}));
        return true;
    }

    const validateCheckbox = () => {
        const check = formInputs.isChecked;
        if(!check) {
            setErrorMsg(prevMsg => ({...prevMsg,isChecked: "Check this box if you want to proceed"}));
            return false;
        }
        setErrorMsg(prevMsg => ({...prevMsg,isChecked: ""}));
        return true;
    }

    const redirect = (e) => {
        e.preventDefault();
        const nameCheck = validateName();
        const userNameCheck = validateUserName();
        const emailCheck = validateEmail();
        const mobileNumCheck = validateMobile();
        const isTermsChecked = validateCheckbox();
        if(nameCheck && userNameCheck && emailCheck && mobileNumCheck && isTermsChecked) {
            localStorage.setItem('user',JSON.stringify(formInputs));
        }
    }


    return (
        <form className={styles["register-form"]} onSubmit = {(e) => redirect(e)}>
            <div className={styles["input-field"]}>
                <input value = {formInputs.name} type="text" placeholder='Name' onChange={(e) => setFormInputs(prevInputs => ({...prevInputs,name: e.target.value}))} style = {errorStyles.name}/>
                {errorMsg.name && <p>{errorMsg.name}</p>}
            </div>
            <div className={styles["input-field"]}>
            <input value = {formInputs.userName} type="text" placeholder='UserName'onChange={(e) => setFormInputs(prevInputs => ({...prevInputs,userName: e.target.value}))} style = {errorStyles.userName}/>
            {errorMsg.userName && <p>{errorMsg.userName}</p>}
            </div>
            <div className={styles["input-field"]}>
                <input value = {formInputs.email} type="text" id="email" placeholder='Email'onChange={(e) => setFormInputs(prevInputs => ({...prevInputs,email: e.target.value}))} style = {errorStyles.email}/>
                {errorMsg.email && <p>{errorMsg.email}</p>}
            </div>
            <div className={styles["input-field"]}>
                <input value = {formInputs.mobile} type="number" placeholder='Mobile'onChange={(e) => setFormInputs(prevInputs => ({...prevInputs,mobile: e.target.value}))} style = {errorStyles.mobile}/>
                {errorMsg.mobile && <p>{errorMsg.mobile}</p>}
            </div>
            <div>
                <div className={styles.checking}>
                    <input type="checkbox" value = {formInputs.isChecked} onChange={() => setFormInputs(prevInputs => ({...prevInputs, isChecked: !prevInputs.isChecked }))} />
                    <p>Share my registration data with Superapp</p>
                </div>
                {errorMsg.isChecked && <p className= {styles.error}>{errorMsg.isChecked}</p>}
            </div>
            <button className = {styles.register} type = "submit">SIGN UP</button>
        </form>
    )
}

export default Form
