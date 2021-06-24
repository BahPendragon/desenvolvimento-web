import React, { useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

export default () => {

    const [pedidos, setPedidos] = React.useState([]);

    const EstiloProdutos = styled.div`
    text-align:left;
    font-family: Times New Roman, sans-serif;
    border: 5px solid black;
    border-radius: 10px;
    `;

    const EstiloPedido = styled.div`
    text-align:right;
    font-family: Times New Roman, sans-serif;
    border: 5px solid black;
    border-radius: 10px;
    `;

    React.useEffect(() => {
        axios.get("http://localhost:8080/api/pedidos").then((response) => setPedidos(response.data));
      }, []);

      return (
          <div>
              
              <ul>
              {pedidos.map((pedido) =>(
                  <div>{pedido.produtos.map((produto) =>(
                    <EstiloProdutos>
                    <>
                    <li key={produto.id}>{produto.nome}</li>
                    <li key={produto.id}>{produto.preco}</li>
                    </>
                    </EstiloProdutos>
                    ))}
                    <EstiloPedido>
                    {pedido.valorTotal}
                  </EstiloPedido></div>
                  ))}
              </ul>
              <EstiloPedido>
              <Button>Finalizar pedido</Button>
              </EstiloPedido>
          </div>
      )
}