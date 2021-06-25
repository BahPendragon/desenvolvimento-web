import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});



function Formulario() {
    const handleSubmit = event => {
        event.preventDefault();
        alert('Formulário enviado!')
      }

  return (
    <div className="wrapper">
      <h1>Quem é esse treinador Pokémon?</h1>
      <form onSubmit={handleSubmit}>
      <fieldset>
         <label>
           <h2>Nome</h2>
           <input name="name" />
         </label>
       </fieldset>
       <MyButton type="submit">Enviar</MyButton>
      </form>
    </div>
  )
};

export default Formulario;