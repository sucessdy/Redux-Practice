import React, { useState, useEffect } from "react";

// what is useEffect
// Well, in React  to perform side effects, in our application .. as we can think as about them as name implies as thing happeing as a consequence of something else

// you have some state in ur application it's goes to from one value to another value that cause  a side effect
export default function EffectFile() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // the code we want to run
    console.log("count is " + count);

    // optional return function
    return () => {
      console.log("I'm being cleaned up");
    };
  }, [count]);
  //  dependencies array - now it's important cuz this is what you use to tell useEffect what is should listen to , what is should react to , what is should listen to run the code here

  // IMP = no matter what you need to provide the dependencies array on how you provide the code it is guaranteed to run atleast once

  return (
    <>
      <h1 className="text-xl font-black font-mono">Count:{count} </h1>
      <button
        className="bg-slate-500 border-x-black py-2 mx-4  p-2 text-gray-100"
        onClick={() => setCount(count + 1)}
      >
        {" "}
        Increment{" "}
      </button>
      <button
        className="bg-gray-100 border-x-white py-2 my-4 p-2"
        onClick={() => setCount(count - 1)}
      >
        Decrement{" "}
      </button>{" "}
    </>
  );
}
