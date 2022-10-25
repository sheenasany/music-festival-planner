import React, {useEffect, useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
// import PlannerCard from './PlannerCard';

function PlannerForm({ setNewPlan, newPlan, addNewPlanner }) {

    // const [showFestCard, setShowFestCard] = useState(false)
    
    const initialState = {
        budget: "",
        transportation: "",
        lodging: "",
        friends_attending: "",
        additional_notes: ""
    };
    
    const [formData, setFormData] = useState(initialState)
    const { budget, transportation, lodging, friends_attending, additional_notes } = formData;

    useEffect(() => {
      fetch(`/planners/${id}`)
      .then(res => res.json())
      .then(planner => setNewPlan(planner))
      // debugger
  }, [])
    
        let {id} = useParams()
        let history = useHistory()
        
        const handleFormSubmit = (e) => {
              e.preventDefault()
              debugger
              fetch(`/planners/${id}`, {
                  method: 'PATCH',
                  headers: {
                      'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(res => res.json())
            .then(data => addNewPlanner(data))

            setFormData({
                budget: "",
                transportation: "",
                lodging: "",
                friends_attending: "",
                additional_notes: ""
            })

            history.push(`/planner_list`)
            // setShowFestCard(showFestCard => !showFestCard)
        }
        
        const handleInputChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value })
        }
        
        //   console.log(newPlan)
        // debugger
        
        return(
            <div>
            <div>
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
            Planner form goes here
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
                <select name="transportation" value={transportation}  onChange={(e) => handleInputChange(e)}>
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