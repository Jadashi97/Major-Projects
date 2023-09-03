import { useState } from "react";
import "./App.css";

let loggedIn = true;

function App() {
  const [count, setCount] = useState(0);

  const showAccount = () => {
    return <div>You are logged in!</div>;
  };

  return (
    <>
      <h1>Coding Phase Project 1</h1>
      <h2>{loggedIn ? showAccount() : " "}</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>what is this?</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
