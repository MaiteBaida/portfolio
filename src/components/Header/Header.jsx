import { useState } from "react";
import "./Header.scss";

function Header() {
  const [selectedItem, setSelectedItem] = useState(" ");

  return (
    <header className="header">
      <nav>
        <ul className="header__list">
          <a href="#about">
            <li className="header__item">About</li>
          </a>
          <a href="#projects">
            <li className="header__item">Projects</li>
          </a>
          <a href="#education">
            <li className="header__item">Education</li>
          </a>
          <li className="header__item header__item--last">Resume</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
