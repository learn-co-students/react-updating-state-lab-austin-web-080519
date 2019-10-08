// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component {
    constructor(){
        super()
        this.state = {
            timesClicked: 0
        }
    }

    increment = () => {
        let clicked = this.state.timesClicked;
        this.setState({
            timesClicked: ++clicked
        })
    }

    render(){
        return (
            <button onClick={this.increment}>{this.state.timesClicked}</button>
        )
    }
}