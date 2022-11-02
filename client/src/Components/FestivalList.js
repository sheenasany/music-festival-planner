import React from 'react';
import FestivalListCard from './FestivalListCard';

function FestivalList({festivals}) {    
    return(
        <div className="container">
            <div id="festival-list-container">
                <FestivalListCard festivals={festivals}/>
            </div>
        </div>
    )
};

export default FestivalList;
















//mapping over filtered festivals and creating festival cards
// const festivalList = allFilters.map(festival => (
//     <FestivalListCard key={festival.id} festival={festival} /> ))

    // // toggle for map 
    // let history = useHistory()
    // const handleMapToggle = () => {
    //     history.push('/map')
    // }