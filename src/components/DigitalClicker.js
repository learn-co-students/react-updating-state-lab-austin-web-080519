// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
    constructor() {
        super();
        this.state = {timesClicked: 0};
    }

    handleClick = () => {
        let currentClicks = this.state.timesClicked;
        currentClicks += 1;
        
        //update state
        this.setState( { timesClicked: currentClicks } );
    }

    render() {
        return (
            <button onClick={ this.handleClick }>{ this.state.timesClicked }</button>
        )
    }
}

export default DigitalClicker;