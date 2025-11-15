import React from 'react';
import '../styles/hero.css'; 
import heroImg from '../assets/hero-drone.png'; 

export default function Hero(){
  return (
    <header className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="brand">
            <h1>VyomGarud</h1>
            <span className="label">Military-Grade UAV Systems</span>
          </div>

          <h2 className="hero-title">
            Precision autonomy. Relentless reliability.
          </h2>

          <p className="hero-sub">
            Designing advanced unmanned systems for mission-critical operations — secure, rugged, autonomous.
          </p>

          <div className="hero-cta">
            <a className="btn primary" href="#contact">Request Demo</a>
            <a className="btn ghost" href="#products">Our Platforms</a>
          </div>

          <ul className="hero-meta">
            <li><strong>Range</strong><span>120 km</span></li>
            <li><strong>Endurance</strong><span>10 hrs</span></li>
            <li><strong>Payload</strong><span>15 kg</span></li>
          </ul>
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="VyomGarud UAV" />
        </div>
      </div>
    </header>
  );
}
