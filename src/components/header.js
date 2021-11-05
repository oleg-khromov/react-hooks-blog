import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CurrentUserContext } from "../contexts/currentUser";

const Header = () => {
  const [{ isLoggedIn, currentUser }] = useContext(CurrentUserContext);

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
            {isLoggedIn === false && (
              <>
                <NavLink to="/login" className="nav-link">
                  SignIn
                </NavLink>
                <NavLink to="/registr" className="nav-link">
                  SignUp
                </NavLink>
              </>
            )}
            {isLoggedIn && (
              <>
                <NavLink to="/articles/new" className="nav-link">
                  <i className="plus" />
                  &nbsp; Add post
                </NavLink>
                <NavLink
                  to={`/profile/${currentUser.username}}`}
                  className="nav-link"
                >
                  <img src={currentUser.image} className="user-pic" />
                  &nbsp; {currentUser.username}
                </NavLink>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
