import { useState, useRef, useEffect, useContext } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import { useFetch, useLocalStorage } from "../../hooks";
import { CurrentUserContext } from "../../contexts/currentUser";

const Auth = ({ location }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const firstInputRef = useRef(null);
  const isLogin = location.pathname === "/login";
  const pageTitle = isLogin ? "Sign in" : "Sign up";
  const descriptionText = isLogin ? "Need an account?" : "Have an account?";
  const descriptionLink = isLogin ? "/registr" : "/login";
  const apiUrl = isLogin ? "/users/login" : "/users";

  const [{ data, isLoading, error }, doFech] = useFetch(apiUrl);
  const [token, setToken] = useLocalStorage("token");

  const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false);

  const [currentUserState, setCurrentUserState] =
    useContext(CurrentUserContext);

  const handleChangeValue = (e, cb) => {
    cb(e.target.value);
  };

  const handleChangeVisiblePassword = () => {
    setIsVisiblePassword((isVisiblePassword) => !isVisiblePassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = isLogin ? { email, password } : { email, password, username };
    const payload = { user };
    doFech("post", payload);
  };

  useEffect(() => {
    firstInputRef.current?.focus();

    setEmail("");
    setPassword("");
    setUsername("");
  }, [isLogin]);

  useEffect(() => {
    if (!data) {
      return;
    }

    setToken(data.user.token);
    setCurrentUserState((state) => ({
      ...state,
      isLoading: true,
      isLoggedIn: false,
      currentUser: data.user,
    }));
    setIsSuccessfullSubmit((isSuccessfullSubmit) => !isSuccessfullSubmit);
  }, [data, setToken, setUser]);

  if (isSuccessfullSubmit) {
    return <Redirect to="/" />;
  }

  return (
    <div className="auth">
      <h1 className="text-center">{pageTitle}</h1>
      <p className="text-center">
        <Link to={descriptionLink}>{descriptionText}</Link>
      </p>
      <div className="row">
        <div className="col-md-6 offset-md-3 col-xs-12">
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="row mb-3">
                <label htmlFor="username" className="col-12 col-form-label">
                  Username
                </label>
                <div className="col-12">
                  <input
                    value={username}
                    type="text"
                    onChange={(e) => handleChangeValue(e, setUsername)}
                    ref={firstInputRef}
                    className="form-control"
                    id="username"
                    placeholder="Username"
                  />
                </div>
              </div>
            )}
            <div className="row mb-3">
              <label htmlFor="email" className="col-12 col-form-label">
                Email
              </label>
              <div className="col-12">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => handleChangeValue(e, setEmail)}
                  ref={isLogin ? firstInputRef : null}
                  className="form-control"
                  id="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="password" className="col-12 col-form-label">
                Password
              </label>
              <div className="col-12 position-relative">
                <input
                  value={password}
                  type={!isVisiblePassword ? "password" : "text"}
                  onChange={(e) => handleChangeValue(e, setPassword)}
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
                <i
                  className={`${
                    isVisiblePassword ? "bi-eye" : "bi-eye-slash"
                  } position-absolute top-50 translate-middle-y start-100`}
                  onClick={handleChangeVisiblePassword}
                />
              </div>
            </div>
            <div className="row mb-0">
              <div className="col d-flex justify-content-end">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!username || !email || !password || isLoading}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Auth);
