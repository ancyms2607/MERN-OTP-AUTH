import React, { useState } from 'react';
import axios from 'axios';

const Insert = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/send', { email });
      if (response.status === 200) {
        alert('OTP sent!');
        window.location.href = `/verify/${email}`; // Redirect to '/verify/email'
      } else {
        alert('Failed to send OTP.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while sending the OTP.');
    }
  };
  
  

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ margin: '10px 0', padding: '10px' }} />
        <label>Textbox</label>
        <input type="textbox" onChange={(e) => setEmail(e.target.value)} required style={{ margin: '10px 0', padding: '10px' }} />
        <button type="submit" style={{ margin: '10px 0', backgroundColor: 'blue', color: 'white' }}>Submit</button>
      </form>
    </div>
  );
};

export default Insert;
