import { useContext } from "react";
import { UserContext } from "../contexts/Users";

export default function WelcomeBack() {
  const { currentUser } = useContext(UserContext);
  return (
    <div>
      <h2>Logged in</h2>
      <p>Welcome back: {currentUser.username}</p>
    </div>
  );
}
