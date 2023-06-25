import React from "react";
import "./styles/App.css";
import SearchBar from "./components/SearchBar";
import TrendingTopics from "./components/TrendingTopics";
import HomeTimeline from "./components/HomeTimeline";
import Profile from "./components/Profile";
import Notifications from "./components/Notifications";
import SettingsAndPrivacy from "./components/SettingAndPrivacy";

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1 className="logo pointer-cursor">Twitter</h1>
      </header>
      <div className="container">
        <div className="sidebar">
          <Profile />
          <SearchBar />
          <TrendingTopics />
        </div>
        <div className="main-content">
          <HomeTimeline />
        </div>
        <div className="right-sidebar">
          <Notifications />
          <SettingsAndPrivacy />
        </div>
      </div>
    </div>
  );
};

export default App;
