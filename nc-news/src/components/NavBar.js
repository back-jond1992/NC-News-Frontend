import { Link } from "react-router-dom";
import { useState, useEffect, useParams } from "react";
import { getArticlesByTopic } from "../API/api";
import ChooseTopic from "../utils/ChooseTopic.js";

export default function NavBar({ chosenTopic, setChosenTopic }) {
  return (
    <div className="nav">
      <div className="navBarLeft">
        <Link to="/" className="Nav__link">
          Home
        </Link>
        <ChooseTopic chosenTopic={chosenTopic} setChosenTopic={setChosenTopic} />
      </div>
      <div className="navBarRight">
        <Link to="/Login" className="Nav__link">
          Login
        </Link>
        <Link to="/User" className="Nav__link">
          User
        </Link>
      </div>
    </div>
  );
}
