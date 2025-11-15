import React from 'react';

export default function Footer(){
  return (
    <footer style={{padding:'28px 0', borderTop:'1px solid rgba(255,255,255,0.02)', marginTop:40}}>
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:20,flexWrap:'wrap'}}>
        <div>
          <strong>VyomGarud</strong>
          <div style={{color:'var(--muted)',fontSize:13}}>UAV Systems — contact@vyomgarud.example</div>
        </div>
        <div style={{color:'var(--muted)',fontSize:13}}>© {new Date().getFullYear()} VyomGarud — All rights reserved</div>
      </div>
    </footer>
  );
}
