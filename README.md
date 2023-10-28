# Understanding API requests with react

![Alt text](src/images/pull.jpg)

**What is API?**

API stands for **Aplication Programming Interface** which defines how two or more software programs interacts and share resources.
React framework just like other frameworks provides tools to help developers fetch data from APIs.This repository demonstartes how api requests can be handled in react projects.

## How to handle API requests in a react project.

- Create react application poiller plate

  ```javascript
    npx create-recat-app api-requests
  ```

  In the src directory import [useState](https://legacy.reactjs.org/docs/hooks-state.html) and [useEffect](https://legacy.reactjs.org/docs/hooks-effect.html) hooks. The useState hook is used to store data from the API requests, while the effect hook is used to control component rendering when there a potential changes to the state inorder to provide uptodate data on the UI.

  ```javascript
  import { useState, useEffect } from "react";
  ```

- Handle APIs request with either fetch API or Axios.

  In my oppinion axios is the most simple way to implement api requests alteast to me. Feel free to use any of these APIs handling tools you like.

  We are going to use two api endpoints to demonstrate how to implement API requests. [Cat facts API](https://catfact.ninja/fact) as well as [Age prediction API](https://api.agify.io/?name=james).

  ```javascript
  import axios from "axios";
  import { useState, useEffect } from "react";

  function App() {
    const [fact, setFact] = useState("");
    const [name, setName] = useState("");
    const [prediction, setPrediction] = useState(null);

    const getFact = () => {
      // fectch api implementation
      fetch("https://catfact.ninja/fact")
        .then((res) => res.json())
        .then((data) => setFact(data?.fact));

      // axios api implementation

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
  ```

  That all you need to get started. Feel free to clone the repository and use it for your own purposes.

  If you find any issue or typo, kindly feel free to raise it so we can continue to improve the documentation.
