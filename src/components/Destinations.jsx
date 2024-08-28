import React, { useState } from "react";
import { destinationData } from "./constants"; // Ensure the path is correct
import { useNavigate } from "react-router-dom"; // Updated hook for navigation
// import { AntDesign } from "react-icons/ai"; // Use react-icons for web icons
import "./Destinations.css"; // Importing the CSS file

export default function Destinations() {
  const navigate = useNavigate(); // Updated to useNavigate

  return (
    <div className="destinations-container">
      {destinationData.map((item, index) => {
        return (
          <DestinationCard navigate={navigate} item={item} key={index} index={index} />
        );
      })}
    </div>
  );
}

export const DestinationCard = ({ index, navigate, item }) => {
  const [isFavourite, toggleFavourite] = useState(false);

  const handleNavigate = () => {
    navigate("/destination", { state: { ...item } }); // Updated for react-router-dom v6
  };

  return (
    <div className="destination-card" onClick={handleNavigate}>
      <img src={item.image} alt={item.title} className="destination-avatar" />

      <div
        onClick={(e) => {
          e.stopPropagation(); // Prevent triggering the card click
          toggleFavourite(!isFavourite);
        }}
        className="heart-icon"
      >
        {/* <AntDesign
          name="heart"
          size={20}
          color={isFavourite ? "red" : "white"}
        /> */}
      </div>

      <h3 className="destination-title">{item.title}</h3>
    </div>
  );
};
