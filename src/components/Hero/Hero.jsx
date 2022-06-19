import React from "react";
import "./Hero.scss";

const Hero = ({ hero }) => {
  return (
    <div className="hero">
        <div className="imagen">
          <img key={hero.image} src={hero.image} alt="Raquel Angona" className="foto"/>
        </div>
        
        <div className="datos">
          <h2 key={hero.name} className="elemento">{hero.name}</h2>
          <p  className="elemento">📧
              <a key={hero.email} href={"mailto:" + hero.email}>raquelangona@outlook.es</a>
          </p>
          <p className="elemento">💼
              <a key={hero.linkedin} href={hero.linkedin} >linkedin.com/in/raquelangona/</a>
          </p>
          <p className="elemento">💻
            <a key={hero.gitHub} href={hero.gitHub}>github.com/raquelangonacid/</a>
          </p>
          <p key={hero.city}>🗺️{hero.city} </p>
        </div>
    </div>
  );
};

export default Hero;