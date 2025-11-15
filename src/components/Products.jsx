import React from 'react';
import '../styles/components.css';

const cards = [
  {title:'Tactical Recon Drone', desc:'Long-range ISR with multi-sensor payloads.', tag:'VT-1'},
  {title:'Endurance Loiter UAV', desc:'Extended-flight endurance for persistent surveillance.', tag:'EL-8'},
  {title:'Cargo/Logistics VTOL', desc:'Rugged VTOL for resupply & field logistics.', tag:'CL-3'},
  {title:'Autonomy Suite', desc:'Onboard autonomy, swarm control and secure comms.', tag:'AS-Node'}
];

export default function Products(){
  return (
    <section id="products" style={{marginTop:48}}>
      <h3 style={{color:'var(--accent)'}}>Capabilities</h3>
      <h2 style={{marginTop:0}}>Products & Platforms</h2>
      <div className="card-grid" style={{marginTop:18}}>
        {cards.map((c,i)=>(
          <article key={i} className="card">
            <div className="card-head">
              <span className="chip">{c.tag}</span>
              <h4>{c.title}</h4>
            </div>
            <p className="muted">{c.desc}</p>
            <div style={{marginTop:16}}><a className="btn small ghost" href="#contact">Contact Sales</a></div>
          </article>
        ))}
      </div>
    </section>
  );
}
