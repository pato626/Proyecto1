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
<<<<<<< HEAD
                        <img src={Search} alt="" className='logo2'/>
=======
                        <img src={Search} alt="" />
>>>>>>> 94ce6f7569e3dbc1ac0f75ffa8555bfa865f17de
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