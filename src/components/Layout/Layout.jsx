import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import Logo from 'components/Logo/Logo';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <Logo />
        <ul className={css.navbar}>
          <li>
            <NavLink to='/' className={css.navlink}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/movies' className={css.navlink}>Movies</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;