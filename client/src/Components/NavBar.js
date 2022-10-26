import { NavLink } from "react-router-dom";
// import { UserContext } from "../GlobalContext/UserProvider";
import React from "react";

function NavBar({user, handleLogout }) {
  // let history = useHistory();
  
  
  // calling the user context component 
  // let [user, setUser] = useContext(UserContext);

  // fetch to handle user session logout

//  debugger
  return (
    <nav>
      {/* if there is not a current user, show these links, if yes, show the logged in links */}
      {user ? (
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
          <button onClick={handleLogout}>
            Logout
          </button>
        </div> ) :
        ( <div>
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
        </div>)}
    </nav>
  );
}

export default NavBar;