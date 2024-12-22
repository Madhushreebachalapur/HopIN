import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './HomeScreen.css';
import './styles.css';

const HomeScreen = ({ rides }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userName } = location.state || {};

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRides, setFilteredRides] = useState(rides);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.className = isDarkTheme ? '' : 'dark-theme';
  };

  useEffect(() => {
    setFilteredRides(
      rides.filter(
        (ride) =>
          ride.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
          ride.to.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [rides, searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleBookRide = () => {
    navigate('/book-ride');
  };

  const handleOfferRide = () => {
    navigate('/offer-ride');
  };

  const handleLogOff = () => {
    navigate('/');
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="logo">
        <img 
        src={`${process.env.PUBLIC_URL}/hopin.jpg`} 
        alt="Hop IN" 
        style={{ width: "80px", height: "auto" }}
      />
          <h1>Hop IN</h1>
        </div>
        <div className="profile">
          <span>Welcome, {userName || 'User'}!</span>
        </div>
        <label class="switch">
          <input type="checkbox" onChange={toggleTheme}/>
          <span class="slider round"></span>
        </label>
      </header>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a ride..."
          className="search-bar"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="options-container">
        <button className="option-button" onClick={handleBookRide}>
          Book a Ride
        </button> &nbsp;
        <button className="option-button" onClick={handleOfferRide}>
          Offer a Ride
        </button> &nbsp;
        <button className="option-button exit-button" onClick={handleLogOff}>
          Exit
        </button>
      </div>
      <div className="active-rides">
        <h2>Upcoming Rides</h2>
        {filteredRides.length === 0 ? (
          <p>No rides found matching your search.</p>
        ) : (
          filteredRides.map((ride) => (
            <div
              key={ride.id}
              className="ride-card"
              onClick={() =>
                navigate('/ride-details', {
                  state: { ride },
                })
              }
            >
              <div className="ride-details">
                <p><strong>Ride {ride.id}</strong></p>
                <p>Departure: {ride.departureTime}</p>
                <p>From: {ride.from} - To: {ride.to}</p>
              </div>
              <div className="ride-info">
                <p>{ride.seatsLeft} seats left</p>
                <p>{ride.cost}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
