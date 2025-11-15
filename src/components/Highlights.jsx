import React from 'react';

export default function Highlights(){
  const items = [
    {title:'Redundant Systems', text:'Triple-redundant flight controllers and hybrid navigation.'},
    {title:'Secure Comms', text:'AES-256 comms, anti-jam support and secure OTA updates.'},
    {title:'Rugged Design', text:'MIL-grade enclosures, IP67 components and rapid field repairability.'}
  ];
  return (
    <section style={{marginTop:48}}>
      <h3 style={{color:'var(--accent)'}}>Highlights</h3>
      <div style={{display:'flex',gap:18,marginTop:12,flexWrap:'wrap'}}>
        {items.map((it,idx)=>(
          <div key={idx} style={{flex:'1 1 260px',background:'var(--glass)',padding:18,borderRadius:12,border:'1px solid rgba(255,255,255,0.02)'}}>
            <h4 style={{marginTop:0}}>{it.title}</h4>
            <p style={{color:'var(--muted)',marginBottom:0}}>{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
