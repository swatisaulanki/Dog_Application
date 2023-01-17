import React, { useContext } from 'react'
import styles from "./Navbar.module.css"
import {Link, useNavigate} from "react-router-dom";
import { Contextsfetch } from '../context/Contexts';
const Navbar = () => {

  const {isAuth,logout}=useContext(Contextsfetch)
  const navigate= useNavigate();
  const handleLogin=() =>{
    if (isAuth){
      logout();
    }
    else{
      navigate("/login")
    }
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.imgcontain}>
      <Link to="/">
        <img src= "https://static.vecteezy.com/system/resources/previews/000/079/896/original/paw-print-vector-icon.jpg"
         alt="logo" /></Link>
         <div>List of Breeds</div>
      </div>
      

      <div className={styles.btncontain}>
       
      <button onClick={handleLogin}  >
            {isAuth ? "logout" : "Login" }
        </button>
      </div>
    </div>
  )
}

export default Navbar
