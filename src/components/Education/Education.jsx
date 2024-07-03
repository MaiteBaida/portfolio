import "./Education.scss";

function Education() {
  return (
    <section className="education" id="education">
      <div className="education__container">
        <h2 className="education__header">Education</h2>
        <ul>
          <li className="education__list-item">
            <h3 className="education__subheader">
              Full-Stack Software Developer
            </h3>
            <div>
              <p className="education__txt">BrainStation</p>
              <p className="education__txt">Canada (remote)</p>
              <p className="education__txt">2023 - 2024</p>
            </div>
          </li>
          <li className="education__list-item education__list-item--last">
            <h3 className="education__subheader">Architect and Urbanist</h3>
            <div>
              <p className="education__txt">
                FAAP - Fundacao Armando Alvares Penteado
              </p>
              <p className="education__txt">Sao Paulo, Brazil</p>
              <p className="education__txt">2007 - 2012</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Education;
