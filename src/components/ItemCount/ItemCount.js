import React from 'react';
import { Component } from 'react';
import './ItemCount.css';
import { Button } from 'semantic-ui-react';

class ItemCount extends Component {
    constructor () {
        super()

        this.state = {
            cantidad: 0,
        };
    }

    sumarCarrito = () => {
        this.setState({cantidad: this.state.cantidad + 1}) 
    }

    restarCarrito = () => {
        this.setState({cantidad: Math.max(this.state.cantidad - 1, 0)})
    }
    render () {
        return (
            <div className="Contador">
                <Button primary onClick={this.sumarCarrito}>+</Button>
                <p>{this.state.cantidad}</p>
                <Button primary onClick={this.restarCarrito}>-</Button>
            </div>
        )
    }
}

export default ItemCount;