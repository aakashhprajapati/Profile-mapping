import { useState } from "react";
import "./index.css"

function Color() {
    const [color, setColor] = useState('red');
    return(
        <>
        <h1>My favorite color is {color} </h1>
        <button type="button" onClick={() => setColor("blue")}>Blue </button>
         <button type="button" onClick={() => setColor("red")}>red </button>
          <button type="button" onClick={() => setColor("black")}>Black </button>
           <button type="button" onClick={() => setColor("Green")}>Green </button>
        </>
    );
};
export default Color;