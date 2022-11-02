import React from 'react';
import PlannerCard from './PlannerCard'

function PlannerList({ planners, setPlanners }){

    // console.log(planners)
        const plannersArray = planners.map(planner => {
            return (<PlannerCard key={planner.id} planner={planner} planners={planners} setPlanners={setPlanners} />)
    })
  
    return(
        <div >
        <div className="planner-header">
          <h1>Planner List</h1>
        </div>
        <div className='planner-card'>
            {/* if planners exists, render plannersArray, if not then render null */}
            {planners !== [] ? plannersArray : null}
        </div>
        </div>
    )
}

export default PlannerList;