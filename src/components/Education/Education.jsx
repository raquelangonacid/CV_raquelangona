import React from 'react';
import "./Education.scss";

const Education = ({education}) => {
  return (
    <div>
    {education.map((item)=>{
      return(
        <div className="Education">
          <p key={education.name} className="titulo">{item.name}</p>
          <p key={education.date}>{item.date}</p>
          <p key={education.where}>{item.where}</p>
        </div>
      )
    })}   
    </div>
  )
}

export default Education;
