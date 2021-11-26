import { Link } from "react-router-dom";
import ChooseTopic from "../utils/ChooseTopic.js";
import { useContext } from "react";
import { UserContext } from "../contexts/Users";

export default function NavBar({ setArticles, chosenTopic, setChosenTopic, sortBy, setSortBy }) {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="nav">
      {/* <div className="navBarLeft"> */}
      <Link to="/" className="Nav__link_left">
        Trending
      </Link>
      {" | "}
      <Link to="/Topics" className="Nav__link_left">
        <ChooseTopic
          chosenTopic={chosenTopic}
          setChosenTopic={setChosenTopic}
          sortBy={sortBy}
          setSortBy={setSortBy}
          setArticles={setArticles}
        />
      </Link>
      {/* </div> */}
      {/* <div className="navBarRight"> */}
      {currentUser.username === "" ? (
        <Link to="/Login" className="Nav__link_right">
          Login
        </Link>
      ) : (
        <Link to="/User" className="Nav__link_right">
          <img id="userThumbnail" src={currentUser.avatar_url} alt={`${currentUser.username} thumbnail`} />
        </Link>
      )}
      {/* </div> */}
    </div>
  );
}
