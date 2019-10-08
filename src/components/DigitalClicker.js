// Code DigitalClicker Component Here
import React, { Component } from 'react';

class DigitalClicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timesClicked: 0
        }
    }
    render() { 
        return ( 
            <button onClick={
                (e) => {
                    this.setState({
                        timesClicked: this.state.timesClicked + 1
                    })
                }
            }>{this.state.timesClicked}</button>
         );
    }
}
 
export default DigitalClicker;