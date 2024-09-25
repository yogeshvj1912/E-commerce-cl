import React from 'react'
import styles from './Main.module.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import ShowProduct from './components/ShowProduct'
import Home from './components/Home'

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
