import React, { useContext, useEffect, useState } from 'react'
import axios from "axios";
import styles from './Home.module.css'
import HomeRowTable from './HomeRowTable';
import AddContext from '../AddContext';

function Home() {

  const contextData = useContext(AddContext)

 


  return (
    <div className={styles.container}>

{contextData.isLoading?<h1>Loading...</h1>:   <><HomeRowTable productDatas={contextData.electronics} productHeading={"Electronic"} />
      <HomeRowTable productDatas={contextData.homeAppliances} productHeading={"Home Appliance"} />
      <HomeRowTable productDatas={contextData.cloths} productHeading={"Cloth"} /></>}

   
    </div>
  )
}

export default Home