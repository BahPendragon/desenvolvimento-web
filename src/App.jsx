
import React from 'react'
import Carrinho from './components/Carrinho';
import Produtos from './components/Produtos'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Estilo = styled.h1`
    text-align: center;
`;


function App() {
    return(
    <div>
<Carrinho></Carrinho>
            <br />
        <Link to="/home">Home</Link>
    </div>)
}


export default App;
