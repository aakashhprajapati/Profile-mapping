import { useState } from "react";
import "./ToggleSwitch.css"; // we’ll add styles here

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="toggle-container" onClick={toggleSwitch}>
      <div className={`toggle-switch ${isOn ? "on" : "off"}`}>
        <div className="toggle-circle"></div>
      </div>
      <p>{isOn ? "ON" : "OFF"}</p>
    </div>
  );
};

export default Toggle;
