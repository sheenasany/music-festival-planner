import React, {useEffect, useState} from 'react';

function PlannerForm() {

    const [formData, setFormData] = useState({
        budget: "",
        transportation: "",
        lodging: "",
        friends_attending: "",
        additional_notes: ""
    })

    useEffect(() => {
        fetch('/planners', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
    })



    return(
        <div>
            Planner form goes here
        </div>
    )
}

export default PlannerForm;