import React from 'react'
import { Link } from 'react-router-dom'
import { fade, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
import NavBar from "./NavBar"
import { AppBar } from '@material-ui/core';

const EstiloGeral = styled.div `
    font-family: Roboto, sans-serif;
    text-align: center
`;

const EstiloFooter = styled.footer `
    background-color: #333333;
    text-align: center;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.warning.light, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.warning.light, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Sobre(){
  const classes = useStyles();

  return (
    <div className={classes.grow}>
        <AppBar position="static">
            <NavBar />
        </AppBar>
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
                Nós somos a <strong>SerratecPokedex</strong>, a maior vendedora de pokemons da américa
                latina! <br/>Já passamos de <b>3 milhões</b> de pokemons vendidos. 
                <br/>Juntos à 22 anos, proporcionando o melhor atendimento e qualidade para os nossos usuários, com lojas em todo o território nacional.<br /><br />
                <br/> <em>Entregamos em todo o Brasil!</em> Você não precisa sair de casa para se divertir e ter o seu próprio Pokemon.<br/><strong>Peça já!</strong>                
            </p>
        </EstiloGeral>

        <EstiloGeral>
            <EstiloFooter>
                <Footer
                    columns={[
                    {
                        title: 'CNPJ: 71.631.913/0001-54 || Inscrição Estadual: 39.347.47-4',
                    },
                    {
                        title: 'Data de abertura: 02/04/1999',
                    },
                    {
                        title: 'Copyrights TODOS OS DIRETOS RESERVADOS AO SERRATECDEX',
                    },
                    {
                        title: 'Endereço: Emanuel Franco, N° 538, Bairro: Campo Grande',
                    },
                    {
                        title: 'Cidade: Rio de Janeiro',
                    },
                    {
                        title: 'Email: serratecPokedex@exemplo.com',
                    }
                    ]}
                    bottom={
                        <div className={classes.root}>
                        <Button variant="contained" color="primary" href="https://www.google.com/intl/pt/gmail/about/#">
                        Contato
                        </Button>
                        </div>
                    }
                />
            </EstiloFooter>
        </EstiloGeral>
    </div>
)};