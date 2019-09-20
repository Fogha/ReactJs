import React, { Component } from 'react';


export default class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = { num: 0 };
        this.function = this.function.bind(this);
    }
        function () {
        let n = Math.floor(Math.random() * 10) + 1;
            this.setState({num: n});
        console.log(n);
        }
    render () {
        return(
            <div>
                <h2>Number is {this.state.num}</h2>
                <h3>{this.state.num === 5 ? "You Won" : "Try Again"}</h3>
                <button onClick={this.function}> Random Number !!</button>
            </div>
        );
    }
}