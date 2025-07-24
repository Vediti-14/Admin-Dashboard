import React from 'react';

function NavMessage() {
  return (
    <li className="nav-item dropdown">
      <button
        className="nav-link nav-icon"
        type="button"
        data-bs-toggle="dropdown"
        aria-label="Open message dropdown"
      >
        <i className="bi bi-chat-left-text"></i>
        <span className="badge bg-success badge-number">3</span>
      </button>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
        <li className="dropdown-header">
          You have 3 new messages
          <a href="/messages">
            <span className="badge rounded-pill bg-primary p-2 ms-2">View all</span>
          </a>
        </li>

        <li><hr className="dropdown-divider" /></li>

        {/* Message 1: Maria Hudson */}
        <li className="message-item">
          <a href="/messages/1">
            <img
              src="/assets/img/messages-1.jpg"
              alt="Maria Hudson"
              className="rounded-circle"
            />
            <div>
              <h4>Maria Hudson</h4>
              <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
              <p>4 hrs. ago</p>
            </div>
          </a>
        </li>

        <li><hr className="dropdown-divider" /></li>

        {/* Message 2: Anna Nelson */}
        <li className="message-item">
          <a href="/messages/2">
            <img
              src="/assets/img/messages-2.jpg"
              alt="Anna Nelson"
              className="rounded-circle"
            />
            <div>
              <h4>Anna Nelson</h4>
              <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
              <p>6 hrs. ago</p>
            </div>
          </a>
        </li>

        <li><hr className="dropdown-divider" /></li>

        {/* ✅ Message 3: David Muldon */}
        <li className="message-item">
          <a href="/messages/3">
            <img
              src="/assets/img/messages-3.jpg"
              alt="David Muldon"
              className="rounded-circle"
            />
            <div>
              <h4>David Muldon</h4>
              <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
              <p>8 hrs. ago</p>
            </div>
          </a>
        </li>

        <li><hr className="dropdown-divider" /></li>

        <li className="dropdown-footer">
          <a href="/messages">Show all messages</a>
        </li>
      </ul>
    </li>
  );
}

export default NavMessage;
