import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="navbar navbar-expand-lg justify-content-between">
          <Link to="/" className="navbar-brand">
            MEDIUM
          </Link>
          <nav className="navbar-nav">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/login" className="nav-link">
              SignIn
            </NavLink>
            <NavLink to="/registr" className="nav-link">
              SignUp
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
