import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
    }

    changeBitRate = () => {
        this.setState({ 
            settings: {
                ...this.state.settings,
                 bitrate: 12
                }
            });
    }

    changeResoltution = () => {
        let newResolution = this.state.settings.video.resolution;
        newResolution = '720p';
        this.setState({ 
            settings: {
                ...this.state.settings,
                video: {resolution: newResolution}
            }})
    }

    render() {
        console.log(this.state)
        return(
            <div>
                <button className='bitrate' onClick={this.changeBitRate}>Change settings!</button>
                <button className='resolution' onClick={this.changeResoltution}>Change resolution!</button>
            </div>
        )
    }
}