import "./Education.scss";

function Education() {
  return (
    <section className="education">
      <h2 className="education__header">Education</h2>
      <ul>
        <li>
          <h3 className="education__subheader">Software Developer</h3>
          <p className="education__txt">title</p>
          <p className="education__txt">date, duration</p>
        </li>
        <li>
          <h3 className="education__subheader">Architect and Urbanist</h3>
          <p className="education__txt">title</p>
          <p className="education__txt">date, duration</p>
        </li>
      </ul>
    </section>
  );
}

export default Education;
