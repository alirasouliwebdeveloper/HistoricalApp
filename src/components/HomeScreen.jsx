import React from "react";
import { useState } from "react";
import "./HomeScreen.css"; // Assuming you'll create a CSS file for styles
import Categories from "./Categories";
import SortCategories from "./SortCategories";
import Destinations from "./Destinations";
// import { AntDesign } from "react-icons/ai"; // In React.js, you'll likely use an icon library like FontAwesome, Material-UI, or react-icons

export default function HomeScreen() {
  const [search, setSearch] = useState("");

  return (
    <div className="container">
      <div className="scrollView">
        {/* Avatar */}
        <div className="avatarMain">
          <h1 className="avatarTitle">Explore Places</h1>
          <button className="avatarButton">
            <img
              src={require("./../assets/images/avatar.png")}
              alt="Avatar"
              className="avatarImage"
            />
          </button>
        </div>

        {/* SearchBar */}
        <div className="searchBar">
          <div className="searchBarMain">
            {/* <AntDesign name="search1" size={20} color="gray" /> */}
            <input
              type="text"
              placeholder="Search Destination"
              className="searchBarText"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Categories */}
        <div className="categories">
          <Categories />
        </div>

        {/* Sort Categories */}
        <div className="sortCategories">
          <SortCategories />
        </div>

        {/* Destinations */}
        <div className="destinations">
          <Destinations />
        </div>
      </div>
    </div>
  );
}
