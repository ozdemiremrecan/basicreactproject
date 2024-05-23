import { Outlet,Form, useLocation, useRouteLoaderData,Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import "./Navigation.css"
function Navigation() {
  const location=useLocation();
  const [navVisible, setNavVisible] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const token=useRouteLoaderData("root");
  const toggleNavbar = () => {
    setNavVisible(!navVisible);
  };

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  return (
    <>
      {location.pathname==="/auth"&&<main><Outlet/></main>}
      {location.pathname==="/register"&&<main><Outlet/></main>}
      {location.pathname!=="/auth"&&location.pathname!=="/register"&&<div>
      <header className={`header ${navVisible ? 'nav_button' : ''}`} >
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
            <Link to="/" className="nav_logo">
              <i className={`bx bx-layer nav_logo-icon`}></i>
              <span className="nav_logo-name">Termosense</span>
            </Link>
            <div className="nav_list">
                {token&&<NavLink
                  to="/"
                  className={`nav_link ${activeLink === 1 ? 'active' : ''}`}
                  onClick={() => handleLinkClick()}
                >
                  <i className={`bx bx-layer nav_icon`}></i>
                  <span className="nav_name">Dashboard</span>
                </NavLink>}
                {token&&<NavLink
                  to="/addDevice"
                  className={`nav_link ${activeLink === 1 ? 'active' : ''}`}
                  onClick={() => handleLinkClick()}
                >
                  <i className={`bx bx-layer nav_icon`}></i>
                  <span className="nav_name">Add Device</span>
                </NavLink>}
                
            </div>
          </div>
          {token && <Form action="/logout" method='post' className="nav_link">
            <i className="bx bx-log-out nav_icon"></i>
            <span className="nav_name">Sign Out</span>
          </Form>}
          {!token&&<Link to="/auth" className="nav_link">
            <i className="bx bx-log-out nav_icon"></i>
            <span className="nav_name">Login</span>
          </Link>}
        </nav>
      </div>
      <div id="body-pd" className={navVisible ? 'body-pd' : ''}>
        <Outlet />
      </div>
    </div>}
    </>
  );
}

export default Navigation;
