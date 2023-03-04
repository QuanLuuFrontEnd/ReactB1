import React, { Component } from 'react';
import ItemGroup from './ItemGroup';
import Banner from './Banner';
class Body extends Component {
    render() {
        return (<div>
            <Banner />
            <ItemGroup />
        </div>
        );
    }
}

export default Body;