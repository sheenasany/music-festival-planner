import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {FestivalsProvider} from './GlobalContext/FestivalsProvider';
import Login from './Components/Login';
import Signup from './Components/Signup';
import NavBar from './Components/NavBar';
import FestivalList from './Components/FestivalList';
import Homepage from './Components/Homepage';
import FestivalCard from './Components/FestivalCard';
import FestivalPlanner from './Components/FestivalPlanner';
import FestivalMap from './Components/FestivalMap';

function App() {


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
            <FestivalsProvider>
            <Route exact path="/festivals">
            <FestivalList/>
            </Route>
            <Route exact path="/festivals/:id">
              <FestivalCard />
            </Route>
            <Route exact path="/planners">
              <FestivalPlanner />
            </Route>
            <Route exact path="/map">
              <FestivalMap />
              </Route>
            </FestivalsProvider>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
