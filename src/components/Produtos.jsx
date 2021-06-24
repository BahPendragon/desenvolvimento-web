import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap"
  },

  paper: {
    padding: theme.spacing(2),
    marginTop: "15px",
    margin: "10px",
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

  return (
    <>
      <div className={classes.root}>
        <Link to="/carrinho">Carrinho</Link>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            {/* Bulbasaur */}
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img
                      className={classes.img}
                      alt="complex"
                      src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        <b>Charmander</b>
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Pokemon do tipo Fogo 🔥
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Sobre: Este pokemon te acompanha com tanta fidelidade,
                        que é capaz de enfrentar os seus problemas por você. Um
                        guerreiro!
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">R$ 25,00</Typography>
                    <Typography
                      variant="body1"
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignSelf: "flex-end"
                      }}
                    >
                      <IconButton
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
          </Grid>
          <Grid item xs={3}>
            {/* Ivysaur*/}
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img
                      className={classes.img}
                      alt="complex"
                      src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        <b>Charmeleon</b>
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Pokemon do tipo Fogo 🔥
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Sobre: Um pokemon genioso (às vezes orgulhoso) mas que
                        nunca abandona você. Está à sua disposição a todo
                        momento.
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">R$ 45,00</Typography>
                    <Typography
                      variant="body1"
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <IconButton
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
          </Grid>
          <Grid item xs={3}>
            {/* Venusaur*/}
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img
                      className={classes.img}
                      alt="complex"
                      src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        <b>Charizard</b>
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Pokemon do tipo Fogo 🔥
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Sobre: A primeira vista, um dragão furioso e
                        intimidador. Para os seus donos, um doce e divertido
                        amigo. Diversão garantida!
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">R$ 45,00</Typography>
                    <Typography
                      variant="body1"
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <IconButton
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
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            {/* Charmander */}
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img
                      className={classes.img}
                      alt="complex"
                      src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        <b>Charmander</b>
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Pokemon do tipo Fogo 🔥
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Sobre: Este pokemon te acompanha com tanta fidelidade,
                        que é capaz de enfrentar os seus problemas por você. Um
                        guerreiro!
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">R$ 25,00</Typography>
                    <Typography
                      variant="body1"
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignSelf: "flex-end"
                      }}
                    >
                      <IconButton
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
          </Grid>
          <Grid item xs={3}>
            {/* Charmeleon*/}
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img
                      className={classes.img}
                      alt="complex"
                      src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png"
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        <b>Charmeleon</b>
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Pokemon do tipo Fogo 🔥
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Sobre: Um pokemon genioso (às vezes orgulhoso) mas que
                        nunca abandona você. Está à sua disposição a todo
                        momento.
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">R$ 45,00</Typography>
                    <Typography
                      variant="body1"
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <IconButton
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
          </Grid>
          <Grid item xs={3}>
            {/* Charizard */}
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img
                      className={classes.img}
                      alt="complex"
                      src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        <b>Charizard</b>
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Pokemon do tipo Fogo 🔥
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Sobre: A primeira vista, um dragão furioso e
                        intimidador. Para os seus donos, um doce e divertido
                        amigo. Diversão garantida!
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">R$ 45,00</Typography>
                    <Typography
                      variant="body1"
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <IconButton
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
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Produtos;