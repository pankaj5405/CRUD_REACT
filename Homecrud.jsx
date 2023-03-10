import React from 'react'
import style from "./homecrud.module.css"
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Homecrud = () => {
  return ( 
    <section id ={style.nav}>
      <Link to = "/">CREATE-USERS</Link>  
      <Link to = "/users">USERS</Link>   
    </section>                 
  )
}                 

export default Homecrud
