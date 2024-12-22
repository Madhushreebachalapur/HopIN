import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BookRide.css';

const BookRide = ({ rides, setRides }) => {
  const navigate = useNavigate();

  const handleBook = (ride) => {
    if (ride.seatsLeft > 0) {
      // Update ride seat availability
      const updatedRides = rides.map((r) =>
        r.id === ride.id ? { ...r, seatsLeft: r.seatsLeft - 1 } : r
      );
      setRides(updatedRides);

      alert(`Successfully booked a ride from ${ride.from} to ${ride.to}!`);
    } else {
      alert('No seats available for this ride.');
    }
  };

  return (
    <div className="book-ride-container">
      <h1>Book a Ride</h1>
      <div className="rides-list">
        {rides.map((ride) => (
          <div key={ride.id} className="ride-card">
            <p><strong>Ride ID:</strong> {ride.id}</p>
            <p><strong>Departure Time:</strong> {ride.departureTime}</p>
            <p><strong>From:</strong> {ride.from}</p>
            <p><strong>To:</strong> {ride.to}</p>
            <p><strong>Seats Left:</strong> {ride.seatsLeft}</p>
            <p><strong>Cost:</strong> {ride.cost}</p>
            <button
              className="book-button"
              onClick={() => handleBook(ride)}
              disabled={ride.seatsLeft === 0}
            >
              {ride.seatsLeft === 0 ? 'Full' : 'Book Now'}
            </button>
          </div>
        ))}
      </div>

      <button className="home-button" onClick={() => navigate('/home')}>
        Back to Home
      </button>
    </div>
  );
};

export default BookRide;
