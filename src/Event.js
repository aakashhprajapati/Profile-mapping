import React, { useState } from "react";

const Event = () => {
  const [bg, setBg] = useState("lightblue"); // background color
  const [name, setName] = useState("Click Me"); // button text

  const work = () => {
    alert("Hello");
    setBg("lightgreen"); // changes background when clicked
    setName("Clicked!");
  };

  return (
    <div style={{ backgroundColor: bg, padding: "20px", textAlign: "center" }}>
      <button onClick={work}>{name}</button>
    </div>
  );
};

export default Event;
