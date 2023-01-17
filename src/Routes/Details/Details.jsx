import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const Details = () => {
  
    const [random,setRandom]=useState();

    const GetApi=()=>{
      axios.get("https://dog.ceo/api/breeds/image/random")
      .then((res)=>{
          console.log(res.data.message)
          setRandom(res.data.message)
      })
  }
  
  useEffect(()=>{
      GetApi()
  },[])

  return (
    <div>
        <img style={{height:"50vh", marginTop:"80px", borderRadius:"20px",    boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}} src={random} alt="random Image" />
    </div>
  )
}

export default Details