import { NavLink, useHistory } from "react-router-dom";
import { UserContext } from "../GlobalContext/UserProvider";
import React, { useContext } from "react";

function NavBar() {
  let history = useHistory();
  
  // calling the user context component 
  let [user, setUser] = useContext(UserContext);

  // fetch to handle user session logout
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
            Signup
          </NavLink>
          <NavLink exact to="/festivals">
          Festivals
          </NavLink>
        </div>
      ) : (
        <div>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink exact to="/festivals">
            Festivals
          </NavLink>
          <NavLink exact to="/planner_list">
            Festival Planner
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