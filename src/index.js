
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './App';
import Home from './Home';
import Sobre from './Sobre';
import NotFound from './NotFound';
import Produtos from './Produtos';
import Carrinho from './Carrinho';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/home" component={Home} />
                <Route path="/sobre" component={Sobre} />
                <Route path="/produtos" component={Produtos} />
                <Route path="/carrinho" component={Carrinho} />
                <Route path='*' component={NotFound} />
            </Switch>
        </ BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
