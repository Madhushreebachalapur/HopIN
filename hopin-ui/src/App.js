import React, { useState, useEffect  } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage'; // Login Page Component

const App = () => {
const [rides, setRides] = useState([
    { id: 1, departureTime: '10:30 AM', from: 'Location A', to: 'Location B', seatsLeft: 3, cost: '₹50' },
    { id: 2, departureTime: '3:00 PM', from: 'Location C', to: 'Location D', seatsLeft: 2, cost: '₹60' },
    { id: 3, departureTime: '5:30 PM', from: 'Location E', to: 'Location F', seatsLeft: 4, cost: '₹40' },
    { id: 4, departureTime: '7:00 AM', from: 'Location G', to: 'Location H', seatsLeft: 1, cost: '₹70' },
  ]);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage rides={rides}/>} />
      </Routes>
    </Router>
  );
};

export default App;
