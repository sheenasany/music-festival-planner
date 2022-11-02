// import { integerPropType } from '@mui/utils';
import React, {useState} from 'react';
import { 
    Form,
    Input,
    TextArea, 
    Modal } from 'semantic-ui-react'

function UpdatePlannerForm({ setPlanners, planner }) {

    // handles modal open/close functionality
    const [open, setOpen] = useState(false)

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
        // handleUpdateToggle()
        setOpen(false)
        alert('Your planner has been updated successfully.')
    }


    return(
        <Modal
            closeIcon
            open={open}
            trigger={
                <button className="plannerbtn-update">Update Planner</button>}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        >            
            <Modal.Content>
                <Form onSubmit={handleUpdateSubmit}>
                    <Form.Field
                        control={Input}
                        label="What's your budget?"
                        placeholder="Budget"
                        type="number"
                        name="budget"
                        value={budget}
                        onChange={handleChange}
                    />
                    <Form.Field>
                        <label>How are you getting there?</label>
                        <select name="transportation" value={transportation}  onChange={handleChange}>
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
                        onChange={handleChange}
                    />
                    <Form.Field
                        control={Input}
                        label="Who are you going with?"
                        placeholder="People attending"
                        name="friends_attending"
                        value={friends_attending}
                        onChange={handleChange}
                    />
                    <Form.Field
                    control={TextArea}
                    label="Anything else?"
                    placeholder="Fill to your heart's content..."
                    name="additional_notes"
                    value={additional_notes}
                    onChange={handleChange}
                    />
                    <button className="plannerbtn" type="submit">Submit Update</button>
                    {/* <Form.Button type="submit" content="Submit Update"/>*/}
                </Form>
            </Modal.Content>
        </Modal>
    )
}

export default UpdatePlannerForm;