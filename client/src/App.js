import React from 'react'
// import { UserContext, UserProvider } from './GlobalContext/UserProvider';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './Components/Login';
import Signup from './Components/Signup';
import NavBar from './Components/NavBar';
import Festival from './Components/FestivalList';
import Homepage from './Components/Homepage';

function App() {

  // const { user, setUser } = useContext(UserContext);

  return (
    <div className="App">
      <h1>Herro World!</h1>
      <BrowserRouter>
        <NavBar  />
          <Switch>
            <Route exact path="/">
             <Homepage />
            </ Route>
            <Route exact path="/signup">
              <Signup />
            </ Route>
            <Route exact path="/login">
              <Login  />
            </Route>
            <Route exact path="/festivals">
            <Festival />
            </Route>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
