import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
      <div>
          <header className="nav-bar">
  
            <div className="navbar">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
  
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <Link to="/">
                      <li className="nav-item active">
                        <a className="nav-link" href="#">Inicio</a>
                      </li>
                    </Link>
                    <Link to="/Productos">
                      <li className="nav-item">
                        <a className="nav-link" href="#">Productos</a>
                      </li>
                    </Link>
                    <Link to="/About">
                      <li className="nav-item">
                        <a className="nav-link" href="#">Sobre Nosotros</a>
                      </li>
                    </Link>
                    <Link to="/Contacto">
                      <li className="nav-item">
                        <a className="nav-link" href="#">Contacto</a>
                      </li>
                    </Link>
                    <Link to="/Cart">  //no tengo views, ojo!
                      <li>
                        <a className="nav-link" href="#"><CartWidget /></a>
                      </li>
                    </Link>
                  </ul>
                </div>
               </nav>
          </div>
        </header>
      </div>
    );
  }

export default NavBar; 