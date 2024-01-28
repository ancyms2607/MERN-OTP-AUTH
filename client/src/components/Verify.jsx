import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Verify = () => {
  const [otp, setOtp] = useState('');
  const { email } = useParams();

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`/api/verify`, { email, otp });
      if (response.status === 200) {
        alert('OTP verified!');
        window.location.href = '/welcome'; 
      } else {
        alert('Failed to verify OTP.');
        window.location.href = '/'; 
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while verifying the OTP.');
      window.location.href = '/'; 
    }
  };
  

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <label>Enter OTP</label>
        <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} required style={{ margin: '10px 0', padding: '10px' }} />
        <button type="submit" style={{ margin: '10px 0', backgroundColor: 'green', color: 'white' }}>Submit</button>
      </form>
    </div>
  );
};

export default Verify;
