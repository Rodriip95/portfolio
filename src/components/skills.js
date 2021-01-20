import React from "react";
import "./skill.css";

export default function Skills() {
  return (
    <>
      <div style={{ height: "150px", overflow: "hidden", marginTop: "38px" }}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "rgb(86, 12, 206)" }}
          />
        </svg>
      </div>
      <div
        id="skill"
        style={{ backgroundColor: "rgb(86, 12, 206)", width: "100%" }}
      >
        <h1>Habilidades</h1>
        <div className="d-flex justify-content-center">
          <div className="tarjeta-skill">
            <h2 className="titulos-skills">Front-End</h2>
            <div className="listado-img">
              <div>
                <img src="https://img.icons8.com/color/48/000000/html-5.png" />
                <p>HTML</p>
              </div>
              <div>
                <img src="https://img.icons8.com/color/48/000000/css3.png" />
                <p>CSS</p>
              </div>
              <div>
                <img src="https://img.icons8.com/color/48/000000/bootstrap.png" />
                <p>Bootstrap</p>
              </div>
              <div>
                <img src="https://img.icons8.com/color/48/000000/javascript.png" />
                <p>Javascript</p>
              </div>
              <div>
                <img src="https://img.icons8.com/color/48/000000/react-native.png" />
                <p>React</p>
              </div>
              <div>
                <img src="https://img.icons8.com/color/48/000000/sass.png" />
                <p>Sass</p>
              </div>
            </div>
          </div>
          <div className="tarjeta-skill">
            <h2 className="titulos-skills">Back-End</h2>
            <div className="listado-img">
              <div>
                <img src="https://img.icons8.com/color/48/000000/nodejs.png" />
                <p>Node</p>
              </div>
              <div>
                <img src="https://img.icons8.com/color/48/000000/firebase.png" />
                <p>Firebase</p>
              </div>
              <div>
                <img src="https://img.icons8.com/color/48/000000/mongodb.png" />
                <p>Mongo</p>
              </div>
              <div>
                <img src="https://img.icons8.com/color/50/000000/postgreesql.png" />
                <p>PostgreeSQL</p>
              </div>
              <div>
                <img src="https://img.icons8.com/ios-filled/50/000000/mysql-logo.png" />
                <p>MySQL</p>
              </div>
              <div>
                <img src="https://img.icons8.com/material-outlined/48/000000/json.png" />
                <p>JSON</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
