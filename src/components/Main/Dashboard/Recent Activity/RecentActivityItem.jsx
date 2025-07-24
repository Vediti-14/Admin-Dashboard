import React from 'react';

function RecentActivityItem({ item }) {
  return (
    <div className="activity-item d-flex align-items-start">
      <div className="activity-label">{item.time}</div>

      <i className={`bi bi-circle-fill activity-badge ${item.color}`}></i>

      {item.highlight ? (
        <div className="activity-content">
          {item.content.substring(0, item.content.indexOf(item.highlight))}
          <a href="/" className="fw-bold text-dark">{item.highlight}</a>
          {item.content.substring(
            item.content.indexOf(item.highlight) + item.highlight.length
          )}
        </div>
      ) : (
        <div className="activity-content">{item.content}</div>
      )}
    </div>
  );
}




export default RecentActivityItem;

