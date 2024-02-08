import React from 'react'
import Cart from "../assets/Cart.svg"
import Search from "../assets/Search.png"

const Navbar = () => {
    return (
        <div>
            <header className='navbar'>
                <nav>
                    <ul>

                        <a href=""> <li>Inicio</li> </a>
                        <a href=""> <li>Productos</li></a>
                        <div className='search-box'>
                        <input type="search" placeholder='search' />
                        <img src={Search} alt="" />
                        </div>
                        <a href=""> <li>Contacto</li></a>
                        <a href=""> <li><img src={Cart} alt="" className='logo'/></li></a>

                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar