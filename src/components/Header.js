import React, { useContext, useState } from 'react'
import styles from './Header.module.css'
import AddContext from './AddContext'
import { useNavigate } from 'react-router-dom'

function Header() {
  const contextData = useContext(AddContext)
  const [bars, setBars] = useState(false)
  const [activeCategory, setActiveCategory] = useState('') // State to track the active category
  const navigate = useNavigate()

  const toggleCategory = (category) => {
    // If the clicked category is the active one, close it, otherwise open the new category
    setActiveCategory(activeCategory === category ? '' : category);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ShopWavs</h1>
      <div className={styles.search_bar}>
        <input
          type="text"
          placeholder='Search Products'
          value={contextData.searchQuery}
          onChange={(e) => { contextData.setSearchQuery(e.target.value) }}
        />
        <button className={styles.search_button}>Search</button>
      </div>
      <div className={styles.menu_bar_div}>
        <div className={styles.menu}>
          <div onClick={() => { setBars(true) }} className={styles.menu_bar}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
          
          {bars ? (
            <div className={styles.open_menu}>
              <span onClick={() => { setBars(false); setActiveCategory('') }} className={styles.close}>X</span>
               <div onClick={() => { setBars(false); navigate("/")}}>Home</div>
              {/* Electronics Menu */}
              <div onClick={() => toggleCategory('electronics')}>Electronics</div>
              {activeCategory === 'electronics' && (
                <div className={styles.menu_inside_list}>
                  <div onClick={()=>{navigate("/product-list/smartphone");setBars(false);setActiveCategory('')}} >Smart phones</div>
                  <div onClick={()=>{navigate("/product-list/laptop");setBars(false);setActiveCategory('') }} >Laptops</div>
                  <div onClick={()=>{navigate("/product-list/tv");setBars(false);setActiveCategory('') }} >Smart TV</div>
                </div>
              )}

              {/* Home Appliances Menu */}
              <div onClick={() => toggleCategory('homeAppliances')}>Home Appliances</div>
              {activeCategory === 'homeAppliances' && (
                <div className={styles.menu_inside_list}>
                  <div onClick={()=>{navigate("/product-list/Refrigerator");setBars(false);setActiveCategory('') }} >Refrigerators</div>
                  <div onClick={()=>{navigate("/product-list/Air Conditioner");setBars(false);setActiveCategory('') }} >AC</div>
                  <div onClick={()=>{navigate("/product-list/microwave");setBars(false);setActiveCategory('') }} >Microwaves</div>
                </div>
              )}

              {/* Cloths Menu */}
              <div onClick={() => toggleCategory('cloths')}>Cloths</div>
              {activeCategory === 'cloths' && (
                <div className={styles.menu_inside_list}>
                  <div onClick={()=>{navigate("/product-list/male");setBars(false);setActiveCategory('') }} >Men</div>
                  <div onClick={()=>{navigate("/product-list/female");setBars(false);setActiveCategory('') }} > Women</div>

                </div>
              )}
            </div>
          ) : ""}
        </div>
      </div>
    </div>
  )
}

export default Header
