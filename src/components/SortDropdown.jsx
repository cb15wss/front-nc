import React from "react";

const SortDropdown = () => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-default dropdown-toggle"
        type="button"
        id="menu1"
        data-toggle="dropdown"
      >
        Tutorials
        <span className="caret"></span>
      </button>
      <ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
        <li role="presentation">
          <a role="menuitem" href="#">
            HTML
          </a>
        </li>
        <li role="presentation">
          <a role="menuitem" href="#">
            CSS
          </a>
        </li>
        <li role="presentation">
          <a role="menuitem" href="#">
            JavaScript
          </a>
        </li>
        <li role="presentation" className="divider"></li>
        <li role="presentation">
          <a role="menuitem" href="#">
            About Us
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SortDropdown;
