import React from 'react'
import Hogar from "../assets/Hogar.png"

const Inicio = () => {
  return (
    <div>
      <h1 className='Title animate__animated animate__backInDown'>Now Market !</h1>
        <div className='Inicio'>
        <h2 className='animate__animated animate__backInUp'>Bienvenido al sitio web número 1 en ventas de productos para el hogar .</h2>
        <div className='animate__animated animate__backInRight'><img src= {Hogar} alt="" /></div>
        </div>
    </div>
  )
}

export default Inicio