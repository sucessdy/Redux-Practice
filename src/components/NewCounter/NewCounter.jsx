import React, { useEffect, useState } from "react";

export default function NewCounter({ name }) {
  const [count, setCount] = useState(0);
  // const [count2 , setCount2] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("new counter");
    }, 1000);
    // console.log("countering")
    // console.log(document.getElementById("counter-title-new"))
  });

  return (
    <div>
      <>
        <h1 id="counter-title-new" className="mt-4">
          {name}
        </h1>
        <button onClick={() => setCount(count - 1)}> </button>
        <h2> {count}</h2>
      </>
    </div>
  );
}
