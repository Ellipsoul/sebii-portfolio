import React from 'react';
// @ts-ignore Unbelievable that TS can't find this...
import { TwitchEmbed } from 'react-twitch-embed';
import { useTheme } from 'next-themes';

export default function Twitch() {
  const { theme } = useTheme();

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  // Width is relative to the device orientation
  // Primary means right way up, in landscape it means button on right
  const { width } = getWindowDimensions();
  console.log(width); 
  const portrait:boolean = screen.orientation.type === "portrait-primary" || 
                            screen.orientation.type === "portrait-secondary";
  const landscape:boolean = screen.orientation.type === "landscape-primary" || 
                            screen.orientation.type === "landscape-secondary";

  const withChat:boolean = (portrait && width > 425) || (landscape && width > 812); 

  return (
    <TwitchEmbed 
      channel="sebseb122"
      id="sebseb122"  // For some reason this must be static
      allowFullscreen="true"
      autoplay="false"
      theme={theme}
      height="100%"
      width="100%"
      withChat={withChat}
      muted
    />
  )
}
