import React, { useEffect } from 'react'

// Definitely need to replace this one
export default function Tiktok() {
  // Best way to add a script tag to the DOM
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://apps.elfsight.com/p/platform.js";
    script.async = true;
  
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  // This widget is very sketch and doesn't work unless wrapped in a fragment
  return (
    <>
      <div className="elfsight-app-42580575-5b36-4fde-bad3-176c8a5ae76e" />
    </>
  )
}

// Let's leave this down here since it might not be very legal
// <iframe 
//   className='frame-content'
//   width="100%" 
//   height="100%" 
//   src="https://v16-web.tiktok.com/video/tos/useast2a/tos-useast2a-ve-0068c002/896024c1d6d241409017c60615a56158/?a=1988&br=1284&bt=642&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1635740776&ft=9wMeReTx4kag3&l=202110312226080101890730910D3FC47A&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&policy=3&qs=0&rc=M25zZzY6ZnY5ODMzNzczM0ApMzNlZTc5NDs2NzQ0Nmg4OGdmanIucjRfLV9gLS1kMTZzc2JfLWFiMF8tMTRiL18uMmI6Yw%3D%3D&signature=b0a946a2fc7b256776ce419b77468fd9&tk=7024213556195689477&vl=&vr=" 
//   title="YouTube video player" 
//   frameBorder="0" 
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
//   allowFullScreen 
// />