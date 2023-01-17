import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

import styles from "./Homepage.module.css"
const Homepage = () => {
    const [data,setData]=useState([])
    const navigate=useNavigate()

    const GetApi=()=>{
        axios.get("https://dog.ceo/api/breeds/list/all")
        .then((res)=>{
            console.log(res.data.message)
            setData(res.data.message)
        })
    }
    const handleClick=()=>{
      navigate("/detail")
  }
    useEffect(()=>{
        GetApi()
    },[])
    let breeds=Object.keys(data)
  return (
    <div className={styles.homecontain}>
      {
        breeds.length>0 && breeds.map((item)=>{
            return(
                <div className={styles.imgContain} onClick={handleClick}>
                  <img src="https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg"/>
                  <h2>{item}</h2>

                </div>
            )
        })
      }
    </div>
  )
}

export default Homepage
