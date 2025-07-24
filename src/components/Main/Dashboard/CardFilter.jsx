import React from 'react';

function CardFilter({ filterChange }) {
  return (
    <div className="dropdown card-filter">
      <button
        className="btn"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="bi bi-three-dots"></i>
      </button>

      <ul className="dropdown-menu custom-dropdown" aria-labelledby="dropdownMenuButton">
        <li className="dropdown-header text-start">
          <h6>Filter</h6>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => filterChange("Today")}>
            Today
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => filterChange("This Month")}>
            This Month
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => filterChange("This Year")}>
            This Year
          </button>
        </li>
      </ul>
    </div>
  );
}

export default CardFilter;
