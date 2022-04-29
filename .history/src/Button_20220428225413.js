import React from 'react';
import './App.css';


const Button = ({funcion,color}) => {

    return (
        <div className="button">
            <button onClick={funcion} style={{background:color}} > > </button>
        </div>
    );
}

export default Button;
