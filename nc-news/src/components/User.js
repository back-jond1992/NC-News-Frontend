import { useContext } from "react";
import { UserContext } from "../contexts/Users";
import { Link } from "react-router-dom";

export default function User() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  return currentUser.username === "" ? (
    <Link to="/Login">Login</Link>
  ) : (
    <>
      <div>
        <h2>You are logged in as:</h2>
        <p>{currentUser.username}</p>
        <img className="userImage" src={currentUser.avatar_url} alt={currentUser.username} />
      </div>
      <div className="userCard">
        <button
          onClick={() => {
            setCurrentUser({
              username: "",
              avatar_url: "",
              name: "",
            });
          }}
        >
          Log out
        </button>
      </div>
    </>
  );
}
