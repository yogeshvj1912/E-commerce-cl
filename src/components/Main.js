import React from 'react'
import styles from './Main.module.css'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import ShowProduct from './ShowProduct'
import Home from './Home/Home'
import ErrorPage from '../ErrorPage'

export default function Main() {
  return (
    <div className={styles.container}>
        <Header/>
      <Outlet>
        <Home/>
        <ShowProduct/>
        <ErrorPage/>
      </Outlet>
    </div>
  )
}
