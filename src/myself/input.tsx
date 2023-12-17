import React from "react";

function Input({title, data, content, happiness}: { title: string; data: string; content: string; happiness: string }) {
    return(
        <div>
            <h1>{title}</h1>
            <p>{data}</p>
            <p>{content}</p>
            <p>Happiness: {happiness}</p>
        </div>
    );
}

export default Input;