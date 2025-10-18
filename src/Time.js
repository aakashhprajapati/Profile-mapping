import { useState } from "react";
import "./index.css"

const Time = () => {
  let currentTime = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(currentTime);

  const updateTime = () => {
    let newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
  };

  setInterval(updateTime, 1000);

  return (
    <>
      <h1>{ctime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </>
  );
};

export default Time;
