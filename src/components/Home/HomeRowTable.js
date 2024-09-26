import React from 'react'
import styles from './Home.module.css'
import { useNavigate } from 'react-router-dom'

function HomeRowTable({productDatas,productHeading}) {
  const navigate = useNavigate()
  return (
    <>
         <div className={styles.heading}>Best Selling {productHeading} Products</div>
     <div className={styles.row}> 
      {productDatas.map((ele, i) => {
        if (ele.rating >= 1) {
          return <div onClick={()=>{navigate(`/show-product/${ele._id}`)}} key={i} className={styles.cards}>
            <div className={styles.image}>
              <img src={`https://e-commerce-sv.onrender.com/${ele.image}`} alt="" />
            </div>
           <div className={styles.details}>
           <div >{ele.title}</div>
           <div>₹{ele.price}</div>
           </div>
          </div>
        }
      })}
      </div>
    </>
  )
}

export default HomeRowTable