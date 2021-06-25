
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Sobre from './components/Sobre';
import NotFound from './components/NotFound';
import Produtos from './components/Produtos';
import Carrinho from './components/Carrinho';
import Formulario from './components/Formulario';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#333333',
        dark: '#ffd54f',
      },
      secondary: {
        main: '#ffd54f',
      },
    }
  });

  ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
        <ThemeProvider theme= {theme}>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/sobre" component={Sobre} />
                <Route path="/formulario" component={Formulario} />
                <Route path="/produtos" component={Produtos} />
                <Route path="/carrinho" component={Carrinho} />
                <Route path='*' component={NotFound} />
            </Switch>
        </ThemeProvider>
        </ BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
