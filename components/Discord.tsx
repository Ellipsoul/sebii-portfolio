import React from 'react'
import { useTheme } from 'next-themes'

export default function Discord() {
  // Dynamically render the widget theme based on current user theme
  const { theme } = useTheme();
  const urlSource:string = `https://discord.com/widget?id=891740231521423360&theme=${theme}` 

  // Embed directly retrieved from Discord playlist
  return (
    <iframe 
      className='frame-content'
      src={urlSource}
      width="100%" 
      height="100%" 
      allowTransparency={true} 
      frameBorder="0" 
      sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
    />
  )
}