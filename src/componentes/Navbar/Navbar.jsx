import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <Link to="/">
        <h1>Tiendas Ishop</h1>
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to="categoria/2">Telefonos</NavLink>
          </li>
          <li>
            <NavLink to="categoria/3">Accesorios</NavLink>
          </li>
        </ul>
      </nav>

    </header>
  )
}

export default Navbar