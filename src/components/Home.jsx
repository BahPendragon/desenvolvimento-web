import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return(
    <div>
        <h1>Home</h1>
            <br />
        <Link to="/sobre">Página Inicial</Link>
    </div>)
}


export default Home;