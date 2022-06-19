import React from 'react'
import "./About.scss";

const About = ({ hero }) => {
  return (
    <div className='about'>
      <p className="about__titulo">SOBRE MI</p>
      <p className="about__contenido">{hero.aboutMe}</p>
    </div>
  )
}

export default About;
