import React from 'react'
import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>ShopWavs</h1>
    <div className={styles.search_bar}>
        <input type="text" placeholder='Search Products' /> 
         <button className={styles.search_button}>Search</button>
    </div>
    <div className={styles.menu_bar}>
    
    </div>
    
    </div>
  )
}

export default Header