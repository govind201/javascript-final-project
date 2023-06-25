import React from "react";
import "../styles/SettingAndPrivacy.css";

const SettingsAndPrivacy = () => {
  const handleLogout = () => {
    console.log("User logged out!");
  };

  return (
    <div className="settings-and-privacy">
      <h2>Settings and Privacy</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default SettingsAndPrivacy;
