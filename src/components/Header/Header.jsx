import { useState } from "react";
import "./Header.scss";

function Header() {
  const [selectedItem, setSelectedItem] = useState(" ");

  const handleSelectedItem = (link) => {
    setSelectedItem(link);
  };

  return (
    <header className="header">
      <nav>
        <ul className="header__list">
          <a href="#about" onClick={() => handleSelectedItem("about")}>
            <li
              className={`header__item ${
                selectedItem === "about" ? "header__item--selected" : " "
              }`}
            >
              About
            </li>
          </a>
          <a href="#projects" onClick={() => handleSelectedItem("projects")}>
            <li
              className={`header__item ${
                selectedItem === "projects" ? "header__item--selected" : " "
              }`}
            >
              Projects
            </li>
          </a>
          <a href="#education" onClick={() => handleSelectedItem("education")}>
            <li
              className={`header__item ${
                selectedItem === "education" ? "header__item--selected" : " "
              }`}
            >
              Education
            </li>
          </a>
          <li className="header__item header__item--last">Resume</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
