import About from "../components/About/About";
import Education from "../components/Education/Education";
import Hero from "../components/Hero/Hero";
import PageLayout from "../components/PageLayout/PageLayout";
import Projects from "../components/Projects/Projects";
import "./HomePage.scss";

function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <About />
      <Projects />
      <Education />
    </PageLayout>
  );
}

export default HomePage;
