import { useContext } from "react";
import { UserContext } from "../contexts/Users";
import { Link } from "react-router-dom";

export default function UserCard({ users }) {
  const { setCurrentUser } = useContext(UserContext);

  return (
    <>
      {users.map((user) => {
        return (
          <div className="userCard" key={user.username}>
            <h2>{user.username}</h2>
            <img className="userImage" src={user.avatar_url} alt={user.username} />
            <p>{user.name}</p>
            <Link to="/WelcomeBack">
              <button
                onClick={() => {
                  setCurrentUser(user);
                }}
              >
                Login
              </button>
            </Link>
          </div>
        );
      })}
    </>
  );
}
