import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="header__nav">
          <li className="header__item">About</li>
          <li className="header__item">Projects</li>
          <li className="header__item">Education</li>
          <li className="header__item">Resume</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
