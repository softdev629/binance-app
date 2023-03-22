// import basics
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

// Navbar Component
const Navbar = () => {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <NavLink
          className={({ isActive }) =>
            ["nav-item", isActive ? "active" : undefined]
              .filter(Boolean)
              .join(" ")
          }
          to="/binance/settings"
        >
          Create Trade
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            ["nav-item", isActive ? "active" : undefined]
              .filter(Boolean)
              .join(" ")
          }
          to="/binance/log"
        >
          Trade Log
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            ["nav-item", isActive ? "active" : undefined]
              .filter(Boolean)
              .join(" ")
          }
          to="/binance/active"
        >
          Active Trade
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
