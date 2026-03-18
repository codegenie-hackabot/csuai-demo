import React from 'react';
import './App.css';
import DinoGame from './DinoGame';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>CSUAI Demo</h1>
      <p>Subtext that says narnes and bobles.</p>
      <h2>Financial Report</h2>
      <table style={{ margin: '0 auto', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #000', padding: '8px' }}>Quarter</th>
            <th style={{ border: '1px solid #000', padding: '8px' }}>Revenue</th>
            <th style={{ border: '1px solid #000', padding: '8px' }}>Expenses</th>
            <th style={{ border: '1px solid #000', padding: '8px' }}>Profit</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={{ border: '1px solid #000', padding: '8px' }}>Q1</td><td style={{ border: '1px solid #000', padding: '8px' }}>$10,000</td><td style={{ border: '1px solid #000', padding: '8px' }}>$7,000</td><td style={{ border: '1px solid #000', padding: '8px' }}>$3,000</td></tr>
          <tr><td style={{ border: '1px solid #000', padding: '8px' }}>Q2</td><td style={{ border: '1px solid #000', padding: '8px' }}>$12,000</td><td style={{ border: '1px solid #000', padding: '8px' }}>$8,000</td><td style={{ border: '1px solid #000', padding: '8px' }}>$4,000</td></tr>
          <tr><td style={{ border: '1px solid #000', padding: '8px' }}>Q3</td><td style={{ border: '1px solid #000', padding: '8px' }}>$15,000</td><td style={{ border: '1px solid #000', padding: '8px' }}>$9,000</td><td style={{ border: '1px solid #000', padding: '8px' }}>$6,000</td></tr>
          <tr><td style={{ border: '1px solid #000', padding: '8px' }}>Q4</td><td style={{ border: '1px solid #000', padding: '8px' }}>$20,000</td><td style={{ border: '1px solid #000', padding: '8px' }}>$11,000</td><td style={{ border: '1px solid #000', padding: '8px' }}>$9,000</td></tr>
          <tr><td style={{ border: '1px solid #000', padding: '8px' }}>Q5</td><td style={{ border: '1px solid #000', padding: '8px' }}>$30,000</td><td style={{ border: '1px solid #000', padding: '8px' }}>$15,000</td><td style={{ border: '1px solid #000', padding: '8px' }}>$15,000</td></tr>
          <tr><td style={{ border: '1px solid #000', padding: '8px' }}>Q6</td><td style={{ border: '1px solid #000', padding: '8px' }}>$45,000</td><td style={{ border: '1px solid #000', padding: '8px' }}>$20,000</td><td style={{ border: '1px solid #000', padding: '8px' }}>$25,000</td></tr>
          <tr><td style={{ border: '1px solid #000', padding: '8px' }}>Q7</td><td style={{ border: '1px solid #000', padding: '8px' }}>$60,000</td><td style={{ border: '1px solid #000', padding: '8px' }}>$25,000</td><td style={{ border: '1px solid #000', padding: '8px' }}>$35,000</td></tr>
          <tr><td style={{ border: '1px solid #000', padding: '8px' }}>Q8</td><td style={{ border: '1px solid #000', padding: '8px' }}>$80,000</td><td style={{ border: '1px solid #000', padding: '8px' }}>$30,000</td><td style={{ border: '1px solid #000', padding: '8px' }}>$50,000</td></tr>
        </tbody>
      </table>
      <h2>Misleading Graph</h2>
      <img src="https://via.placeholder.com/400x200?text=Misleading+Graph" alt="Misleading graph" style={{ marginTop: '1rem' }} />
      <h2>Attention is All You Need – Abstract</h2>
      <p>
        The paper introduces the Transformer, a novel architecture eschewing recurrence and convolutions entirely in favor of self‑attention mechanisms to draw global dependencies between input and output.
        It achieves state‑of‑the‑art performance on translation tasks while being more parallelizable and requiring less time to train.
        <a href="https://proceedings.neurips.cc/paper_files/paper/2017/file/3f5ee243547dee91fbd053c1c4a845aa-Paper.pdf" target="_blank" rel="noopener noreferrer">Read the NeurIPS article</a>
      </p>
      <DinoGame />
      <p style={{ marginTop: '2rem' }}>
        <a href="https://github.com/codegenie-hackabot/csuai-demo" target="_blank" rel="noopener noreferrer">View this project on GitHub</a>
      </p>
    </div>
  );
}

export default App;
