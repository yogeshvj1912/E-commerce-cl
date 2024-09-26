import React from 'react'
import styles from './Main.module.css'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import ShowProduct from './ShowProduct'
import Home from './Home/Home'

export default function Main() {
  return (
    <div className={styles.container}>
        <Header/>
      <Outlet>
        <Home/>
        <ShowProduct/>
      </Outlet>
    </div>
  )
}
