import { useState } from "react";

function counter(){
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>count: {count}</h2>
            <button onClick={() =>setCount(count + 1)}>Increase</button>            
            <button onClick={() =>setCount(count + 1)}>Increase</button>
        </div>
    )
}

export default useState;