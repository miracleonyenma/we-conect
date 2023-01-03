import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/auth.css";

export default function SignUp() {
  // Remove the page navigation from the signup page
  useEffect(() => {
    const pageNav = document.getElementById("pageNav");
    pageNav.style.display = "none";
  }, []);

  return (
    <section className="auth-section">
      {/* <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign up</h3>
        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Usernames"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="Password"
          />
          <input
            type="text"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
          />
        </div>

        <div>
          <span style={{fontSize: '12px'}}>Already have an account. <Link to='/login'>Login</Link></span>
        </div>
        <button className="button infoButton" type="submit">Signup</button>
      </form>
    </div> */}

      <div className="auth-section__wrapper">
        <header className="auth-header">
          <h1>Sign Up</h1>
        </header>
        <div className="form-cont">
          <form className="auth-form">
            <div className="form__wrapper">
              <div className="form-group">
                <div className="form-control">
                  <label htmlFor="name">Name</label>
                  <input
                    className="infoInput"
                    name="name"
                    placeholder="name"
                    type="text"
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="firstname">Username</label>
                  <input
                    className="infoInput"
                    name="username"
                    placeholder="Username"
                    type="text"
                  />
                </div>
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
              <div className="form-control">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  className="infoInput"
                  name="confirm-password"
                  placeholder="confirm-password"
                  type="text"
                />
              </div>
              <div className="action-cont">
                <button className="button">Create account</button>
              </div>
            </div>
          </form>
        </div>
        <div className="info-cont">
          <p>
            Have an account? <Link to='/login'>Log in</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
