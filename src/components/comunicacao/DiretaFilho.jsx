
/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default props => {
    return (
        <div>
            <span>{props.nome} </span>
            <span><strong>{props.idade}</strong> </span>
            <span>{props.nerd ? 'true' : 'false'}</span>
        </div>
    )
}