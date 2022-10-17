import { NavLink, useHistory } from "react-router-dom";
import { UserContext } from "../GlobalContext/UserProvider";
import React, { useContext } from "react";

function NavBar() {
  let history = useHistory();
  let [user, setUser] = useContext(UserContext);

  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
    });
    setUser(null);
    history.push("/");
  };

  return (
    <nav>
      {!user ? (
        <div>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink exact to="/login">
            Login
          </NavLink>
          <NavLink exact to="/signup">
            Sign up
          </NavLink>
        </div>
      ) : (
        <div>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink onClick={handleLogout} exact to="/">
            Logout
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default NavBar;