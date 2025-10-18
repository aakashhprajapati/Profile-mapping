import React, { useState } from 'react'

const Incre = () => {
  // function Incre() {
      const [num, setNum] = useState(0);

const incnum = () => {
    setNum(num + 1);
};

const Decnum = () => {
    if(num > 0) {
        setNum(num - 1);
    }else{
        alert("Sorrt, Zero Limit")
        setNum(0)
    }
  
};

  return (
    <>
    <h1> {num} </h1>
    <button onClick={incnum}>Increment</button>
    <button onClick={Decnum}>DEcrement</button>
    </>
  )
}

export default Incre