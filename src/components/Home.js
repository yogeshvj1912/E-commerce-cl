import React, { useEffect, useState } from 'react'
import axios from "axios";
import styles from './Home.module.css'

function Home() {
  const [homeAppliance, setHomeAppliance] = useState([])
  const [loding, setLoading] = useState(false)

  useEffect(() => {
    getProductData()
  }, [])

  let getProductData = async () => {
    try {
      const getData = await axios.get("http://localhost:8000/api/electronics")
      setHomeAppliance(getData.data)
      console.log(getData.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Best Selling Products</div>
     <div className={styles.row}> 
      {homeAppliance.map((ele, i) => {
        if (ele.rating >= 1) {
          return <div key={i} className={styles.cards}>
            <div className={styles.image}>
              <img src={`http://localhost:8000/${ele.image}`} alt="" />
            </div>
           <div className={styles.details}>
           <div >{ele.title}</div>
           <div>₹{ele.price}</div>
           </div>
          </div>
        }
      })}
      </div>
    </div>
  )
}

export default Home