import "./About.scss";
import profilePic from "../../assets/images/maitebaida.jpeg";

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <img
          src={profilePic}
          alt="professional profile picture"
          className="about__img"
        />
        <div className="about__txt-container">
          <h2 className="about__header">About</h2>
          <p className="about__txt">
            <span className="about__txt--green">Results-driven</span>{" "}
            professional with a background in interior design, currently
            transitioning to a career in software engineering. Bringing a
            foundation in{" "}
            <span className="about__txt--green">creative problem-solving</span>,
            thorough attention to detail, and a strong eye for design
            aesthetics, I am dedicated to mastering programming languages and
            full-stack development. Excited to contribute a unique perspective,
            a <span className="about__txt--green">passion for innovation</span>,
            and a{" "}
            <span className="about__txt--green">collaborative mindset</span> to
            software engineering.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
