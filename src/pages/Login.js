import { Link } from "react-router-dom";
import '../styles/auth.css'

export default function Login() {

  return (
    <div className="a-right">
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
    </div>
  );
}
