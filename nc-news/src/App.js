import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./contexts/Users";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Articles from "./components/Articles";
import Login from "./components/Login";
import WelcomeBack from "./components/WelcomeBack";
import User from "./components/User";
import ReadArticle from "./components/ReadArticle";
import Topic from "./components/Topic";

function App() {
  const [articles, setArticles] = useState([]);
  const [chosenTopic, setChosenTopic] = useState("");
  const [sortBy, setSortBy] = useState("comment_count");

  const [currentUser, setCurrentUser] = useState({
    username: "tickle122",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
    name: "Tom Tickle",
  });

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="App">
        <Header />
        <NavBar
          articles={articles}
          setArticles={setArticles}
          chosenTopic={chosenTopic}
          setChosenTopic={setChosenTopic}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
        <Routes>
          <Route
            path="/"
            element={<Articles articles={articles} setArticles={setArticles} sortBy={sortBy} setSortBy={setSortBy} />}
          />

          <Route
            path="/:topic"
            element={
              <Topic
                chosenTopic={chosenTopic}
                setChosenTopic={setChosenTopic}
                sortBy={sortBy}
                setSortBy={setSortBy}
                articles={articles}
                setArticles={setArticles}
              />
            }
          />
          {/* <Route path="/coding" element={} />
          <Route path="/cooking" element={} /> */}
          <Route path="/Login" element={<Login />} />
          <Route path="/WelcomeBack" element={<WelcomeBack />} />
          <Route path="/User" element={<User />} />
          <Route path="/ReadArticle/:article_id" element={<ReadArticle />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
