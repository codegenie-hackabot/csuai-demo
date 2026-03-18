import React from 'react';
import './App.css';
import BouncingBall from './BouncingBall';
import CameraFeed from './CameraFeed';
import ContactModal from './ContactModal';
import DinoGame from './DinoGame';
import Potato from './Potato';
import SlotToolbag from './SlotToolbag';
import Stopwatch from './Stopwatch';
import VoiceRecorder from './VoiceRecorder';
import StereoMadness from './components/StereoMadness';
import GTA6 from './components/GTA6';
import PollModel from './PollModel';

function App() {
  return (
    <div className="app-container" style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>My Website Title</h1>
      <div>
        <h2>Kirby and Jigglypuff</h2>
        <img src="https://static.imgburr.com/static/kirby.png" width="100" height="100" alt="Kirby" />
        <img src="https://static.imgburr.com/static/jigglypuff.png" width="100" height="100" alt="Jigglypuff" />
      </div>
      {/* Render all demo components */}
      <StereoMadness />
      <GTA6 />
      <BouncingBall />
      <CameraFeed />
      <ContactModal />
      <DinoGame />
      <Potato />
      <SlotToolbag />
      <Stopwatch />
      <VoiceRecorder />
      <PollModel />
    </div>
  );
}

export default App;
