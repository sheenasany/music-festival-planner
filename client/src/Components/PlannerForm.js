import React, {useEffect, useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { 
    Form,
    Input,
    TextArea, 
    Modal } from 'semantic-ui-react'

function PlannerForm({ setNewPlan, newPlan, addNewPlanner, setOpen, open }) {
    
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
            <>
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
            onClose={() => setOpen(false)}
        >            
            <Modal.Content>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Field
                        control={Input}
                        label="What's your budget?"
                        placeholder="Budget"
                        type="number"
                        name="budget"
                        value={budget}
                        onChange={handleInputChange}
                    />
                    <Form.Field>
                        <label>How are you getting there?</label>
                        <select name="transportation" value={transportation}  onChange={handleInputChange}>
                            <option></option>
                            <option value="Car" name="Car">Car</option>
                            <option value="Plane" name="Plane">Plane</option>
                            <option value="Train" name="Train">Train</option>
                            <option value="Boat" name="Boat">By Sea</option>
                            <option value="Walking" name="Walking">My own two feet</option>
                        </select>
                    </Form.Field>
                    <Form.Field
                        control={Input}
                        label="Where are you staying?"
                        placeholder="Lodging"
                        name="lodging"
                        value={lodging}
                        onChange={handleInputChange}
                    />
                    <Form.Field
                        control={Input}
                        label="Who are you going with?"
                        placeholder="People attending"
                        name="friends_attending"
                        value={friends_attending}
                        onChange={handleInputChange}
                    />
                    <Form.Field
                    control={TextArea}
                    label="Anything else?"
                    placeholder="Fill to your heart's content..."
                    name="additional_notes"
                    value={additional_notes}
                    onChange={handleInputChange}
                    />
                <button className="plannerbtn" type="submit">Add New Planner</button>
                </Form>
            </Modal.Content>
        </Modal>
    </>
    )
}

export default PlannerForm;