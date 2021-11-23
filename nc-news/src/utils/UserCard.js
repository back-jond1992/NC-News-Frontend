import { useContext } from "react";
import { UserContext } from "../contexts/Users";

export default function UserCard({ users }) {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log(currentUser);

  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.username}>
            <h2>{user.username}</h2>

            <img src={user.avatar_url} alt={user.username} />
            <p>{user.name}</p>
            <button
              onClick={() => {
                setCurrentUser(user);
              }}
            >
              Login
            </button>
          </div>
        );
      })}
    </div>
  );
}
