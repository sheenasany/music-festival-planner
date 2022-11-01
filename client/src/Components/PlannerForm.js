import React, {useEffect, useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

function PlannerForm({ setNewPlan, newPlan, addNewPlanner }) {
    
    const [open, setOpen] = useState(false)

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
            <div className='container'>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
            </style>
                {/* if newPlan data exists, render elements, if not render null */}
                {newPlan ?
                <div className="festcard-header">
                    <h1>{newPlan.festival.name}</h1>
                    <h3>{newPlan.festival.date}</h3>
                <div className="info-card">
                    <img className="poster" src={newPlan.festival.lineup_poster} alt="festival poster"/>
                        <div className="info">
                            <p>Average Attendance : {newPlan.festival.average_attendance}👯</p>
                            <p>Average Ticket Price : ${newPlan.festival.average_ticket_price}</p>
                            <p>Genre : {newPlan.festival.genre}</p> 
                                <div className="festurl">
                                    <a href={newPlan.festival.link}>Festival URL</a>
                                </div>
                            </div>
                        </div>  
                    </div> : null}
        <Modal
            closeIcon
            open={open}
            trigger={<Button>Show Modal</Button>}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        >            
            {/* <div className='festform'> */}
            <Modal.Content>
            <form onSubmit={handleFormSubmit}>
            <div >
                <input 
                    placeholder="What's your budget?"
                    type="number"
                    name="budget"
                    value={budget}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>How are you getting to the festival?
                <select name="transportation" value={transportation}  onChange={handleInputChange}>
                    <option value="" name="">Select an option</option>
                   <option value="Car" name="Car">Car</option>
                   <option value="Plane" name="Plane">Plane</option>
                   <option value="Train" name="Train">Train</option>
                   <option value="Boat" name="Boat">By Sea</option>
                   <option value="Walking" name="Walking">My own two feet</option>
                </select>
                </label>
            </div>
            <div>
                <input
                    placeholder='Where are you staying?'
                    type="text"
                    name="lodging"
                    value={lodging}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <input
                    placeholder="Who are you going with?" 
                    type="text"
                    name="friends_attending"
                    value={friends_attending}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <textarea
                    placeholder="Anything else?" 
                    type="textarea"
                    rows="5"
                    name="additional_notes"
                    value={additional_notes}
                    onChange={handleInputChange}
                />
            </div>
                <button className="plannerbtn" type="submit">Add New Planner</button>
            </form>
            </Modal.Content>
        {/* </div> */}
        </Modal>
    </div>
    )
}

export default PlannerForm;