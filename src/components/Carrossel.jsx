import React, { Component } from 'react';
import { Paper, Button } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'

function Item(props) {
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <img src={props.item.image} width="100%" height="auto" alt={props.item.description} />
        </Paper>
    )
}

class Carrossel extends React.Component {

    render() {
        const items = [
            {
                name: "Pokemon, temos que pegar!",
                description: "Probably the most random thing you have ever seen!",
                image: "https://4.bp.blogspot.com/-UYJjvmDemn0/WT3ov0R6cpI/AAAAAAAAvgE/frFGuJ4p4Ac7umWkdZZF5qTbnKdReWP2wCLcB/s1600/landscape-1456483171-pokemon2.jpg"
            },
            {
                name: "Eu escolho você!",
                description: "Hello World!",
                image: "https://assets.pokemon.com/assets//cms2-pt-br/img/watch-pokemon-tv/_tiles/broadcaster/season23-cartoon-network-169.png"
            },
            {
                name: "Vamos duelar!",
                description: "Olá mundo!",
                image: "https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2021/03/pokemon-go-programa-indicacoes-676x338.jpg"
            }
        ]
    
        return (
            <Carousel>
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
        )
    }
}

export default Carrossel;