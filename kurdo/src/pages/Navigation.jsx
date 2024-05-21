import React, { useState } from 'react';
// import "./Navigation.module.css"
const Navigation = () => {
  const [navVisible, setNavVisible] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const toggleNavbar = () => {
    setNavVisible(!navVisible);
  };

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <div>
      <header className={`header ${navVisible ? 'body-pd' : ''}`}>
        <div className="header_toggle">
          <i
            className={`bx ${navVisible ? 'bx-x' : 'bx-menu'}`}
            id="header-toggle"
            onClick={toggleNavbar}
          ></i>
        </div>
      </header>
      <div className={`l-navbar ${navVisible ? 'show' : ''}`} id="nav-bar">
        <nav className="nav">
          <div>
            <a href="#" className="nav_logo">
              <i className="bx bx-layer nav_logo-icon"></i>
              <span className="nav_logo-name">BBBootstrap</span>
            </a>
            <div className="nav_list">
              {['Dashboard', 'Users', 'Messages', 'Bookmark', 'Files', 'Stats'].map((name, index) => (
                <a
                  href="#"
                  key={index}
                  className={`nav_link ${activeLink === index ? 'active' : ''}`}
                  onClick={() => handleLinkClick(index)}
                >
                  <i className={`bx bx-${name.toLowerCase().replace(' ', '-')} nav_icon`}></i>
                  <span className="nav_name">{name}</span>
                </a>
              ))}
            </div>
          </div>
          <a href="#" className="nav_link">
            <i className="bx bx-log-out nav_icon"></i>
            <span className="nav_name">SignOut</span>
          </a>
        </nav>
      </div>
      <div id="body-pd" className={navVisible ? 'body-pd' : ''}>
        {/* Diğer içerikler */}
      </div>
    </div>
  );
};

export default Navigation;
