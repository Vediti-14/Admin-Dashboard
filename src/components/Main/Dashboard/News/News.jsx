import React, { useState, useEffect } from 'react';
import './news.css';
import NewsPostItem from './NewsPostItem';
import CardFilter from '../CardFilter';

function News() {
  const [news, setNews] = useState([]);
  const [filter, setFilter] = useState('Today');

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const fetchData = () => {
    fetch('http://localhost:4000/news')
      .then(res => res.json())
      .then(data => {
        setNews(data);
      })
      .catch(e => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />

      <div className="card-body pb-0">
        <h5 className="card-title">
          News &amp; Updates <span>({filter})</span>
        </h5>

        <div className="news">
          {news.length > 0 && news.map(item => (
            <NewsPostItem key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;

