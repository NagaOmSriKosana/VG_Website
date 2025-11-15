import React from 'react';

export default function About(){
  return (
    <section id="about" style={{marginTop:40}}>
      <h3 style={{color:'var(--accent)', marginBottom:8}}>About</h3>
      <h2 style={{marginTop:0}}>Mission — trusted autonomy for critical missions</h2>
      <p style={{color:'var(--muted)', maxWidth:900}}>
        VyomGarud builds high-reliability unmanned aerial systems designed for defence and public-safety operations.
        Our platforms combine rugged hardware, redundant systems, and advanced autonomy to deliver predictable
        performance in contested environments.
      </p>
    </section>
  );
}
