import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'; // Import the CSS file for styling

const LoginPage = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const handleMobileChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleGetOtp = () => {
    if (mobileNumber.length === 10) {
      alert(`OTP sent to ${mobileNumber}`);
      setOtpSent(true);
    } else {
      alert('Please enter a valid 10-digit mobile number');
    }

    // For demonstration, set a user name based on mobile number
    if (mobileNumber.endsWith("1")) {
      setUserName('Menita Pattam');
    } else if (mobileNumber.endsWith("2")) {
      setUserName('Madhushri');
    } else if (mobileNumber.endsWith("3")) {
      setUserName('Khuushi');
    } else if (mobileNumber.endsWith("4")) {
      setUserName('Pritika');
    } else {
      setUserName('User');
    }
  };

  const handleSubmit = () => {
    if (otp.length === 6) {
      alert('OTP verified successfully');

    // Navigate to HomeScreen, passing the userName via state
    navigate('/home', { state: { userName, mobileNumber } });
    } else {
      alert('Please enter a valid 6-digit OTP');
    }
  };

  return (
    <div className="login-container">
      <div className="banner">
      <img 
        src={`${process.env.PUBLIC_URL}/hopin.jpg`} 
        alt="Hop IN" 
        style={{ width: "100px", height: "auto" }}
      />
        <h1>HopIN</h1>
        <p>Ride together, save costs and reduce traffic!</p>
      </div>

      <div className="login-form">
        <h2>Login with Mobile Number</h2>
        <input
          type="text"
          placeholder="Enter your 10-digit mobile number"
          value={mobileNumber}
          onChange={handleMobileChange}
          maxLength={10}
        />
        <button onClick={handleGetOtp}>Get OTP</button>

        {otpSent && (
          <div className="otp-section">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={handleOtpChange}
              maxLength={6}
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
