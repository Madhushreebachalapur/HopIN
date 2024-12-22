import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OfferRide.css';

const OfferRide = ({ onAddRide }) => {
  const navigate = useNavigate();
  const [rideDetails, setRideDetails] = useState({
    departureTime: '',
    from: '',
    to: '',
    seatsLeft: '',
    cost: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRideDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRide = {
      id: Date.now(), // Unique ID for the new ride
      departureTime: rideDetails.departureTime,
      from: rideDetails.from,
      to: rideDetails.to,
      seatsLeft: parseInt(rideDetails.seatsLeft, 10),
      cost: `₹${rideDetails.cost}`,
    };

    onAddRide(newRide); // Update the rides state in App.js
    navigate('/home'); // Navigate back to HomeScreen
  };

  return (
    <div className="offer-ride-container">
      <h2>Offer a Ride</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="departureTime"
          placeholder="Departure Time (e.g., 10:30 AM)"
          value={rideDetails.departureTime}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="from"
          placeholder="From (e.g., Location A)"
          value={rideDetails.from}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="to"
          placeholder="To (e.g., Location B)"
          value={rideDetails.to}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="seatsLeft"
          placeholder="Seats Available"
          value={rideDetails.seatsLeft}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="cost"
          placeholder="Cost (e.g., 50)"
          value={rideDetails.cost}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Offer Ride</button>
      </form>
    </div>
  );
};

export default OfferRide;
