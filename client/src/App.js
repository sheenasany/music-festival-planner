import React, {useEffect, useState} from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {FestivalsProvider} from './GlobalContext/FestivalsProvider';
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

  const [planners, setPlanners] = useState([])
  const [newPlan, setNewPlan] = useState()

  useEffect(() => {
    fetch('/planners')
    .then(res => res.json())
    .then(planners => setPlanners(planners))
        // debugger
    }, [])
    // console.log(planners)

    // function to add the new planner from festival list to planner list
  const addNewPlanner = (newPlanner) => {
    console.log(newPlanner)
    setPlanners([...planners, newPlanner])
}

// function to update the planner in update planner form
// const onUpdatePlanner = (updatedPlanner) => {
//   const updatePlanner = planners.map(originalPlanner => originalPlanner.id === updatedPlanner.id ? updatedPlanner : originalPlanner)
//   setPlanners(updatePlanner)
// }

// const onUpdatePlanner = (updatedPlanner) => {
//   setPlanners(planners => planners.map(originalPlanner => {
//     if (originalPlanner.id === updatedPlanner.id) {
//       return updatedPlanner;
//     } else {
//       return originalPlanner;
//     }
//   }))
// };

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
              <FestivalCard setPlanners={setPlanners} planners={planners} />
            </Route>
            <Route exact path="/map">
              <FestivalMap />
            </Route>
            <Route exact path="/planner_list">
              <PlannerList planners={planners} setPlanners={setPlanners} />
            </Route>
            <Route exact path="/planners/:id">
              <PlannerForm 
                setNewPlan={setNewPlan} 
                newPlan={newPlan}
                addNewPlanner={addNewPlanner} />
            </Route>
            <Route exact path="/planner_form">
              <UpdatePlannerForm />
            </Route>
          </FestivalsProvider>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
