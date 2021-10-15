import './register.css';
import { useRef } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';

function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async e => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Password doesn't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (error) {
        console.log(error);
      }
    }

  }

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
          <form className="loginBox" onSubmit={handleClick}>
            <input 
              className="loginInput"
               type="text" 
               required 
               placeholder="Username" 
               ref={username} 
            />
            <input 
              className="loginInput"
              type="email"
              required 
              placeholder="Email" ref={email}
            />
            <input 
              className="loginInput"
              type="password"
              required
              placeholder="Password" 
              ref={password} 
            />
            <input 
              className="loginInput"
              type="password"
              minLength="5"
              required
              placeholder="Password Again"
              ref={passwordAgain}/>
            <button className="loginButton" type="submit">Sign Up</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
