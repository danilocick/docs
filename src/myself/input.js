import React from "react";

function Input(props){
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.data}</p>
            <p>{props.content}</p>
            <p>Happinest: {props.happiest}</p>
        </div>
    );
}

export default Input;