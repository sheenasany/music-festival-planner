import React from "react";
import UpdatePlannerForm from "./UpdatePlannerForm";

function PlannerCard({ planner, planners, setPlanners }) {

    //function to handle delete
      const onDeletePlanner = (id) => {
        setPlanners(planners.filter(planner => id !== planner.id))
      }

    const handleDelete = () => {
        fetch(`/planners/${planner.id}`, {
            method: "DELETE"
        })
        onDeletePlanner(planner.id)
        alert('Planner has been successfully deleted.')

      };

    return(
      <>
            <div className="planner-list">
              <h1>{planner.festival.name}</h1>
              <h3>{planner.festival.date}</h3>
              <p>Budget: ${planner.budget}</p>
              <p>Transportation: {planner.transportation}</p>
              <p>Lodging: {planner.lodging}</p>
              <p>Friends Attending: {planner.friends_attending}</p>
              <p>Additional Notes: {planner.additional_notes}</p>
                {/* <div className="botones"> */}
                {/* updateplannerform now acts as a button for modal, shows 
                    the form instead when update planner btn is triggered */}
                  <UpdatePlannerForm planner={planner} planners={planners} setPlanners={setPlanners} /> 
                  <button className="plannerbtn" onClick={handleDelete}>Delete Planner</button>
            </div>
      </>
    )
}

export default PlannerCard;