import React, { Component } from 'react';

class YouTubeDeBugger extends Component {

    constructor() {
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
                }
            }
        }
    };

    changeBitrate = () => {
        let newBitrate = this.state.settings.bitrate;
        newBitrate = 12;
        this.setState( {settings: {
            ...this.state.settings, bitrate: newBitrate
        }})
    }

    changeResolution = () => {
        let newResolution = this.state.settings.video.resolution;
        newResolution = '720p';
        this.setState({ settings: {...this.state.settings, video: {resolution:newResolution}}})
    }

    render() { 
        return (  
        <div>
            <button className='bitrate' onClick={this.changeBitrate}>{this.state.settings.bitrate}</button>
            <button className='resolution' onClick={this.changeResolution}>{this.state.settings.video.resolution}</button>
        </div>
        );
    }
}
 
export default YouTubeDeBugger;
