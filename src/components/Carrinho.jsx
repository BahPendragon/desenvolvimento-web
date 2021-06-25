import React, { useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Alert from "@material-ui/lab/Alert";
import Navbar from './Navbar'

const useStyles = makeStyles((theme) => ({
    
    root: {
      flexGrow: 1,
      display: "flex",
      flexWrap:"wrap"
    },
  
    paper: {
      padding: theme.spacing(2),
      marginTop: "15px",
      margin: "20px",
      maxWidth: 500,
      background: "#f2f2f2"
    },
  
    image: {
      width: 128,
      height: 128
    },
  
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%"
    }
  }));

export default () => {
    const classes = useStyles();

   const [alerta, setAlerta] = React.useState(false);
    const [pedidos, setPedidos] = useState([]);
    const [id, setId] = useState(0);

    React.useEffect(() => {
        axios.get("http://localhost:8080/api/pedidos").then((response) => {setPedidos(response.data); setId(response.data.id); console.log("Será?", id);});
      }, []);

   const finalizarPedido = (pedido) =>{ 
        setPedidos([]);
       setAlerta(true);
   }

      return (
          <div>
            <Navbar/>
              <ul>
              {pedidos.map((pedido) =>(
                  <div>
                  <div>{pedido.produtos.map((pokemon) =>(
                    <Grid container spacing={3}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img
                      className={classes.img}
                      alt="complex"
                      src={pokemon.imagem}
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        <b>{pokemon.nome}</b>
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {pokemon.tipo}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {pokemon.descricao}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
            </Grid>
                    ))}
                    VALOR DO PEDIDO: R${pedido.valorTotal},00
                    </div>
                    </div>
                   
                  ))}
              </ul>
                    <Button onClick={finalizarPedido}>Finalizar Compra</Button>
                  {alerta && (
                    <Alert severity="success" variant="filled">
                    Compra Finalizada com Sucesso!
                    </Alert>)}
          </div>
      )
}