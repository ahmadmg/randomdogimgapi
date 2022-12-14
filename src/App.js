import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  let [dogImage, setDogImage] = useState(null);
  let [fileSize, setfileSize] = useState(0);
  useEffect(() => {
    fetch("https://random.dog/woof.json")
      .then((response) => response.json())
      .then((result) => {
        setDogImage(result.url);
        setfileSize(result.fileSizeBytes);
      });
  }, []);
  return (
    <div>
      <img src={dogImage} className="dog-image" />
      <h2>The File Size is : {fileSize} Bytes </h2>
    </div>
  );
}

export default App;
