import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import PhotoOfDay from "./components/PhotoOfDay";

const API_KEY = "aa12uDcfzcLRbx4tKCEQLskxneMoNacEGk2pfVnd"
function App() {
  const [photoOfDay, setphotoOfDay] = useState(null);
  const [date, setdate] = useState(new Date().toISOString().split("T")[0]);
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?", {
        params:{api_key: API_KEY, date:date}
       } )
      .then((res) => {
        console.log("Nasadan veriyi aldik", res);
        setphotoOfDay(res.data);
      });
  }, [date]);

  return (
    <div className="App">
      <input type="date" onChange={(e) => setdate(e.target.value)}/>

      <p>
        <span></span>
      </p>
      <PhotoOfDay photoOfDay={photoOfDay} />
    </div>
  );
}

export default App;
