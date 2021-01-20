import React from "react";
import Perfil from "../img/perfil.jpg";
import './about.css';

export default function About() {
  return (
    <div className="container row mx-auto pt-5">
      <div className="col-12 col-lg-6 my-auto">
        <h1 className="about-title display-1">
          <span style={{backgroundColor:"black", color:"white"}}>Hola!</span> Soy Rodrigo.
        </h1>
        <p className="text-about mt-1">
          Soy de Buenos Aires, Argentina. Tengo 25 años y soy un aficionado del
          diseño y la programación web, aunque mi hobbie numero uno es hacer
          deportes, en especial basquet. Me concidero buen lider, gran compañero
          y competitivo aunque priorizo la amistad y disfrutar del momento.
        </p>
        <a href="https://www.linkedin.com/in/rodrigomanuelpenela/" target="_blank">
          <img className="mx-2 mt-2" src="https://img.icons8.com/fluent/48/000000/linkedin.png"/>
        </a>
        <a href="https://github.com/Rodriip95" target="_blank">
          <img className="mx-2 mt-2" src="https://img.icons8.com/fluent/48/000000/github.png"/>
        </a> 
      </div>
      <div className="col-12 col-lg-6 d-flex justify-content-center">
        <img className="about-img" src={Perfil} alt="foto de perfil"/>
      </div>
    </div>
  );
}
