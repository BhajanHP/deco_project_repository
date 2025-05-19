import './App.css';
import React, { useRef, useEffect } from 'react';
import vid1 from './render_logo.mp4';
// import 'animate.css';

function Loader() {

  const videoRef = useRef(null);

  useEffect(() => {
    const tryPlay = () => {
      if (videoRef.current) {
        videoRef.current.play()
          .catch(error => {
            console.log("Auto-play prevented:", error);
          });
      }
    };
    tryPlay();
    const handleFirstInteraction = () => {
      tryPlay();
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  return (
    <div className="loader-container">
      <video
      src={vid1}
      className="startingLogo"
      autoPlay
      muted
      loop
      playsInline></video>
    </div>
  );
}

export default Loader;

