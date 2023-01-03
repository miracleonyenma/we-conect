import { Link } from 'react-router-dom'
import '../styles/auth.css'

export default function SignUp() {

  return (
    <div className="a-right">
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
    </div>
  );

}
