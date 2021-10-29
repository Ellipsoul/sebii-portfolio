import React from 'react'
import { useTheme } from 'next-themes'

export default function Discord() {
  const { theme } = useTheme();

  const urlSource:string = `https://discord.com/widget?id=729302391723393057&theme=${theme}` 

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
