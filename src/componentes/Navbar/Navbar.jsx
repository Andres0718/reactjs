import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'

const Navbar = () => {
  return (
    <header>
        <h1>Tiendas Ishop</h1>

        <nav>
            <ul>
                <li>Telefonos</li>
                <li>Accesorios</li>
                <li>Computadores</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default Navbar