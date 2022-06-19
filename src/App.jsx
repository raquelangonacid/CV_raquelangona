import './App.scss';
import { useState } from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import More from "./components/More/More";
import { CV } from "./CV/CV";

const { hero, education, experience, languages, habilities } = CV;

function App() {

  const [showEducation, setShowEducation] = useState(true);

  return (
    <div className="base">
        <Hero hero={hero} />
        <About hero={hero} />

        <div className="botones">
          <button onClick={() => setShowEducation(true)} className="boton_educacion">EDUCACIÓN</button>
          <button onClick={() => setShowEducation(false)} className="boton_experiencia">EXPERIENCIA</button>
        </div>
        <div className="E">
          {showEducation ? (
            <Education education={education} />
          ) : (
            <Experience experience={experience} />
          )}
        </div>

	      <More languages={languages} habilities={habilities} className="More"/>
    </div>
  );
}

export default App;
