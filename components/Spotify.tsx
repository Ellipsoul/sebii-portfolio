import React, { ReactElement } from 'react';
import { useTheme } from 'next-themes';

// Spotify embedded player
export default function Spotify():ReactElement {
  const { theme } = useTheme();

  const urlSource:string = theme === "light" ? 
    'https://open.spotify.com/embed/album/5A2VPzbzuv1EpSoie07kFe?theme=1' :
    'https://open.spotify.com/embed/album/5A2VPzbzuv1EpSoie07kFe?theme=0'

  return (
    // Only 2 themes available. 1 -> Playlisth colour, 2 -> Black
    <iframe 
      src={urlSource}
      width="100%" 
      height="100%" 
      frameBorder="0" 
      allowFullScreen={true} 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
      className="frame-content"
    />
  )
}
