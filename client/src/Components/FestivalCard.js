import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

function FestivalCard({ user }) {

    // useParams allows the use of the festival's id in fetch request
    let {id} = useParams()

    // allows the use of routes and the ability to push to routes
    let history = useHistory()

    const [festInfo, setFestInfo] = useState("");
    // let [user, setUser] = useContext(UserContext);

    // fetch for individual festival 
    useEffect(() => {
        fetch(`/festivals/${id}`)
            .then(res => res.json())
            .then(data => setFestInfo(data))
    }, [])

    // Async and Await Initial Post request of planner to join festival id and user id 
    const handleAddPlanner = async() => {
       
        const res = await fetch('/planners', {
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
                festival_id: festInfo.id,
                user_id: user.id,
            })
        })
        const data = await res.json()

        const redirect = (data) => {
            history.push(`/planners/${data.id}`)
        }
        redirect(data)
    }

    return(
        <div className="container">
            Festival Card goes here
            {/* if festInfo is not an empty string, load the information, if not load null */}
            {festInfo !== "" ? 
            <div>
            <h1>{festInfo.name}</h1>
            <h3>{festInfo.date} -- {festInfo.marker.address}</h3>
            <img src={festInfo.lineup_poster} alt="lineup poster" />
            <p>Average Attendance : {festInfo.average_attendance}👯</p>
            <p>Average Price Range : ${festInfo.average_ticket_price}</p>
            <a href={festInfo.link}>Festival URL</a>
            <p>Genre : {festInfo.genre}</p>
            {/* if there is a current user, show planner button, if not show login option */}
            {user ? 
                <button onClick={handleAddPlanner}>Add to Planner</button> : 
                <div>Wanna add this to your planner? <a href="/login">Log In</a></div>}
            </div>
            : null}
        </div>
    )
}

export default FestivalCard;