import React, { Component, useState, useEffect } from 'react'

const Productos = [
    {
        id: 0,
        title: 'Mochila',
        description: 'Estas mochilas son ideales para que tu peque lleve a todos lados, adentro podés guardarle lo que quieras, para tener diversión asegurada, ¡donde sea que vayan!',
        price: 1985,
        //pictureUrl: ,
    },
    {
        id: 1,
        title: 'Almohadón',
        description: 'Estas fundas de almohadón de animales nórdicos son ideales para decorar el cuarto de los más peques. Podés llevarlos con el cuadro a juego para darle un toque elegante y divertido a su habitación.',
        price: 420,
        //pictureUrl: ,    
},
    {
        id: 2,
        title: 'Maletín',
        description: 'Estos maletines son ideales para que tu peque lleve a todos lados, adentro podés guardarle lo que quieras, libros de cuentos, libros para colorear o podés elegir llevar su versión completa con hojas para pintar, lápices y crayones para tener diversión asegurada, ¡donde sea que vayan!',
        price: 1550,
       //pictureUrl: ,
    },
]


export default class Item extends Component {
    constructor() {
        super();
        this.state = {
            InfoProductos: [],
        };
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                InfoProductos: Productos,
            });
        }, 2000);
    }
    
    render() {
        return (
            <div>
                    {this.state.InfoProductos.map((item) => {
                        return (
                        <li>
                            {item.title} - {item.description} - {item.price}
                        </li>
                        );
                    })}
            </div>
        )
    }
}
