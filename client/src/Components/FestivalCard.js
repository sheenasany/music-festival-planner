import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { UserContext } from '../GlobalContext/UserProvider';

function FestivalCard() {

    // useParams allows the use of the festival's id
    let {id} = useParams()
    const [festInfo, setFestInfo] = useState("");
    let [user, setUser] = useContext(UserContext);

    // fetch for individual festival 
    useEffect(() => {
        fetch(`/festivals/${id}`)
            .then(res => res.json())
            .then(data => setFestInfo(data))
    }, [])

    let history = useHistory()

    function handleAddPlanner(){
        fetch('/planners', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                budget: "",
                transportation: "",
                lodging: "",
                friends_attending: "",
                additional_notes: "",
                festival_id: festInfo.id ,
                user_id: user.id,
            })
        })
        history.push('/planners')
    }

    return(
        <div className="container">
            Festival Card goes here
            {festInfo !== "" ? 
            <div>
            <h1>{festInfo.name}</h1>
            <h3>{festInfo.date} -- {festInfo.marker.address}</h3>
            <img src={festInfo.lineup_poster} alt="lineup poster" />
            <p>Average Attendance : {festInfo.average_attendance}👯</p>
            <p>Average Price Range : ${festInfo.average_ticket_price}</p>
            <a href={festInfo.link} target="_blank">Festival URL</a>
            <p>Genre : {festInfo.genre}</p>
            <button onClick={handleAddPlanner}>Add to Planner</button>
            </div>
            : null}
        </div>
    )
}

export default FestivalCard;