import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="project-name">Chess Demo</div>
      <a href="https://github.com/codegenie-hackabot/csuai-demo" target="_blank" rel="noopener noreferrer" className="github-link">
        GitHub
      </a>
    </header>
  );
}
