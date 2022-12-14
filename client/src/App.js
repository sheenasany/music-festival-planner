import React, {useEffect, useState} from 'react'
import { Switch, Route } from "react-router-dom";
import Login from './Components/Login';
import Signup from './Components/Signup';
import NavBar from './Components/NavBar';
import FestivalList from './Components/FestivalList';
import Homepage from './Components/Homepage';
import FestivalCard from './Components/FestivalCard';
import FestivalMap from './Components/FestivalMap';
import PlannerForm from './Components/PlannerForm';
import PlannerList from './Components/PlannerList';
import UpdatePlannerForm from './Components/UpdatePlannerForm';

function App() {

  const [user, setUser] = useState(null)
  const [planners, setPlanners] = useState([])
  const [newPlan, setNewPlan] = useState()

  // open modal window
  const [open, setOpen] = useState(false)

  useEffect(() => {
    fetch("/me")
        .then((res) => {
            if (res.ok) {
                res.json()
        .then((user) => setUser(user))
      }
    })
  }, [])

  useEffect(() => {
    fetch('/planners')
    .then(res => res.json())
    .then(planners => setPlanners(planners))
        // debugger
    }, [user])
    // console.log(planners)

    // function to add the new planner from festival list to planner list
  const addNewPlanner = (newPlanner) => {
    // console.log(newPlanner)
    setPlanners([...planners, newPlanner])
}

  const [festivals, setFestivals] = useState([])

  useEffect(() => {
    fetch('/festivals')
      .then(res => res.json())
      .then(festivals => setFestivals(festivals))
  }, [])

  return (
    <div className="App">
        <NavBar setUser={setUser} user={user} setPlanners={setPlanners} />
          <Switch>
            <Route exact path="/">
             <Homepage />
            </ Route>
            <Route exact path="/signup">
              <Signup user={user} setUser={setUser} />
            </ Route>
            <Route exact path="/login">
              <Login  user={user} setUser={setUser} />
            </Route>
            <Route exact path="/festivals">
            <FestivalList festivals={festivals} />
            </Route>
            <Route exact path="/festivals/:id">
              <FestivalCard setPlanners={setPlanners} planners={planners} user={user} setOpen={setOpen} />
            </Route>
            <Route path="/map">
              <FestivalMap />
            </Route>
            <Route exact path="/planner_list">
              <PlannerList planners={planners} setPlanners={setPlanners} />
            </Route>
            <Route exact path="/planners/:id">
              <PlannerForm 
                setNewPlan={setNewPlan} 
                newPlan={newPlan}
                addNewPlanner={addNewPlanner}
                open={open}
                setOpen={setOpen} 
                />
            </Route>
            <Route exact path="/planner_form">
              <UpdatePlannerForm />
            </Route>
        </Switch>
    </div>
  );
}

export default App;
