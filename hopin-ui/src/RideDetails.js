import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './RideDetails.css';

const RideDetails = ({ onUpdateRides }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { ride } = location.state || {};

  if (!ride) {
    return (
      <div className="ride-details-container">
        <p>Ride details not found.</p>
        <button onClick={() => navigate('/home')}>Back to Home</button>
      </div>
    );
  }

  const handleBookSeat = () => {
    if (ride.seatsLeft > 0) {
      const updatedRide = { ...ride, seatsLeft: ride.seatsLeft - 1 };
      onUpdateRides(updatedRide); // Callback to update the rides in the parent component
      alert('Seat successfully booked!');
      navigate('/home');
    } else {
      alert('No seats left to book!');
    }
  };

  return (
    <div className="ride-details-container">
      <h1>Ride Details</h1>
      <div className="ride-card">
        <div className="ride-details">
          <p><strong>Ride ID:</strong> {ride.id}</p>
          <p><strong>Departure Time:</strong> {ride.departureTime}</p>
          <p><strong>From:</strong> {ride.from}</p>
          <p><strong>To:</strong> {ride.to}</p>
        </div>
        <div className="ride-info">
          <p><strong>Seats Left:</strong> {ride.seatsLeft}</p>
          <p><strong>Cost:</strong> {ride.cost}</p>
        </div>
      </div>
      <div className="actions">
        <button onClick={handleBookSeat} className="action-button">
          Book Seat
        </button>&nbsp;&nbsp;&nbsp;
        <button onClick={() => navigate('/home')} className="action-button">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default RideDetails;
