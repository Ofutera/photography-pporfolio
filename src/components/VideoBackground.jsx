import React from 'react';

const VideoBackground = () => {

  return (
    <div style={{ position: 'relative', display: 'flex', width: '100vw', height: '90vh' }}>
      <video autoPlay muted loop style={{  width: '100vw' , objectFit:'cover'}}>
      <source src="/assets/vid.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
