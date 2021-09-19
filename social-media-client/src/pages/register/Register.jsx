import './register.css';

function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">My Social</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on My Social
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input className="loginInput" type="text" placeholder="Username" />
            <input className="loginInput" type="text" placeholder="Email" />
            <input className="loginInput" type="password" placeholder="Password" />
            <input className="loginInput" type="password" placeholder="Password Again" />
            <button className="loginButton">Sign Up</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
