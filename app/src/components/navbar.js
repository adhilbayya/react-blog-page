import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
      <h1 className="header-title">The Page</h1>
      <div className="links">
        <Link className="home" to="/">
          Home
        </Link>
        <Link className="contact" to="/create">
          New Blog
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
