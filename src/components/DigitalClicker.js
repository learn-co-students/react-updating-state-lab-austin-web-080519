// Code DigitalClicker Component Here
import React, { Component } from 'react';

class DigitalClicker extends Component {
    constructor() {
        super();
        this.state = {timesClicked: 0};
    }

    handleClick = () => {
        let currentClicks = this.state.timesClicked;
        currentClicks += 1;
        this.setState( { timesClicked: currentClicks } );
    }
    render() { 
        return ( 
            <div>
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
         );
    }
}
 
export default DigitalClicker;