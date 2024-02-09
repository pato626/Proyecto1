import React from 'react'
import Hogar from "../assets/Hogar.png"

const Inicio = () => {
  return (
    <div>
      <h1 className='Title'>Market Now</h1>
        <div className='Inicio'>
        <h2>Bienvenido al sitio web número 1 en ventas de productos para el hogar .</h2>
        <div><img src= {Hogar} alt="" /></div>
        </div>
    </div>
  )
}

export default Inicio