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
      <>
        {isUpdating ? 
          <UpdatePlannerForm planner={planner} planners={planners} setPlanners={setPlanners} handleUpdateToggle={handleUpdateToggle}  /> : 
            <div className="planner-list">
              <h1>{planner.festival.name}</h1>
              <h3>{planner.festival.date}</h3>
              <p>Budget: ${planner.budget}</p>
              <p>Transportation: {planner.transportation}</p>
              <p>Lodging: {planner.lodging}</p>
              <p>Friends Attending: {planner.friends_attending}</p>
              <p>Additional Notes: {planner.additional_notes}</p>
                <div className="botones">
                  <button className="plannerbtn" onClick={handleUpdateToggle}>Update Planner</button>
                  <button className="plannerbtn" onClick={handleDelete}>Delete Planner</button>
                </div>
            </div>}
      </>
    )
}

export default PlannerCard;