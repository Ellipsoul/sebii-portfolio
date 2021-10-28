import React, { useEffect } from 'react'

export default function Tiktok() {
  // Adds a script tag to the DOM
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://apps.elfsight.com/p/platform.js";
    script.async = true;
  
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  // Using a sketchy elfsight widget for now
  return (
    <>
      <div className="elfsight-app-42580575-5b36-4fde-bad3-176c8a5ae76e"></div>
    </>
  )
}
