import React from "react";
import moon from "../images/icon-moon.svg";
import sun from "../images/icon-sun.svg";

export default function Header({ toggleTheme, theme }) {
  return (
    <div className="header">
      <div className="header-content">
        <h1>TODO</h1>
        <button onClick={toggleTheme} className="theme-button">{theme === 'light' ? <img alt="moon icon" src={moon} /> : <img alt="sun icon" src={sun} />}</button>
      </div>
    </div>
  );
}
