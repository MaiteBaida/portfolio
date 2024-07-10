import { useState, useEffect } from "react";
import "./Header.scss";

function Header() {
  const [selectedItem, setSelectedItem] = useState(" ");

  const sections = ["about", "projects", "education"];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSelectedItem(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, [sections]);

  return (
    <header className="header">
      <nav>
        <ul className="header__list">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setSelectedItem(section)}
            >
              <li
                className={`header__item ${
                  selectedItem === section ? "header__item--selected" : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </li>
            </a>
          ))}
          <li className="header__item header__item--last">Resume</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
