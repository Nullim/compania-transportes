import React from "react";
import { NavLink } from "react-router-dom";
import '../../styles/components/layout/Nav.css';

const Nav = (props) => {
  return (
    <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item"><NavLink to="/" className={({ isActive }) => isActive ? 'activo' : "a"}>Home</NavLink></li>
          <li className="navbar-item"><NavLink to="/nosotros" className={({ isActive }) => isActive ? 'activo' : "a"}>Nosotros</NavLink></li>
          <li className="navbar-item"><NavLink to="/novedades" className={({ isActive }) => isActive ? 'activo' : "a"}>Novedades</NavLink></li>
          <li className="navbar-item"><NavLink to="/contacto" className={({ isActive }) => isActive ? 'activo' : "a"}>Contacto</NavLink></li>
        </ul>
    </nav>
  );
}

export default Nav;
