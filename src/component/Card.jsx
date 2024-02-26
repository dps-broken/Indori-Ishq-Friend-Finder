import React, { useState } from "react";
import "./Card.css";

export default function Card(props) {
  const name = props.name;
  const age = props.age;
  const description = props.description;
  const image = props.image;

  const [buttonText, setButtonText] = useState("Follow");

  const handleClick = () => {
    setButtonText("Following");
  };

  return (
    <div className="Parent">
      <img src={`imgs/${image}`} alt={name} />

      <div className="calssContent">
        <h1>{name}</h1>
        <h4>{age}Yrs.</h4>
        <p>{description}</p>
        <div className="btn2">
          <button onClick={handleClick}>{buttonText}</button>
          <button>Massage</button>
        </div>
      </div>
    </div>
  );
}
