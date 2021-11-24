import { useEffect, useState } from "react";
import { getAllUsers } from "../API/api";
import UserCard from "../utils/UserCard";
import { useContext } from "react";
import { UserContext } from "../contexts/Users";
import WelcomeBack from "./WelcomeBack";

export default function Login() {
  const { currentUser } = useContext(UserContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((response) => {
      setUsers(response);
    });
  }, []);

  return <div className="loginPage">{currentUser.username === "" ? <UserCard users={users} /> : <WelcomeBack />}</div>;
}
