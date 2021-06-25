import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import axios from 'axios';
import CarrinhoElements from './CarrinhoElements';
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

function Produtos() {
  const classes = useStyles();

  const [alerta, setAlerta] = React.useState(false);
  const [pokemons, setPokemons] = React.useState([]);
  const [carrinho, setCarrinho] = React.useState([])

  const addCarrinho = (pokemon) => {
    setCarrinho((anterior) => [...anterior, pokemon]);
    setAlerta(true);
    axios.put(`http://localhost:8080/api/pedidos/9/produto/${pokemon}`);
  }

  React.useEffect(() => {
    axios.get("http://localhost:8080/api/produtos").then((response) => setPokemons(response.data));
  }, []);

  return (
      <div>
          <Navbar/>
          {alerta && (
          <Alert severity="success" variant="filled">
            Pokemon Adicionado com Sucesso!
          </Alert>)}
          <CarrinhoElements total={carrinho.length} />
      <div className={classes.root}>
         {pokemons.map((pokemon) => (
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
                    <Typography variant="subtitle1">R$ {pokemon.preco}</Typography>
                    <Typography
                      variant="body1"
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignSelf: "flex-end"
                      }}
                    >
                      <IconButton onClick={() => addCarrinho(pokemon.id)}
                        color="primary"
                        aria-label="add to shopping cart"
                      >
                        <AddShoppingCartIcon />
                      </IconButton>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
            </Grid>))}    
          </div>
          </div>)
}

export default Produtos;

