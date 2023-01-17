import React, { useContext, useState } from 'react'
import { Contextsfetch } from '../../context/Contexts';

import styles from "./Login.module.css"
const Login = () => {
  const [email1, setEmail]=useState();
  const [pass1, setPass]=useState();
  const {login, isAuth}=useContext(Contextsfetch);

  const handleSubmit =(e)=>{
      e.preventDefault();
      let getmail= JSON.parse(localStorage.getItem("useremails"));
      let getpass= JSON.parse(localStorage.getItem("userpass"));
      if(getmail === email1 && getpass === pass1){
          alert("login successfully");
          login();
      }
      else{
          alert("login failed");
      }
  };
    
  return (
    <div>
      <form className={styles.logincontain} onSubmit={handleSubmit}>
          
        <div className={styles.emaildiv}>
        <h2>Login</h2>
        <div className={styles.emailhead}><p>Email</p> </div>

        <div className={styles.email}> 
   
          <input type="email" placeholder='Enter Email' onChange={(e)=>{setEmail(e.target.value)}} />
         </div>
         <div className={styles.passhead}><p>Password</p> </div>

        <div className={styles.pass}>

        <input type="password" placeholder='Enter Password' onChange={(e)=>{setPass(e.target.value)}}/>

        </div>
        <div className={styles.submit}>
            <input type="submit"/>
        </div>

          
        </div>
      </form>
    </div>
  )
}

export default Login
