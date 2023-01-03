import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/auth.css";

export default function Login() {
  // Remove the page navigation from the login page
  useEffect(() => {
    const pageNav = document.getElementById("pageNav");
    pageNav.style.display = "none";
  }, []);

  return (
    <section className="auth-section">
      {/* <div className="a-right">
      <form className="infoForm authForm">
        <h3>Log In</h3>

        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            placeholder="Password"
            name="password"
          />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>
            Don't have an account <Link to='/signup'>SignUp</Link>

          </span>
          <button className="button infoButton">
            Login
          </button>
        </div>
      </form>
    </div> */}

      <div className="auth-section__wrapper">
        <header className="auth-header">
          <h1>Log In</h1>
        </header>
        <div className="form-cont">
          <form className="auth-form">
            <div className="form__wrapper">
              <div className="form-control">
                <label htmlFor="firstname">Username</label>
                <input
                  className="infoInput"
                  name="username"
                  placeholder="Username"
                  type="text"
                />
              </div>

              <div className="form-control">
                <label htmlFor="password">Password</label>
                <input
                  className="infoInput"
                  name="password"
                  placeholder="password"
                  type="text"
                />
              </div>

              <div className="action-cont">
                <button className="button">Log in</button>
              </div>
            </div>
          </form>
        </div>
        <div className="info-cont">
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
