import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // React Router hooks for navigation and retrieving state
import { AiOutlineHeart, AiFillHeart, AiOutlineClockCircle } from "react-icons/ai"; // Correct import for icons
import { IoArrowBack } from "react-icons/io5"; // Import Ionicons from react-icons
import "./DestinationScreen.css"; // Importing the CSS file for styling

export default function DestinationScreen() {
  const navigate = useNavigate(); // useNavigate hook from react-router-dom
  const location = useLocation(); // useLocation hook to get state from navigation
  const item = location.state; // Accessing the passed item data

  const [isFavourite, toggleFavourite] = useState(false);

  return (
    <div className="container">
      <img src={item.image} className="image" alt={item.title} />

      {/* Back and Favourite Icons */}
      <div className="navigation-icons">
        <button onClick={() => navigate(-1)} className="back-view">
          <IoArrowBack size={24} color="white" />
        </button>

        <button
          onClick={() => toggleFavourite(!isFavourite)}
          className="favourite-view"
        >
          {isFavourite ? (
            <AiFillHeart size={24} color="red" />
          ) : (
            <AiOutlineHeart size={24} color="white" />
          )}
        </button>
      </div>

      {/* Title and Description */}
      <div className="description-view">
        <div className="title-view">
          <h1 className="title">{item.title}</h1>
        </div>

        <p className="description">{item.longDescription}</p>

        {/* Details Section */}
        <div className="details-view">
          {/* Duration View */}
          <div className="duration-view">
            <AiOutlineClockCircle size={24} color="orange" />
            <div className="title-details">
              <p className="details-heading">{item.duration}</p>
              <p className="details-paragraph">Duration</p>
            </div>
          </div>

          {/* Distance View */}
          <div className="duration-view">
            <AiOutlineClockCircle size={24} color="orange" />
            <div className="title-details">
              <p className="details-heading">{item.distance}</p>
              <p className="details-paragraph">Distance</p>
            </div>
          </div>

          {/* Weather View */}
          <div className="duration-view">
            <AiOutlineClockCircle size={24} color="orange" />
            <div className="title-details">
              <p className="details-heading">{item.weather}</p>
              <p className="details-paragraph">Weather</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
