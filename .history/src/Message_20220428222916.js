import React from 'react';
import Button from './Button';
import messages from './quotes.json'
import { useState } from 'react';
const Message = () => {
     const colors=["#845EC2","#D65DB1","#FF6F91","#F9F871","#0081CF","#008F7A","#4D8076","#845EC2","#00C9A7","#FF8066"]
    const getRandom=()=>Math.floor(Math.random()* messages.length)
    const [message,setMessage] =  useState(messages[getRandom()])
     
   
    const changeMessage=()=>{
        const random=getRandom()
        setMessage(messages[random])
    }

    const color= colors[Math.floor( Math.random()*colors.length)]

    document.body.style=`background: ${color}`

    console.log(messages.length)
    console.log(Math.random())
    console.log(messages.length*Math.random())
    console.log(setMessage())
    return (
        <div className="message">
            <p style={{color:color}}>{message.quote}</p>
            <h3 style={{color:color}}>{message.author}</h3>
           <Button funcion={changeMessage} color={color}/>
        </div>
    );
}

export default Message;
