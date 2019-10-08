import React, { Component } from 'react';

class DigitalClicker extends React.Component {
    constructor() {
        super()

        this.state = {
            timesClicked: 0,
        };
    }
    handleClick = () => {
        let clickamount = this.state.timesClicked
        clickamount ++
        this.setState({
            timesClicked: clickamount
        })
    }
    render() {
        return ( 
            <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        )
    }

}
export default DigitalClicker