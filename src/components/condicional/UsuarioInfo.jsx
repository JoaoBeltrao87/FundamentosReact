/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import If from './If'

export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={ usuario && usuario.nome }>
                Seja Bem vindo <strong>{ usuario.nome }</strong>!
            </If>
            <If test={ !usuario || !usuario.nome }>
                Seja Bem vindo <strong>Amigão</strong>!
            </If>

            
        </div>
    )
}