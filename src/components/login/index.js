import { connect, useDispatch } from "react-redux";
import "./login.css";
import React, { useState } from "react";
import { handleLogin } from "../../redux/middleware/thunk";
import { useNavigate } from "react-router-dom";
import { images } from "../../images";

const LoginPage = ({ userReducer }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("mtsamis");
  const [password, setPassword] = useState("xyz123");

  const onChangeUserName = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleLogin(username, password));
    navigate("/home");
    // setUsername("");
    // setPassword("");
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <img className="login-img" src={images.userLogin}></img>
      <form onSubmit={handleSubmit}>
        <div>
          <h5>User</h5>
          <div className="inputUsername">
            <input
              value={username}
              onChange={onChangeUserName}
              type="text"
              name="username"
              id="username"
              placeholder="User"
            ></input>
          </div>
        </div>
        <div>
          <h5>PassWord</h5>
          <div className="inputPassword">
            <input
              value={password}
              onChange={onChangePassword}
              type="text"
              name="password"
              id="password"
              placeholder="Password"
            ></input>
          </div>
        </div>
        <button className="btnLogin" type="submit" disabled={!userReducer?.length}>
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ userReducer }) => ({
  userReducer: Object.values(userReducer)?.map((user) => user),
});

export default connect(mapStateToProps)(LoginPage);
