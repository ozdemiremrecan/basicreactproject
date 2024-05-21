import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navigation from './Navigation';
function Root() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/auth" ? "" : <Navigation />}
      <div id="body-pd" className=''>
        <Outlet />
      </div>
    </>
  );
}

export default Root;
