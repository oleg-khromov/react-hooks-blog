import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div className="auth">
      <h1 className="text-center">Login</h1>
      <p className="text-center">
        <Link to="/registr">Registr</Link>
      </p>
      <div className="row justify-content-center">
        <div className="col col-md-6">
          <form>
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-12 col-form-label">
                Email
              </label>
              <div className="col-12">
                <input type="email" className="form-control" id="email" />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="password" className="col-12 col-form-label">
                Password
              </label>
              <div className="col-12">
                <input type="password" className="form-control" id="password" />
              </div>
            </div>
            <div className="row mb-0">
              <div className="col d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
