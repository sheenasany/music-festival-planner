import React from 'react';
import { Link } from 'react-router-dom';

function BackupFestivalListCard({ festival }){
    // console.log(festival.id)
    return(
        <div>
        <Link to={`/festivals/${festival.id}`}>
        <img src={festival.lineup_poster} alt="lineup poster" />
        <li>{festival.name}</li>
        <li>{festival.date}</li>
        <li>{festival.marker.address}</li>
        <br />
        </Link>
        </div>
    )
}

export default BackupFestivalListCard;