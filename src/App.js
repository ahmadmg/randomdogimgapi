import React, { useState, useEffect } from "react";
import "./App.css";
function refreshPage() {
  window.location.reload(false);
}
function App() {
//   Just basic Api app as a task 
  
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
    <div className="dog-div">
      <img src={dogImage} className="dog-image" alt="Dog Image" />
      <h2>File Size is : {fileSize} Bytes </h2>
      <button onClick={refreshPage}>Reload!</button>
    </div>
  );
}

export default App;
