import React from 'react'
import PropTypes from "prop-types";
import './MatchHighlightsVideo.css'

function MatchHighligthsVideo({ embedId }) {
  return (
    <div>
        <div className="video-responsive">
            <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            />
            </div>
    </div>
  )
}

MatchHighligthsVideo.propTypes = {
    embedId: PropTypes.string.isRequired
  };
  

export default MatchHighligthsVideo