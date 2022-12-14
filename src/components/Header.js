import React from "react";
import moon from "../images/icon-moon.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <h1>TODO</h1>
        <img alt="moon icon" src={moon} />
      </div>
    </div>
  );
}
