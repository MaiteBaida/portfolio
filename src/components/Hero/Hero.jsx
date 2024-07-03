import "./Hero.scss";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__name-box">
          <p className="hero__name">MAITE</p>
          <p className="hero__name hero__name--green">BAIDA</p>
        </div>
        <div className="hero__subtitle-box">
          <p className="hero__subtitle hero__subtitle--green">PORTFOLIO</p>
          <p className="hero__subtitle">FULL-STACK DEVELOPER</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
