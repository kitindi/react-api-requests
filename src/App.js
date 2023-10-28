import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [fact, setFact] = useState("");
  const [name, setName] = useState("");
  const [prediction, setPrediction] = useState(null);

  const getFact = () => {
    // fetch("https://catfact.ninja/fact")
    // .then((res) => res.json())
    // .then((data) => setFact(data?.fact));

    axios
      .get("https://catfact.ninja/fact")
      .then((res) => setFact(res.data?.fact));
  };

  const getAge = () => {
    axios
      .get(`https://api.agify.io/?name=${name}`)
      .then((res) => setPrediction(res.data));
  };

  useEffect(() => {
    getFact();
    getAge();
  }, []);
  return (
    <div className="App">
      <div className="getfact">
        <h1>Get the fact about cats</h1>
        <button onClick={() => getFact()}>Get Fact</button>
        <p>{fact ? fact : "No fact yet ! 😜"}</p>
      </div>
      <div className="getfact">
        <h1>Age Prediction App </h1>
        <div>
          <input
            type="text"
            placeholder="Example, James..."
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <button onClick={() => getAge()}>Predict age</button>
        <div>
          <p>
            {prediction?.name}! ,You are {prediction?.age} years old ! 🎈
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

// component life
// mounting, updating and unmounting
