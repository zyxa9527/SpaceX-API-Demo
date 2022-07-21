// js
import React from "react";
import YouTube from "react-youtube";

class ReactYoutube extends React.Component {
  vedioOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      width: "100%",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
    const { vedioId } = this.props;
    return (
      <YouTube
        className="border"
        videoId={vedioId}
        opts={opts}
        onReady={this.vedioOnReady}
      />
    );
  }
}
export default ReactYoutube;
