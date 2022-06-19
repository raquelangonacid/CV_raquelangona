import React from 'react';
import "./Experience.scss";

const Experience = ({experience}) => {
  return (
    <div>
    {experience.map((item)=>{
      return(
        <div className="Experience">
          <p key={experience.name} className="posicion">{item.name}</p>
          <p key={experience.date}>{item.date}</p>
          <p key={experience.date}>{item.where}</p>
          <p key={experience.description}>{item.description}</p>
        </div>
      )
    })}
    
      
    </div>
  )
}

export default Experience;
