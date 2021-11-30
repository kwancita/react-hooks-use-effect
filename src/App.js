import React, { useState, useEffect } from "react";



function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  // useEffect(() => {
  //   console.log("useEffect called");
  // },[count]);
  useEffect(() => {
    document.title = text;
  }, [text]);
  
  useEffect(() => {
    setTimeout(() => setCount(0), 5000);
  }, []);

  console.log("Component rendering");

  return (
    <>
    <button onClick={() => setCount(count+1)}>Click {count} times</button>
    <input type ="text" placeholder="type here..." value={text} onChange={(e) => setText(e.target.value)} />
    </>
  )
}

export default App;
