import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/Users";

const topics = ["coding", "football", "cooking"];

export default function NavBar({ setArticles, chosenTopic, setChosenTopic, sortBy, setSortBy }) {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="nav">
      <div className="navBarLeft">
        <Link
          to="/"
          className="Nav__link"
          onClick={() => {
            setSortBy("comment_count");
          }}
        >
          Trending
        </Link>
        {" | "}
        <>
          {topics.map((topic) => {
            return (
              <Link to={`/${topic}`} key={topic} className="Nav__link">
                <> {topic} </> {" | "}
              </Link>
            );
          })}
        </>
      </div>
      <div className="navBarRight">
        {currentUser.username === "" ? (
          <Link to="/Login" className="Nav__link">
            Login
          </Link>
        ) : (
          <Link to="/User" className="Nav__link">
            <img id="userThumbnail" src={currentUser.avatar_url} alt={`${currentUser.username} thumbnail`} />
          </Link>
        )}
      </div>
    </div>
  );
}
