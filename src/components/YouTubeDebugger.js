// Code YouTubeDebugger Component Here

import React from 'react';

class YouTubeDebugger extends React.Component {

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
        console.log("What is newBitrate? ", newBitrate)
        
        //set state
        console.log({ settings: { bitrate: newBitrate }})
        this.setState( { settings: 
            { 
                ...this.state.settings, bitrate: newBitrate
             }})
        console.log("========changeResolution()====", this.state)

    };

    changeResolution = () => {
        let newRes = this.state.settings.video.resolution;
        newRes = '720p';
        console.log("What is newRes? ",newRes)
        
        //set state
        console.log({ settings: { ...this.state.settings, video: { resolution: newRes} } } )
        this.setState({ settings: { ...this.state.settings, video: { resolution: newRes} } } )
    };


    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.changeBitrate}>{this.state.settings.bitrate}</button>
                <button className='resolution' onClick={this.changeResolution}>{this.state.settings.video.resolution}</button>
            </div>
        )
    }


}

export default YouTubeDebugger;