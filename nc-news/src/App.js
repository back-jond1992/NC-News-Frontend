import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Articles from "./components/Articles";

function App() {
  const [chosenTopic, setChosenTopic] = useState("");

  return (
    <div className="App">
      <Header />
      <NavBar chosenTopic={chosenTopic} setChosenTopic={setChosenTopic} />
      <Routes>
        <Route path="/" element={<Articles />} />
        {/* <Route path="/:topics" element={<Topics />} /> */}
      </Routes>
    </div>
  );
}

export default App;
