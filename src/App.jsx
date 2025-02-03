import React, { useEffect } from "react";
import Stopwatch from "./stopwatch";

function App() {
  useEffect(() => {
    document.title = "Stopwatch";

    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href = "/file.svg"; 
    } else {
      const newFavicon = document.createElement("link");
      newFavicon.rel = "icon";
      newFavicon.href = "/file.svg"; 
      document.head.appendChild(newFavicon);
    }
  }, []);

  return (
    <div className="App">
      <Stopwatch />
    </div>
  );
}

export default App;
