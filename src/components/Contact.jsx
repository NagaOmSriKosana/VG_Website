import React, {useState} from 'react';

export default function Contact(){
  const [form,setForm] = useState({name:'',email:'',message:''});
  const onChange = e => setForm({...form,[e.target.name]: e.target.value});
  const onSubmit = e => {
    e.preventDefault();
    alert('Thanks — demo form submitted. Add backend or Netlify forms to capture leads.');
    setForm({name:'',email:'',message:''});
  };

  return (
    <section id="contact" style={{marginTop:48}}>
      <h3 style={{color:'var(--accent)'}}>Contact</h3>
      <h2>Request a demo or partnership</h2>
      <form onSubmit={onSubmit} style={{display:'grid',gridTemplateColumns:'1fr 1fr', gap:12, marginTop:16}}>
        <input name="name" required value={form.name} onChange={onChange} placeholder="Full name" style={inputStyle}/>
        <input name="email" required value={form.email} onChange={onChange} placeholder="Work email" style={inputStyle}/>
        <textarea name="message" required value={form.message} onChange={onChange} placeholder="How can we help?" style={{...inputStyle, gridColumn:'1/3',height:120}}/>
        <div style={{gridColumn:'1/3'}}>
          <button className="btn primary" type="submit">Send request</button>
        </div>
      </form>
    </section>
  );
}

const inputStyle = {
  padding:'12px 14px',
  borderRadius:10,
  border:'1px solid rgba(255,255,255,0.04)',
  background:'rgba(255,255,255,0.02)',
  color:'var(--white)',
  outline:'none',
  width:'100%'
};
