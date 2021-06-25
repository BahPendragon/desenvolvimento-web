import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import NavBar from './NavBar'
import { AppBar } from '@material-ui/core';

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 35,
  padding: '0 30px',

});


function Formulario() {
    const handleSubmit = event => {
        event.preventDefault();
        alert('Formulário enviado!')
      }

  return (
    <div>
      <AppBar position="static">
      <NavBar/>
      </AppBar>
      <br/>
      <Typography variant="h4">Quem é este Treinador Pokémon?</Typography>
      <form onSubmit={handleSubmit}>

         <label>
         <Typography variant="h6">Nome</Typography>
           <input name="name" />
         </label>
       <br />
       <br />
       <MyButton type="submit">Enviar</MyButton>
      </form>
    </div>
  )
};

export default Formulario;