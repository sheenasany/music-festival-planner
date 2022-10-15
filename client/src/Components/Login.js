import { useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import { UserContext } from "../GlobalContext/UserProvider";

function Login(){
    const [ user, setUser ] = useContext(UserContext); //wrapped in curly or square?

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()    

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
               username,
               password})
        })
        .then(res => {
            setIsLoading(false)
            if (res.ok) {
                res.json()
        .then(user => setUser(user))
        navigate.push('/');
    } else {
        res.json()
        .then(json => setError(json.error))
        }
    })
}

    return(
        <div className="sp_container">
            <label className="titles">Login</label>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username"> Username</label>
                <br/>
                <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    />
                    <br/>
                <label htmlFor="password">Password</label>
                <br/>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                 />  
                 <br/>
                <button className="btn" type="submit">Login</button>
            </form>

        </div>
    )
}

export default Login;