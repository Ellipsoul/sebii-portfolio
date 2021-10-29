import React from 'react'

export default function SoundCloud() {
  // Native from SoundCloud, but large picture blocks tracks for smaller devices
  return (
    <iframe 
      width="100%" 
      height="100%" 
      allow="autoplay" 
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1320548620&color=%23ff5500\
      &auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&\
      show_teaser=true&visual=true"
    />
  )
}
