import React, { useState } from "react";
import './home.css';
import ShuffleText from 'react-shuffle-text';


export default function Home(){
    const [clic, setClic] = useState(false)

    function textChange(){
        setClic(!clic)
    }

    return(
        <div id="sobremi" className="container-fluid">
            <div className="home" onClick={textChange}>
                <h1>Bienvenido a mi Portafolio!</h1>
                { !clic ? 
                    <p>Desarrollador Full Stack</p> :
                    <ShuffleText content="Will code for food"/>
                }
            </div>
        </div>
    )
}