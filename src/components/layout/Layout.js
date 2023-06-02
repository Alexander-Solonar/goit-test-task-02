// import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../navigation';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div>
      <header className={css.header}>
        <div className={css.container}>
          <Navigation />
        </div>
      </header>
      <main className={css.main}>
        <div className={css.container}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
