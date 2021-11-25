import { Link } from "react-router-dom";
import ChooseTopic from "../utils/ChooseTopic.js";
import { useContext } from "react";
import { UserContext } from "../contexts/Users";

export default function NavBar({ setArticles }) {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="nav">
      <div className="navBarLeft">
        <Link to="/" className="Nav__link">
          Trending
        </Link>
        {" | "}
        <Link to="/Topics" className="Nav__link">
          <ChooseTopic setArticles={setArticles} />
        </Link>
      </div>
      <div className="navBarRight">
        {currentUser.username === "" ? (
          <Link to="/Login" className="Nav__link">
            Login
          </Link>
        ) : (
          <Link to="/User" className="Nav__link">
            <p id="userName">{currentUser.username}</p>
            <img id="userThumbnail" src={currentUser.avatar_url} alt={`${currentUser.username} thumbnail`} />
          </Link>
        )}
      </div>
    </div>
  );
}
