import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav">
      <div className="navBarLeft">
        <Link to="/" className="Nav__link">
          Home
        </Link>
        <Link to="/ArticlesByTopics" className="Nav__link">
          Topics
        </Link>
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
