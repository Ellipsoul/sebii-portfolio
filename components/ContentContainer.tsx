import TopNavigation from "./TopNavigation";

import React from 'react'

// Contains the main social/media widget to be inserted
export default function ContentContainer() {
  return (
    <div className="content-container">
      <TopNavigation />
      <div className="media-content">
        <iframe 
          src="https://open.spotify.com/embed/album/5A2VPzbzuv1EpSoie07kFe?theme=1" 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          allowFullScreen={true} 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          className="frame-content"
        />
      </div>
    </div>
  )
}
