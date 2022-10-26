import React, { useState } from "react";
import UpdatePlannerForm from "./UpdatePlannerForm";

function PlannerCard({ planner, planners, setPlanners }) {

    const [isUpdating, setIsUpdating] = useState(false)

    // function to handle update form toggle 
    const handleUpdateToggle = () => {
        setIsUpdating(!isUpdating);
    }

    //function to handle delete
      const onDeletePlanner = (id) => {
        setPlanners(planners.filter(planner => id !== planner.id))
      }

    const handleDelete = () => {
        fetch(`/planners/${planner.id}`, {
            method: "DELETE"
        })
        onDeletePlanner(planner.id)
      };

    // debugger
    return(
        <div className="planner-list">
            {isUpdating ? 
            <UpdatePlannerForm planner={planner} planners={planners} setPlanners={setPlanners} handleUpdateToggle={handleUpdateToggle} /> : 
            <div>
             <h1>{planner.festival.name} || {planner.festival.date}</h1>
             <li>Budget: ${planner.budget}</li>
             <li>Transportation: {planner.transportation}</li>
             <li>Lodging: {planner.lodging}</li>
             <li>Friends Attending: {planner.friends_attending}</li>
             <li>Additional Notes: {planner.additional_notes}</li>
             <button onClick={handleUpdateToggle}>Update Planner</button>
             <button onClick={handleDelete}>Delete Planner</button>
             </div>}
        </div>
    )
}

export default PlannerCard;