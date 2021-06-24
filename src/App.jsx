import React from 'react'
import Carrinho from './components/Carrinho';
import MeuCarrinho from './components/MeuCarrinho';
import Produtos from './components/Produtos'
import styled from 'styled-components'

const Estilo = styled.h1`
    text-align: center;
`;

function App() {
    return(
    <div>
        <MeuCarrinho></MeuCarrinho>
    </div>)
}


export default App;