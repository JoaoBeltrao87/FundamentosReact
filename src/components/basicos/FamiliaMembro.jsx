import React from "react"
import './Familia'

export default props => {

    return (
        <div>{props.nome} <strong>{props.sobrenome}</strong></div>
    )
}