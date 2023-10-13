import React from 'react';
import style from "./login.module.css";
const Login=()=>{
    
   
    return (
        <>
       <div className={style.outerDiv}></div>
        <div className={style.div}>
            <h3>Login to account here</h3>
            <div className={style.parent}>
                <input name='gmail'  id='gmail' type='text'  className={style.input}
                  placeholder='Enter Gmail'/>
                <input name='password' type='text'  className={style.input}  placeholder='Enter Password'/>
                <button className={style.button}>Log In</button>
                <hr className={style.line}/>
                <button className={style.loginButton}><i className='fa-brands fa-google fa-lg' ></i><span className={style.buttonSpan}>Continue with Google</span></button>
            </div>
        </div>
       
        </>
        
    )
    
}
export default Login