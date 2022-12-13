import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  let [coffeeImage, setCoffeeImage] = useState("");

  useEffect(() => {
    fetch("https://coffee.alexflipnote.dev/random.json")
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => setCoffeeImage(data.message));
  }, []);
  console.log(coffeeImage);
  return <div className="App">{<img src={coffeeImage}></img>}</div>;
}

export default App;
