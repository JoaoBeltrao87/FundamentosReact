/* eslint-disable import/no-anonymous-default-export */
import './App.css'
import React from "react";

import Card from "./components/layout/Card";

import Contador from "./components/contador/Contador" 
import Input from "./components/formulario/Input"
import DiretaPai from "./components/comunicacao/DiretaPai"
import UsuarioInfo from './components/condicional/UsuarioInfo';
import ParOuImpar from './components/condicional/ParOuImpar';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ListaAlunos from './components/repeticao/ListaAlunos';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Familia from './components/basicos/Familia';
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio";
import IndiretaPai from "./components/comunicacao/IndiretaPai"

export default () =>
    <div className="App">
        <h1> Fundamentos React </h1>

        <div className="Cards">

        <Card titulo="#13 - Contador" color="#424242">
                <Contador numeroInicial={10}></Contador>
            </Card>

        <Card titulo="#12 - Componente Controlado" color="#E45F56">
                <Input></Input>
            </Card>

        <Card titulo="#11 - Comunicacao Indireta" color="#8BAD39">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#10 - Comunicacao Direta" color="#59323C">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#09 - Renderização Condicional" color="#99999">
                <UsuarioInfo usuario={{ nome: 'Fernando' }}></UsuarioInfo>
                <UsuarioInfo usuario={{ email: 'fer@nando.com' }}></UsuarioInfo>
                <UsuarioInfo> </UsuarioInfo>

            </Card>

            <Card titulo="#08 - Renderizacao Condicional" color="#982395">
                <ParOuImpar numero={20}></ParOuImpar>
                <ParOuImpar numero={21}></ParOuImpar>
                <ParOuImpar numero={311}></ParOuImpar>
                <ParOuImpar numero={41}></ParOuImpar>
            </Card>

            <Card titulo="#07 - Desafio Repeticao" color="#3A9AD9">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Repeticao" color="#FF4C65">
                <ListaAlunos></ListaAlunos>

            </Card>

            <Card titulo="#05 - Componente com filhos" color="#00C8F8">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>

            </Card>

            <Card titulo="#04 - Desafio Aleatorio" color="#099">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#120">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parametro" color="#043">
                <ComParametro
                    titulo="Situacao do aluno"
                    aluno="Pedro"
                    nota={9.3}
                />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#028">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
