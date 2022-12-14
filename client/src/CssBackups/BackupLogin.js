import { useHistory } from "react-router-dom";
import React, { useContext, useState } from "react";
import { UserContext } from "../../GlobalContext/UserProvider";
import Button from '@mui/material/Button';


function BackupLogin(){
    const [ user, setUser ] = useContext(UserContext); //wrapped in curly or square?
    
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()    

    let history = useHistory();

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
        history.push('/');
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
                <Button variant="contained" type="submit">Login</Button>
                <div>
                    <p>Not registered?</p>
                    <a href="/signup">Sign Up</a>
                </div>
            </form>

        </div>
    )
}

export default BackupLogin;