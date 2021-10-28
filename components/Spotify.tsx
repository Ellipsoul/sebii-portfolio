import React, { ReactElement } from 'react'

// Spotify embedded player
export default function Spotify():ReactElement {
  return (
    // Only 2 themes available. 1 -> Playlisth colour, 2 -> Black
    <iframe 
      src="https://open.spotify.com/embed/album/5A2VPzbzuv1EpSoie07kFe?theme=1" 
      width="100%" 
      height="100%" 
      frameBorder="0" 
      allowFullScreen={true} 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
      className="frame-content"
    />
  )
}
