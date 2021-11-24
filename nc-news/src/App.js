import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./contexts/Users";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Articles from "./components/Articles";
import Topics from "./components/Topics";
import Login from "./components/Login";
import WelcomeBack from "./components/WelcomeBack";
import User from "./components/User";
import ReadArticle from "./components/ReadArticle";

function App() {
  const [articles, setArticles] = useState([]);

  const [currentUser, setCurrentUser] = useState({
    username: "",
    avatar_url: "",
    name: "",
  });

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="App">
        <Header />
        <NavBar articles={articles} setArticles={setArticles} />
        <Routes>
          <Route path="/" element={<Articles articles={articles} setArticles={setArticles} />} />
          <Route path="/Topics" element={<Topics articles={articles} setArticles={setArticles} />} />
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
