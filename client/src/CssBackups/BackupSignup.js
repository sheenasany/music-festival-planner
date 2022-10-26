import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../GlobalContext/UserProvider";

function BackupSignup() {
  let [user, setUser] = useContext(UserContext)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    let user = {
      username: username,
      password: password,
    };

    setIsLoading(true);

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
    .then((res) => {
      setIsLoading(false);
      if (res.ok) {
        res.json()
        .then((user) => setUser(user));
        history.push("/");
      } else {
        res.json()
        .then((data) => setError(Object.values(data).join()));
      }
    });
  }

  // handles show password change
  function handleShowPassword() {
    let x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  return (
    <div>
      <h3>Signup</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label>
              Username
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </label>
          </div>
        </div>
        <div>
          <label>
            Password
            <input
              id="myInput"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </label>
        </div>
        <div>
          <div>
            <div>
              <input type="checkbox" onClick={handleShowPassword} />
              <label>Show Password</label>
            </div>
          </div>
        </div>
        <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
      </form>
      {error ? <div>{error}</div> : null}
      <div>
        <p>Already registered?</p>
        <a href="/login">Log In</a>
      </div>
    </div>
  );
}

export default BackupSignup;