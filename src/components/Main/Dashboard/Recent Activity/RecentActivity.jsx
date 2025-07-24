import React, { useState, useEffect } from 'react';
import CardFilter from '../CardFilter';
import RecentActivityItem from './RecentActivityItem'; 
import "./recentActivity.css";

function RecentActivity() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('Today');

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const fetchData = () => {
    fetch('http://localhost:4000/recentactiviy') // Note: URL typo? (recentactivity)
      .then(res => res.json())
      .then(data => {
        setItems(data);
      })
      .catch(e => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card recent-activity">
      <CardFilter filterChange={handleFilterChange} />

      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="recent-title">
          Recent Activity <span>| {filter}</span>
        </h5>
      
      </div>

      <div className="card-body">
        <div className="activity">
          {items && items.length > 0 && items.map(item => (
            <RecentActivityItem key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentActivity;
