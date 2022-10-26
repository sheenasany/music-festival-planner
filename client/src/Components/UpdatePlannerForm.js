import React, {useState} from 'react';

function UpdatePlannerForm({ setPlanners, planner, handleUpdateToggle }) {
    
    // declaring the initial state of the form fields
    const initialState = {
        budget: planner.budget,
        transportation: planner.transportation,
        lodging: planner.lodging,
        friends_attending: planner.friends_attending,
        additional_notes: planner.additional_notes
    };
    
    // setting up formData to the initial state and setting up the value of each input field
    const [formData, setFormData] = useState(initialState);
    const { budget, transportation, lodging, friends_attending, additional_notes } = formData;
    
    //   function to update the planner in update planner form
    const onUpdatePlanner = (updatedPlanner) => {
      setPlanners(planners => planners.map(planner => {
        if (planner.id === updatedPlanner.id) {
          return updatedPlanner;
        } else {
          return planner;
        }
      }))
    };

    // handling the user input on change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({ ...formData, [name]: value }));
    };
    
// second patch request to update planner form
const handleUpdateSubmit = (e) => {
    e.preventDefault()
    fetch(`/planners/${planner.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
          body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => onUpdatePlanner(data))

        // reverts form back to list view        
        handleUpdateToggle()
  }

    return(
        <div>
            Planner form goes here
            <br/>
            <label>Add A New Planner</label>
            <br/>
            <form onSubmit={handleUpdateSubmit}>
            <div>
                <label>What's your budget?</label>
                <input 
                    type="number"
                    name="budget"
                    value={budget}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>How are you getting to the festival?</label>
                <select name="transportation" value={transportation}  onChange={handleChange}>
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
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Who are you going with?</label>
                <input 
                    type="text"
                    name="friends_attending"
                    value={friends_attending}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Anything else?</label>
                <input 
                    type="textarea"
                    name="additional_notes"
                    value={additional_notes}
                    onChange={handleChange}
                />
            </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UpdatePlannerForm;