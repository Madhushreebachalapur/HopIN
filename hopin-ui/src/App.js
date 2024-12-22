import React, { useState, useEffect  } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage'; // Login Page Component
import HomeScreen from './HomeScreen'; // HomeScreen Component
import BookRide from './BookRide'; // Create BookRide Component
import OfferRide from './OfferRide'; // Create OfferRide Component
import RideDetails from './RideDetails'; // Create RideDetails Component

const App = () => {
const [rides, setRides] = useState([
    { id: 1, departureTime: '8:30 AM', from: 'R.T.Nagar', to: 'MSRIT college', seatsLeft: 3, cost: '₹50' },
    { id: 2, departureTime: '3:00 PM', from: 'Dairy Circle', to: 'MSRIT', seatsLeft: 2, cost: '₹60' },
    { id: 3, departureTime: '5:30 PM', from: 'MSRIT', to: 'Yeshwantpur', seatsLeft: 4, cost: '₹40' },
    { id: 4, departureTime: '7:00 PM', from: 'MSRIT', to: 'Wilson Garden', seatsLeft: 1, cost: '₹70' },
  ]);

/*
  const [rides, setRides] = useState([]);
  // Fetch rides from the API
  useEffect(() => {
    const fetchRides = async () => {
      try {
        const response = await fetch('http://localhost:3001/pool/api/rides'); // Replace with your API URL
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRides(data); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching rides:', error);
      }
    };

    fetchRides();
  }, []); // Empty dependency array to run only once on component mount
*/

  const handleAddRide = (newRide) => {
    setRides((prevRides) => [...prevRides, newRide]);
  };

  const handleUpdateRides = (updatedRide) => {
    setRides((prevRides) =>
      prevRides.map((ride) => (ride.id === updatedRide.id ? updatedRide : ride))
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage rides={rides}/>} />
        <Route path="/home" element={<HomeScreen rides={rides} />} />
        <Route path="/book-ride" element={<BookRide rides={rides} setRides={setRides} />} />
        <Route path="/offer-ride" element={<OfferRide onAddRide={handleAddRide} />} />
        <Route
          path="/ride-details"
          element={<RideDetails onUpdateRides={handleUpdateRides} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
