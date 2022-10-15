import React, { useContext } from 'react'
import { UserContext, UserProvider } from './GlobalContext/UserProvider';
import { Switch, Route } from "react-router-dom";
import Login from './Components/Login';
import Signup from './Components/Signup';
import NavBar from './Components/NavBar';

function App() {

  // const { user, setUser } = useContext(UserContext);

  return (
    <div className="App">
      <h1>Herro World!</h1>
      <Switch>
        <Route exact path="/login">
          <UserProvider>
        <Login/>
        </UserProvider>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
