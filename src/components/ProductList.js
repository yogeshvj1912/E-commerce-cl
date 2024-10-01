import React, { useContext } from 'react';
import AddContext from './AddContext';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './ProductList.module.css'

function ProductList() {
    const contextData = useContext(AddContext);
    const { id } = useParams();
    const navigate = useNavigate()

    // Filter products based on the type from the URL parameter
    const filteredProducts = contextData.totalData?.filter((ele) => 
        (ele.type && ele.type.toLowerCase() === id.toLowerCase()) || 
        (ele.gender && ele.gender.toLowerCase() === id.toLowerCase())
    ) || [];

    return (
        <div className={styles.container}>
            <h1>Results</h1>
            {
                filteredProducts.map((ele)=>{
                    return <div onClick={()=>{navigate(`/show-product/${ele._id}`)}} key = {ele._id} className={styles.row}>
                 <div className={styles.image}><img src={`http://localhost:8000/${ele.image}`} alt="" /></div>
                 <div className={styles.details}>
                    <h2>{ele.title}</h2>
                    <div>₹{ele.price}</div>
                    
                    <div>{ele.description.ram}</div>
                    <div>{ele.description.memory}</div>
                    <button className={styles.add_button}>Add to cart</button>
                 </div>
                    </div>
                })
            }
            
        </div>
    );
}

export default ProductList;


// {filteredProducts.length > 0 ? (
//     filteredProducts.map((ele) => (
//         <div key={ele._id}> {/* Use unique key from the product */}
//             <h2>{ele.brand}</h2> {/* Render specific properties */}
//             <p>Type: {ele.type}</p>
//             <p>Operating System: {ele.operating_system}</p>
//             <p>RAM: {ele.ram}</p>
//             <p>Memory: {ele.memory}</p>
//             <p>CPU Model: {ele.cpu_model}</p>
//             <p>Details: {ele.details}</p>
//         </div>
//     ))
// ) : (
//     <p>No products found for this category.</p>
// )}