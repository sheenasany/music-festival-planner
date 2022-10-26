import React from 'react';
import PlannerCard from './PlannerCard'

function PlannerList({ planners, setPlanners }){

    // console.log(planners)
        const plannersArray = planners.map(planner => {
            return (<PlannerCard key={planner.id} planner={planner} planners={planners} setPlanners={setPlanners} />)
    })
  
    return(
        <div>
            {/* if planners exists, render plannersArray, if not then render null */}
            {planners !== [] ? plannersArray : null}
        </div>
    )
}

export default PlannerList;