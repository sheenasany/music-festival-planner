import React from 'react';
import PlannerCard from './PlannerCard'

function PlannerList({ planners, setPlanners }){

        // console.log(planners)
        const plannersArray = planners.map(planner => {
            return (<PlannerCard key={planner.id} planner={planner} planners={planners} setPlanners={setPlanners} />)
    })
    // console.log(plannersArray)

    return(
        <div>
            {plannersArray}
        </div>
    )
}

export default PlannerList;