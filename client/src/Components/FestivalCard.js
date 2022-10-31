import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

function FestivalCard({ user }) {

    // useParams allows the use of the festival's id in get request
    let {id} = useParams()

    // allows the use of routes and the ability to push to routes
    let history = useHistory()

    const [festInfo, setFestInfo] = useState(null);
    // let [user, setUser] = useContext(UserContext);

    // fetch for individual festival 
    useEffect(() => {
        fetch(`/festivals/${id}`)
            .then(res => res.json())
            .then(data => setFestInfo(data))
    }, [])

    // console.log(festInfo)
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
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
            </style>

            {/* if festInfo is not an empty string, load the information, if not load null */}
            {festInfo !== null ? 
            <div className="festcard-header">
                <h1>{festInfo.name}</h1>
                <h3>{festInfo.date} -- {festInfo.marker.address}</h3>
            <div className="info-card">
                <img className="poster" src={festInfo.lineup_poster} alt="lineup poster" />
                    <div className="info">
                        <p>Average Attendance : {festInfo.average_attendance}👯</p>
                        <p>Average Price Range : ${festInfo.average_ticket_price}</p>
                        <p>Genre : {festInfo.genre}</p>
                        <div className="festurl">
                        <a href={festInfo.link}>Festival URL</a>
                        </div>
            {/* if there is a current user, show planner button, if not show login option */}
                {user ? 
                    <button className="plannerbtn" onClick={handleAddPlanner}>Add Festival to Planner</button> : 
                    <div>Wanna add this to your planner? <a href="/login">Log In</a></div>}
            </div>
            </div>
            </div>
            : null}
        </div>
    )
}

export default FestivalCard;