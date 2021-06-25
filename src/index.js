
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import Home from './components/Home';
import Sobre from './components/Sobre';
import NotFound from './components/NotFound';
import Produtos from './components/Produtos';
import MeuCarrinho from './components/Carrinho';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/home" component={Home} />
                <Route path="/sobre" component={Sobre} />
                <Route path="/produtos" component={Produtos} />
                <Route path="/carrinho" component={MeuCarrinho} />
                <Route path='*' component={NotFound} />
            </Switch>
        </ BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
