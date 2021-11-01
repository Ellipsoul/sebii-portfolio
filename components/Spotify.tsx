import React, { ReactElement } from 'react';
import { useTheme } from 'next-themes';

// Spotify embedded player
export default function Spotify():ReactElement {
  // Only 2 themes available. 1 -> Playlist colour, 2 -> Black
  const { theme } = useTheme();
  const urlSource:string = theme === "light" ? 
    'https://open.spotify.com/embed/artist/5fAix5NwfNgHQqYRrHIPxo?theme=1' :
    'https://open.spotify.com/embed/artist/5fAix5NwfNgHQqYRrHIPxo?theme=0'

  return (
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