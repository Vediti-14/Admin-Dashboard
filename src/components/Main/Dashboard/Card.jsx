import React, { useState } from 'react';
import CardFilter from './CardFilter';
import './card.css';

function Card({ card }) {
  const [filter, setFilter] = useState('Today');

  return (
    <div className="col-xxl-4 col-md-6 mb-4">
      <div className="card info-card sales-card h-100 shadow-sm">
        <CardFilter filterChange={setFilter} />

        <div className="card-body">
          <h5 className="card-title">{card.name} <span>| {filter}</span></h5>
          <div className="d-flex align-items-center">
            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
              <i className={`${card.icon} fs-4`}></i>
            </div>
            <div className="ps-3">
              <h6>
                {card.name === 'Revenue'
                  ? '$' + card.amount.toLocaleString()
                  : card.amount.toLocaleString()}
              </h6>
              <span className={`small fw-bold ${card.percentage >= 0 ? 'text-success' : 'text-danger'}`}>
                {Math.abs(card.percentage * 100)}%
              </span>
              <span className="text-muted small ps-1">
                {card.percentage >= 0 ? 'increase' : 'decrease'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
