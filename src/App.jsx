import React from 'react';
import './App.css';

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
          <tr>
            <td style={{ border: '1px solid #000', padding: '8px' }}>Q1</td>
            <td style={{ border: '1px solid #000', padding: '8px' }}>$10,000</td>
            <td style={{ border: '1px solid #000', padding: '8px' }}>$7,000</td>
            <td style={{ border: '1px solid #000', padding: '8px' }}>$3,000</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #000', padding: '8px' }}>Q2</td>
            <td style={{ border: '1px solid #000', padding: '8px' }}>$12,000</td>
            <td style={{ border: '1px solid #000', padding: '8px' }}>$8,000</td>
            <td style={{ border: '1px solid #000', padding: '8px' }}>$4,000</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #000', padding: '8px' }}>Q3</td>
            <td style={{ border: '1px solid #000', padding: '8px' }}>$15,000</td>
            <td style={{ border: '1px solid #000', padding: '8px' }}>$9,000</td>
            <td style={{ border: '1px solid #000', padding: '8px' }}>$6,000</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #000', padding: '8px' }}>Q4</td>
            <td style={{ border: '1px solid #000', padding: '8px' }}>$20,000</td>
            <td style={{ border: '1px solid #000', padding: '8px' }}>$11,000</td>
            <td style={{ border: '1px solid #000', padding: '8px' }}>$9,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
