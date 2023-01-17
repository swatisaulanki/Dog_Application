import React, { useState } from 'react'
import styles from "./Register.module.css"
import {Link, useNavigate} from "react-router-dom";
const Register = () => {
    
  const [email, setEmail]=useState("")
  const [err,setErr]=useState("");
  const [pass, setPass]=useState();
  const navigate=useNavigate();
const handleForm=(e)=>{
  e.preventDefault();
  
localStorage.setItem("useremails", JSON.stringify(email));
localStorage.setItem("userpass", JSON.stringify(pass))


if(email === ""){
  setErr("Email can't be empty")
}
else if(email.length <= 12){
  setErr("Please Enter Valid Email");
}
else{
  alert("Register Successful!")
  navigate("/login")
}

};
  return (
    <div>
      <form className={styles.logincontain} onSubmit={handleForm}>
          
        <div className={styles.emaildiv}>
        <h2>Register</h2>

       

         <div className={styles.namehead}><p>Name</p> </div>

        <div className={styles.name}> 
   
          <input type="name" placeholder='Enter your  name'/>
         </div>

        <div className={styles.emailhead}><p>Email</p> </div>

        <div className={styles.email}> 
   
          <input type="email" placeholder='Enter your email'  value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <h5 style={{color:"red", marginLeft:"30%", fontSize:"10px"}}>{err}</h5>
         </div>
         <div className={styles.passhead}><p>Password</p> </div>

        <div className={styles.pass}>

        <input type="password" placeholder='Enter your password' onChange={(e)=>{setPass(e.target.value)}}/>

        </div>

        <div className={styles.phonehead}><p>Phone </p> </div>

<div className={styles.number}> 

  <input type="number" placeholder='Enter your  number'/>
 </div>
        <div className={styles.submit}>
            <input type="submit"/>
            </div>

            <div className={styles.ifuser}>
                <h3>If Already user? <Link to="/login">Login</Link></h3>
            </div>

          
        </div>
      </form>
    </div>
  )
}

export default Register
