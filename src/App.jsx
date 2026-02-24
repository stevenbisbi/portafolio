import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SplineModel from "./components/SplineModel";
import gradient from "./assets/gradient.png";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="container-font">
      <img className="image-gradient" src={gradient} alt="gradient" />
      <div className="layer-blur"></div>

      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <Hero className="hero-section" />

            <About />
            <Projects />
            <Skills />
            <Contact />
          </div>
          <div className="col-lg-6 spline-container">
            <SplineModel />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
