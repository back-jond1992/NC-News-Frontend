import { useContext } from "react";
import { UserContext } from "../contexts/Users";
import { Link } from "react-router-dom";

export default function WelcomeBack() {
  const { currentUser } = useContext(UserContext);
  return currentUser.username === "" ? (
    <Link to="/Login">Login</Link>
  ) : (
    <div className="welcomeBack">
      <h2>Logged in</h2>
      <p>Welcome back: {currentUser.username}</p>
    </div>
  );
}
