import React, { useState } from "react";
import { sortCategoryData } from "./constants"; // Ensure this import path is correct
import "./SortCategories.css"; // Importing the CSS file

export default function SortCategories() {
  const [activeSort, setActiveSort] = useState("Popular");

  return (
    <div className="sort-categories-container">
      {sortCategoryData.map((sort, index) => {
        const isActive = sort === activeSort;
        const buttonClass = isActive
          ? "sort-category-button active"
          : "sort-category-button";

        return (
          <button
            key={index}
            onClick={() => setActiveSort(sort)}
            className={buttonClass}
          >
            {sort}
          </button>
        );
      })}
    </div>
  );
}
