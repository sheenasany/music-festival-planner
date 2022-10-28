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
          <NavLink className="home" exact to="/">
            Home
          </NavLink>
          <NavLink className="festivalnav" exact to="/festivals">
            Festivals
          </NavLink>
          <NavLink className="plannernav" exact to="/planner_list">
            Festival Planner
          </NavLink>
          {/* <div className="logout-btn" >  */}
          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
          {/* </div> */}
        </div> ) :
        ( <div>
          <NavLink className="home" exact to="/">
            Home
          </NavLink>
          <NavLink className="loginnav"exact to="/login">
            Login
          </NavLink>
          <NavLink className="signupnav" exact to="/signup">
            Signup
          </NavLink>
          <NavLink className="festivalnav" exact to="/festivals">
          Festivals
          </NavLink>
        </div>)}
    </nav>
  );
}

export default NavBar;