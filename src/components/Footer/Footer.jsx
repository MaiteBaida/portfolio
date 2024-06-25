import "./Footer.scss";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import mail from "../../assets/icons/mail.svg";

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__list">
        <li>
          <a className="footer__list-item" href="https://github.com/MaiteBaida">
            <img className="footer__icon" src={github} />
            <p>github.com/MaiteBaida</p>
          </a>
        </li>
        <li>
          <a
            className="footer__list-item"
            href="https://www.linkedin.com/in/maitebaida/"
          >
            <img className="footer__icon" src={linkedin} />
            <p>linkedin.com/maitebaida</p>
          </a>
        </li>
        <li>
          <a
            className="footer__list-item"
            href="mailto:maitemsabaida@gmail.com"
          >
            <img className="footer__icon" src={mail} />
            <p>maitemsabaida@gmail.com</p>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
