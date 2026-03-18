import React, { useEffect, useRef } from 'react';
import './CameraFeed.css';

const CameraFeed = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert('Camera not supported in this browser');
      return;
    }
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.error('Error accessing camera:', err);
        alert('Unable to access camera');
      });
    return () => {
      if (video && video.srcObject) {
        const tracks = video.srcObject.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="camera-feed">
      <h3>Camera Feed</h3>
      <video ref={videoRef} className="camera-video" muted />
    </div>
  );
};

export default CameraFeed;
