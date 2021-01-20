import React from "react";
import Logo from "../img/logo.png";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{minWidth:"500px"}}>
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="Logo RMP" />
        </a>
        <button
          className="navbar-toggler mr-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src="https://img.icons8.com/office/40/000000/hamburger.png"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item px-2">
              <a className="nav-link" aria-current="page" href="#sobremi">
                Sobre mí
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#">
                Habilidades
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#">
                Proyectos
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

