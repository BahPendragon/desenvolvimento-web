import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const EstiloGeral = styled.div `
    font-family: Roboto, sans-serif;
    text-align: center
`;

const EstiloFooter = styled.footer `
    background-color: #333;
    text-align: center;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <>
        <EstiloGeral>
            <h1> 
                Sobre nós.
            </h1>
        </EstiloGeral> 

        <EstiloGeral>   
            <h3>
                <hr/>SerratecPokedex
            </h3>
        </EstiloGeral> 

        <EstiloGeral>   
            <p> 
                nós somos a SerratecPokedex, a maior vendedora de pokemons da américa
                latina. <br/>com mais de <b>3 milhões</b> de pokemons vendidos 
                <br/>e 22 anos de mercado, nossos clientes sempre contam com o melhor atendimento e a <br/>melhor 
                qualidade, é claro. Possuimos lojas em todo o território nacional.<br/> 
                Entrentando a nossa matriz se localiza no Rio de janeiro.<br/> Caso não
                queira sair de casa nestes tempos de pandemia<br/> mas ainda assim tem
                interesse em obter seu próprio pokemon <br/>nós do SerratecPokedex,
                também entregamos em todo Brasil, <br/>Peça já o seu pelo numero: 
                <b>(21) 98801-7825</b>.
            </p>
        </EstiloGeral>

        <EstiloGeral>
            <EstiloFooter>
                CNPJ: 71.631.913/0001-54 || Inscrição Estadual: 39.347.47-4 <br/>
                Data de abertura: 02/04/1999<br/>
                Copyrights TODOS OS DIRETOS RESERVADOS AO SERRATECPOKEDEX<br/>
                Endereço: Emanuel Franco, N° 538, Bairro: Campo Grande<br/> 
                Cidade: Rio de Janeiro.<br/>
                Email: serratecPokedex@contactus.com.br

                <div className={classes.root}>
                <Button variant="contained" color="primary" href="https://www.google.com/intl/pt/gmail/about/#">
                    Contato
                </Button>
                </div>

            </EstiloFooter>
        </EstiloGeral>
    </>
  );
}

function Sobre() {
    return(
    <div>
        <h1>Sobre</h1>
            <br />
        <Link to="/produtos">Produtos</Link>
    </div>)
}


export default Sobre;