import React from 'react';

function StereoMadness() {
  return (
    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
      <h2>Stereo Madness (Geometry Dash)</h2>
      <p>Endorsed by "/RubRub"</p>
      <p>
        <a href="https://www.youtube.com/watch?v=9bZkp7q19f0" target="_blank" rel="noopener noreferrer">Listen to the music</a>
      </p>
      <img src="https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif" alt="Dancing square" style={{ maxWidth: '200px', marginTop: '1rem' }} />
      <h3>Tidal Wave Gameplay</h3>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Tidal Wave Gameplay" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  );
}

export default StereoMadness;
