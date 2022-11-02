import { NavLink, useHistory } from "react-router-dom";
import React from "react";

function NavBar({user, setUser, setPlanners, }) {
  let history = useHistory();
  
  // fetch to handle user session logout
  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
    })
      .then(res => {
        if (res.ok) {
          setUser(null);
          setPlanners([])
          
          history.push("/")
        }
      })
    // debugger
  }

  return (
    <nav>
      {/* if there is not a current user, show these links, if yes, show the logged in links */}
      {user ? (
        <div className="navie">
          <NavLink className="home" exact to="/">
            Home
          </NavLink>
          <NavLink className="festivalnav" exact to="/festivals">
            Festivals
          </NavLink>
          <NavLink className="plannernav" exact to="/planner_list">
            Festival Planner
          </NavLink>
          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        </div> ) :
        ( <div className="navie">
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