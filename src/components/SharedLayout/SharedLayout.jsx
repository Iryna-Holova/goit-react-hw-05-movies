import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./SharedLayout.module.css";

const SharedLayout = () => {
  return (
    <>
      <header>
        <nav className={styles.header}>
            <NavLink to="/" className={styles.nav_button}>Home</NavLink>
            <NavLink to="/movies" className={styles.nav_button}>Movies</NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;