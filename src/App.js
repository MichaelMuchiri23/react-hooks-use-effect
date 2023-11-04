import React, { useState, useEffect } from "react";
import DogPics from "./DogPics";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    document.title = text;
  }, [text]);

  useEffect(() => {
    console.log("one")
    setTimeout(() => setCount(0), 5000);
  }, [count]);


  console.log("Component rendering");

  return(
    <div>
      <button onClick={() => setCount((count) => count + 1)}>Click Me{count}</button>
      <input
        type="text"
        placeholder="Type away..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <DogPics />
    </div>
  ) 
}

export default App;
