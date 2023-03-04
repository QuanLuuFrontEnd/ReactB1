import React, { Component } from 'react';
import cardImageSrc from "../img/Capture.PNG"
class Item extends Component {
    render() {
        return (
             <div class="col">
                    <div class="card h-100 text-center">
                        <img src={cardImageSrc} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Item;