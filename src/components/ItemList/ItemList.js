import Item from '../Item/Item'

import React, { Component } from 'react'

export default class ItemList extends Component {
    render() {
        return (
            <div>
                <ul>
                    <Item />
                </ul>
            </div>
        )
    }
}
 