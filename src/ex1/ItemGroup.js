import React, { Component } from 'react';
import Item from "./Item";
class ItemGroup extends Component {
    render() {
        return (
            <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        );
    }
}

export default ItemGroup;