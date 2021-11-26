import { useEffect, useState } from "react";
import { getAllUsers } from "../API/api";
import UserCard from "../utils/UserCard";
import { useContext } from "react";
import { UserContext } from "../contexts/Users";
import WelcomeBack from "./WelcomeBack";

export default function Login() {
  const [isLoading, setIsLoading] = useState(true);
  const { currentUser } = useContext(UserContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getAllUsers().then((response) => {
      setUsers(response);
      setIsLoading(false);
    });
  }, []);

  return !!isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="loginPage">{currentUser.username === "" ? <UserCard users={users} /> : <WelcomeBack />}</div>
  );
}
