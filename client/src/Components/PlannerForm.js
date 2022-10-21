import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

function PlannerForm() {

    const [planners, setPlanners] = useState([])
    const [newPlan, setNewPlan] = useState({})
    const [formData, setFormData] = useState({
        budget: "",
        transportation: "",
        lodging: "",
        friends_attending: "",
        additional_notes: ""
    })

    useEffect(() => {
        fetch('/planners')
        .then(res => res.json())
        .then(planners => setPlanners(planners))
            // debugger
        }, [])

    let {id} = useParams()

    useEffect(() => {
        fetch(`/planners/${id}`)
        .then(res => res.json())
        .then(planner => setNewPlan(planner))
            // debugger
        }, [])
        
        const addNewPlanner = (newPlanner) => {
            setPlanners([...planners, newPlanner])
          }
        
    const handleFormSubmit = (e) => {
    e.preventDefault()
            fetch(`/planners/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({formData})
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
    }

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    return(
        <div>
            Planner form goes here
            
            <label>Add A New Planner</label>
            <br/>
            <form onSubmit={handleFormSubmit}>
            <div>
                <label>What's your budget?</label>
                <input 
                    type="number"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>How are you getting to the festival?</label>
                <select name="transportation" value={formData.transportation}  onChange={(e) => handleInputChange(e)}>
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
                    value={formData.lodging}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Who are you going with?</label>
                <input 
                    type="text"
                    name="friends_attending"
                    value={formData.friends_attending}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Anything else?</label>
                <input 
                    type="textarea"
                    name="additional_notes"
                    value={formData.additional_notes}
                    onChange={handleInputChange}
                />
            </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PlannerForm;