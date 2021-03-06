import React from 'react'

// Simplest implementation for now, just using an iFrame of a video
export default function YouTube() {
  return (
    <iframe 
      className='frame-content'
      width="100%" 
      height="100%" 
      src="https://www.youtube.com/embed/EKfyLdlGkts" 
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen />
  )
}
