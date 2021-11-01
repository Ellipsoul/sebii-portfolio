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
