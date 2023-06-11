import React from "react";
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              id={window.location.pathname === val.link ? "active" : ""}
              onClick={() => {
                {
                  window.location.pathname = val.link;
                }
              }}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
      <div className="bar-info">
        <div className="img-sidebar"></div>
        <h1>Barthélémy David</h1>
      </div>
    </div>
  );
};

export default Sidebar;
