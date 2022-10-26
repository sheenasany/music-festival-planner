import React, {useEffect, useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';

function PlannerForm({ setNewPlan, newPlan, addNewPlanner }) {
    
    let {id} = useParams()
    let history = useHistory()

    // create variable for the initial state of the input fields    
    const initialState = {
        budget: "",
        transportation: "",
        lodging: "",
        friends_attending: "",
        additional_notes: ""
    };
    
    // set the initial state for formData fields
    const [formData, setFormData] = useState(initialState)
    // declare the value of the form fields
    const { budget, transportation, lodging, friends_attending, additional_notes } = formData;

    // fetch the individual newly created planner
    useEffect(() => {
      fetch(`/planners/${id}`)
      .then(res => res.json())
      .then(planner => setNewPlan(planner))
      // debugger
  }, [])
        
        // first patch request for user to "create" planner form after the post request to join user and festival  
        const handleFormSubmit = (e) => {
              e.preventDefault()
            //   debugger
              fetch(`/planners/${id}`, {
                  method: 'PATCH',
                  headers: {
                      'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(res => res.json())
            .then(data => addNewPlanner(data))

            setFormData(initialState)

            history.push(`/planner_list`)
           
        }
        
        const handleInputChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value })
        }
        
        return(
            <div>
            <div>
                {/* if newPlan data exists, render elements, if not render null */}
                {newPlan ?
                <div>
                <h1>{newPlan.festival.name}</h1>
                <h3>{newPlan.festival.date}</h3>
                <img src={newPlan.festival.lineup_poster} alt="festival poster"/>
                <li>Average Attendance : {newPlan.festival.average_attendance}👯</li>
                <li>Average Ticket Price : ${newPlan.festival.average_ticket_price}</li>
                <li><a href={newPlan.festival.link}>Festival URL</a></li>
                <li>Genre : {newPlan.festival.genre}</li> 
                </div> : null}
            </div>
            <br/>
            <label>Add A New Planner</label>
            <br/>
            <form onSubmit={handleFormSubmit}>
            <div>
                <label>What's your budget?</label>
                <input 
                    type="number"
                    name="budget"
                    value={budget}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>How are you getting to the festival?</label>
                <select name="transportation" value={transportation}  onChange={handleInputChange}>
                    <option value="" name="">Select an option</option>
                   <option value="Car" name="Car">Car</option>
                   <option value="Plane" name="Plane">Plane</option>
                   <option value="Train" name="Train">Train</option>
                   <option value="Boat" name="Boat">By Sea</option>
                   <option value="Walking" name="Walking">My own two feet</option>
                </select>
            </div>
            <div>
                <label>Where are you staying?</label>
                <input 
                    type="text"
                    name="lodging"
                    value={lodging}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Who are you going with?</label>
                <input 
                    type="text"
                    name="friends_attending"
                    value={friends_attending}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Anything else?</label>
                <input 
                    type="textarea"
                    name="additional_notes"
                    value={additional_notes}
                    onChange={handleInputChange}
                />
            </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PlannerForm;