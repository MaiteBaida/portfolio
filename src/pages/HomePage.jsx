import About from "../components/About/About";
import Hero from "../components/Hero/Hero";
import PageLayout from "../components/PageLayout/PageLayout";
import "./HomePage.scss";

function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <About />
    </PageLayout>
  );
}

export default HomePage;
