import React, { useEffect } from 'react'

export default function Tiktok() {

  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://apps.elfsight.com/p/platform.js";
    script.async = true;
  
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <>
      <div className="elfsight-app-42580575-5b36-4fde-bad3-176c8a5ae76e"></div>
    </>
  )
}
