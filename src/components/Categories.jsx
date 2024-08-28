import React from "react";
import { categoriesData } from "./constants";
import "./Categories.css"; // Importing the CSS file

export default function Categories() {
  return (
    <div>
      {/* Container for title and "View all" link */}
      <div className="categories-container">
        <h2 className="categories-titleMain">Category</h2>
        <button className="categories-subTitle">View all</button>
      </div>

      {/* Horizontal Scrollable Categories */}
      <div className="categories-scrollView">
        {categoriesData.map((category, index) => {
          return (
            <div key={index} className="categories-card">
              <img src={category.image} alt={category.title} className="categories-cardImage" />
              <p className="categories-cardTitle">{category.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
