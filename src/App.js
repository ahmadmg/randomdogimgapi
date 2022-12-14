import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  let [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    fetch("https://random.dog/woof.json")
      .then((response) => response.json())
      .then((result) => setDogImage(result.url));
  }, []);
  return (
    <div>
      <img src={dogImage} />
    </div>
  );
}

export default App;
