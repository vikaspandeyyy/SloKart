import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export default function NavBar() {
  return (
    <nav id="nav">
      <div id="input">
        <div id="search-icon">
          <SearchIcon></SearchIcon>
        </div>
        <input type="text" placeholder="Search by name, category, module" />
        <button id="nav-input-search">
          <a>Search</a>
        </button>
      </div>
      <div id="nav-buttons">
        <div className="addBtn">
          <AddIcon></AddIcon>
        </div>
        <div className="nav-right-icons">
          <CalendarTodayIcon
            style={{ color: "#fff", width: "14", height: "17" }}
          ></CalendarTodayIcon>
        </div>
        <div className="nav-right-icons">
          <SettingsIcon
            style={{ color: "#fff", width: "15", height: "18" }}
          ></SettingsIcon>
        </div>
        <div className="nav-right-icons">
          <NotificationsNoneIcon
            style={{ color: "#fff", width: "15", height: "18" }}
          ></NotificationsNoneIcon>
        </div>
      </div>
    </nav>
  );
}
