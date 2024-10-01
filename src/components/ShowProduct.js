import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import AddContext from './AddContext'
import styles from './ShowProduct.module.css'
import StarRatings from 'react-star-ratings'; 


function ShowProduct() {
const {id} = useParams()
const contextData = useContext(AddContext)
console.log(contextData.totalData)

  return (
    <div className= {styles.container}>
     {
      contextData.totalData.map((ele)=>{
        if(ele._id === id){
         
     return <>
    <div className={styles.image}><img src={`https://e-commerce-sv.onrender.com/${ele.image}`} alt="" /></div>
    <div className={styles.details}>
     <h1>{ele.title}</h1>
     <h2>₹{ele.price}</h2>
     <div >{ele.rating} &nbsp;
       <StarRatings rating={ele.rating} starRatedColor="gold" numberOfStars={5} name="rating"  starDimension="25px" starSpacing="1px"  />
      </div>
      <div className={styles.buttons}> <button className={styles.add_button}>Add to cart</button> <button className={styles.add_button}>Buy Now</button></div>
      <h2>Product Details</h2>
   {ele.category === "electronics"?<table>
  <tbody>
    <tr>
      <td>Quantity</td>
      <td>{ele.quantity}</td>
    </tr>
    <tr>
      <td>Brand Name</td>
      <td>{ele.description.brand}</td>       
    </tr>
    <tr>
      <td>CPU Model</td>
      <td>{ele.description.cpu_model}</td>
    </tr>
    <tr>
      <td>Ram</td>
      <td>{ele.description.ram}</td>
    </tr>
    <tr>
      <td>Storage</td>
      <td>{ele.description.memory}</td>
    </tr>
    <tr>
      <td>Operating System</td>
      <td>{ele.description.operating_system}</td>
    </tr>
    <tr>
      <td>About Product</td>
      <td>{ele.description.details}</td>
    </tr>

  </tbody>
</table>:ele.category === "home_appliances"?<table>
  <tbody>
    <tr>
      <td>Quantity</td>
      <td>{ele.quantity}</td>
    </tr>
    <tr>
      <td>Brand Name</td>
      <td>{ele.brand}</td>       
    </tr>
    <tr>
      <td>Type</td>
      <td>{ele.type}</td>       
    </tr>
    <tr>
      <td>About Product</td>
      <td>{ele.description}</td>
    </tr>
  </tbody>
</table>:ele.category === "cloths"?<table>
  <tbody>
    <tr>
      <td>Quantity</td>
      <td>{ele.quantity}</td>
    </tr>
    <tr>
      <td>Color</td>
      <td>{ele.color}</td>       
    </tr>
    <tr>
      <td>Size</td>
      <td>{ele.size}</td>
    </tr>
    <tr>
      <td>Gender</td>
      <td>{ele.gender}</td>
    </tr>
    <tr>
      <td>Type</td>
      <td>{ele.type}</td>
    </tr>
    <tr>
    <td>About Product</td>
      <td>{ele.description}</td>
    </tr>
  </tbody>
</table>:""}
    </div>
     </>
        }
      })
     }
    </div>
  )
}

export default ShowProduct
