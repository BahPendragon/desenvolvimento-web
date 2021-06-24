import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return(
    <div>
        <h1>Página não encontrada</h1>
            <br />
        <Link to="/">Voltar</Link>
    </div>)
}


export default NotFound;