import React from "react";
import { Outlet } from "react-router";

// Settings Container
const Settings = () => {
  return (
    <div className="create-trade">
      <Outlet />
    </div>
  );
};

export default Settings;
