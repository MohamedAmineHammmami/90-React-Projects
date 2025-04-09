import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");

  const fetchJokeByXmlHttpRequest = (api) => {
    //request
    const req = new XMLHttpRequest();
    req.open("GET", api, true); //true here refer that this request will be asynchronous
    req.setRequestHeader(
      "X-Api-Key",
      "y1K8N4jnvJkEGnbqY0naig==BnpGcr1n5KW0jHZo"
    );
    req.send(); //can upload body here
    //response
    req.onreadystatechange = () => {
      if (req.readyState === 4 && req.status === 200) {
        const data = req.response;
        console.log(req);
        console.log(eval(data)[0].joke);
        setJoke(eval(data)[0].joke);
      }
    };
  };
  const fetchJokeByFetchApi = (api) => {
    fetch(api, {
      headers: { "X-Api-Key": "y1K8N4jnvJkEGnbqY0naig==BnpGcr1n5KW0jHZo" },
    })
      .then((req) => req.json())
      .then((data) => setJoke(data[0].joke))
      .catch((err) => console.log(err));
  };
  const fetchJokeByAxios = async (api) => {
    try {
      const res = await axios.get(api, {
        headers: { "X-Api-Key": "y1K8N4jnvJkEGnbqY0naig==BnpGcr1n5KW0jHZo" },
      });
      setJoke(res.data[0].joke);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="jokeContainer">
      <h1>Joke Genarator Using React And Joke API</h1>
      <button
        onClick={() =>
          /*  fetchJokeByXmlHttpRequest("https://api.api-ninjas.com/v1/jokes") */
          /*  fetchJokeByFetchApi("https://api.api-ninjas.com/v1/jokes") */
          fetchJokeByAxios("https://api.api-ninjas.com/v1/jokes")
        }
      >
        Click To Generate A New Joke.
      </button>
      <p>{joke}</p>
    </div>
  );
}

export default App;
