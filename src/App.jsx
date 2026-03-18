import React from 'react';
import './App.css';
import BouncingBall from './BouncingBall';
import CameraFeed from './CameraFeed';
import ContactModal from './ContactModal';
import DinoGame from './DinoGame';
import Potato from './Potato';
import SlotMachine from './SlotMachine';
import Stopwatch from './Stopwatch';
import VoiceRecorder from './VoiceRecorder';
import StereoMadness from './components/StereoMadness';
import GTA6 from './components/GTA6';
import CameraFeedComponent from './components/CameraFeed';
import SlotMachineComponent from './components/SlotMachine';
import PollMock from './PollMock';

function App() {
  return (
    <div className="app-container" style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>My Website Title</h1>
      {/* Render all demo components */}
      <StereoMadness />
      <GTA6 />
      <BouncingBall />
      <CameraFeed />
      <ContactModal />
      <DinoGame />
      <Potato />
      <SlotMachine />
      <Stopwatch />
      <VoiceRecorder />
      <PollMock />
    </div>
  );
}

export default App;
