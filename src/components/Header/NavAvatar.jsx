import React from 'react';
import profileImg from '../../images/user.jpg';

import navItem from '../../data/navItem'; // ✅ Your nav item list

function NavAvatar() {
  return (
    <li className="nav-item dropdown pe-3">
      <a
        className="nav-link nav-profile d-flex align-items-center pe-0"
        href="/"
        role="button"
        tabIndex="0"
        data-bs-toggle="dropdown"
      >
        <img src={profileImg} alt="Profile" className="rounded-circle" />
        <span className="d-none d-md-block dropdown-toggle ps-2">F. David</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li className="dropdown-header">
          <h6>David</h6>
          <span>Web Developer</span>
        </li>

        <li><hr className="dropdown-divider" /></li>

        {navItem.map((item, index) => (
          <React.Fragment key={item._id}>
            <li>
              <a
                href="/"
                role="button"
                tabIndex="0"
                className="dropdown-item d-flex align-items-center"
              >
                <i className={item.icon}></i>
                <span className="ms-2">{item.name}</span>
              </a>
            </li>
            {index !== navItem.length - 1 && <li><hr className="dropdown-divider" /></li>}
          </React.Fragment>
        ))}

        <li><hr className="dropdown-divider" /></li>

        <li>
          <a
            href="/"
            role="button"
            tabIndex="0"
            className="dropdown-item d-flex align-items-center"
          >
            <i className="bi bi-box-arrow-right"></i>
            <span className="ms-2">Sign Out</span>
          </a>
        </li>
      </ul>
    </li>
  );
}

export default NavAvatar;
//You're seeing ESLint accessibility warnings because you're using invalid links like href="javascript:void(0)", which is considered bad practice for accessibility and security. Instead of that, you should use a <button> element styled like a link, or if you're not ready to add real navigation routes, just use "#" temporarily with role="button" and tabIndex="0" for accessibility.

