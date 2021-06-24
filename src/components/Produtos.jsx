import React from 'react'
import styled from 'styled-components'

const Estilo = styled.span`
display:flex;
`;

export default () => {
    return(
    <div>
        <Estilo>Alguns Produtos Aqui</Estilo>
        <Estilo>Alguns Produtos Aqui</Estilo>
        <Estilo>Alguns Produtos Aqui</Estilo>
    </div>)
}