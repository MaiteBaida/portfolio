import "./Projects.scss";
import budgetwise from "../../assets/images/budgetwise.png";
import calculator from "../../assets/images/calculator.png";
import tictactoe from "../../assets/images/tic-tac-toe.png";

function Projects() {
  return (
    <main className="projects" id="projects">
      <div className="projects__container">
        <h2 className="projects__header">Projects</h2>
        <ul>
          <li className="projects__list-item">
            <a
              href="https://maitebaida.github.io/budgetwise/"
              className="projects__list-box"
            >
              <img
                src={budgetwise}
                alt="budgetwise project screenshot"
                className="projects__img"
              />
              <div className="projects__txt-container">
                <h3 className="projects__subheader">BudgetWise</h3>
                <p className="projects__txt">
                  Designed to help users efficiently manage their finances by
                  categorizing and tracking expenses. A full-stack application.
                </p>
                <p className="projects__txt">// Work In Progress</p>
                <p className="projects__txt">
                  JavaScript | React.js | Node.js | MySQL | HTML5 | CSS
                </p>
              </div>
            </a>
          </li>
          <li className="projects__list-item">
            <a href="#" className="projects__list-box">
              <img
                src={calculator}
                alt="calculator project screenshot"
                className="projects__img"
              />
              <div className="projects__txt-container">
                <h3 className="projects__subheader">Calculator</h3>
                <p className="projects__txt">
                  A simple calculator. A front-end application.
                </p>
                <p className="projects__txt">
                  JavaScript | React.js | Tailwind | HTML5 | CSS
                </p>
              </div>
            </a>
          </li>
          <li className="projects__list-item projects__list-item--last">
            <a href="#" className="projects__list-box">
              <img
                src={tictactoe}
                alt="tic-tac-toe project screenshot"
                className="projects__img"
              />
              <div className="projects__txt-container">
                <h3 className="projects__subheader">Tic-tac-toe</h3>
                <p className="projects__txt">
                  Self-explanatory. A front-end application.
                </p>
                <p className="projects__txt">
                  JavaScript | React.js | HTML5 | CSS
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Projects;
