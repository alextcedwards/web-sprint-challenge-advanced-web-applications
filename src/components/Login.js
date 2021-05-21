import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { push } = useHistory();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();

    if (
      credentials.username !== "Lambda School" ||
      credentials.password !== "i<3Lambd4"
    ) {
      setError("Username or Password not valid.");
    } else {
      axiosWithAuth()
        .post("/login", credentials)
        .then((res) => {
          window.localStorage.setItem("token", res.data.payload);
          push("/bubble-page");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={login}>
          <label>
            Username
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              data-testid="username"
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              data-testid="password"
            />
          </label>
          <button>Log In</button>
        </form>
      </div>
      <p data-testid="errorMessage" className="error">
        {error}
      </p>
    </div>
  );
};

export default Login;
