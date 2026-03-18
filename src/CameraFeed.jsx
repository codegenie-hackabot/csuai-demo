import React, { useEffect, useRef } from 'react';
import './CameraFeed.css';

const CameraFeed = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const enableCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
        video.play();
      } catch (err) {
        console.error('Camera error:', err);
        alert('Unable to access camera');
      }
    };
    enableCamera();
    return () => {
      if (video && video.srcObject) {
        const tracks = video.srcObject.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="camera-feed">
      <h3>Live Camera Feed</h3>
      <video ref={videoRef} className="camera-video" muted />
    </div>
  );
};

export default CameraFeed;
