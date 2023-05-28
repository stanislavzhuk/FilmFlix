import Loader from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/movies'>Movies</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  )
};

export default Layout;