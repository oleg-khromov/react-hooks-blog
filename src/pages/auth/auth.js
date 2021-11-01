import { useState, useRef, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { useFetch } from "../../hooks"

const Auth = ({ location }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const firstInputRef = useRef(null);
  const [isLogin] = useState(location.path === "/login");
  const titlePage = isLogin ? "Sign in" : "Sign up";
  const linkPage = isLogin ? "Need an account?" : "Have an account?";

  const [{ data, isLoading, error }, doFech] = useFetch("/users/login");

  const handleChangeValue = (e, cb) => {
    cb(e.target.value);
  }

  console.log(data, isLoading, error)

  const handleChangeVisiblePassword = () => {
    setIsVisiblePassword(isVisiblePassword => !isVisiblePassword);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      user: {
        email, password, name
      }
    };

    doFech("post", payload);
  }

  useEffect(() => {
    firstInputRef.current.focus();
  }, [])

  return (
    <div className="auth">
      <h1 className="text-center">{titlePage}</h1>
      <p className="text-center">
        <Link to="/registr">{linkPage}</Link>
      </p>
      <div className="row">
        <div className="col-md-6 offset-md-3 col-xs-12">
          <form onSubmit={handleSubmit}>
            { !isLogin &&
              <div className="row mb-3">
                <label htmlFor="name" className="col-12 col-form-label">
                  Name
                </label>
                <div className="col-12">
                  <input value={name} type="name" onChange={(e) => handleChangeValue(e, setName)} ref={firstInputRef} className="form-control" id="name" placeholder="Name"/>
                </div>
              </div>
            }
            <div className="row mb-3">
              <label htmlFor="email" className="col-12 col-form-label">
                Email
              </label>
              <div className="col-12">
                <input value={email} type="email" onChange={(e) => handleChangeValue(e, setEmail)} ref={!isLogin ? firstInputRef : null} className="form-control" id="email" placeholder="Email"/>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="password" className="col-12 col-form-label">
                Password
              </label>
              <div className="col-12 position-relative">
                <input value={password} type={!isVisiblePassword ? "password" : "text"} onChange={(e) => handleChangeValue(e, setPassword)} className="form-control" id="password" placeholder="Password" />
                <i className={`${isVisiblePassword ? "bi-eye" : "bi-eye-slash"} position-absolute top-50 translate-middle-y start-100`} onClick={handleChangeVisiblePassword} />
              </div>
            </div>
            <div className="row mb-0">
              <div className="col d-flex justify-content-end">
                <button type="submit" className="btn btn-primary" disabled={(!name && !email && !password) || isLoading}>
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
