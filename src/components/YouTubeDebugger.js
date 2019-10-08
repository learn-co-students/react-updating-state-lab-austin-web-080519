// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YoutubeDebugger extends Component {
    constructor(){
        super()
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
    }

    updateBitrate = () => {
        this.setState({
            settings: {...this.state.settings, bitrate: 12}
        })
    }

    updateResolution = () => {
        let videoSettings = {...this.state.settings.video, resolution: '720p'};
        this.setState({
            settings: {...this.state.settings, video: videoSettings}
        });
    }

    render(){
        return (
            <div>
              <button onClick={this.updateBitrate}className="bitrate">{this.state.settings.bitrate}</button>
              <button onClick={this.updateResolution}className="resolution">{this.state.settings.video.resolution}</button>
            </div>
        )
    }


}