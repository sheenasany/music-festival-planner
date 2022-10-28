import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
// import { FestivalsContext } from '../GlobalContext/FestivalsProvider';
import FestivalListCard from './FestivalListCard';

function FestivalList({festivals}) {
// useContext states
// let [festivals, setFestivals] = useContext(FestivalsContext)

// initialized state for filtered arrays
const [selectedGenre, setSelectedGenre] = useState("")
const [hasCamping, setHasCamping] = useState("")

// functions to handle state changes of filters
  const handleSelectedGenre = (e) => {
    setSelectedGenre(e.target.value)
  }
  const handleCamping = (e) => {
    setHasCamping(e.target.value)
  }

  // MEGA filter to handle filters of genre and has_camping
let allFilters = festivals.filter(filteredGenre => {
    if(selectedGenre === "") return true
        return (selectedGenre === filteredGenre.genre)})
        .filter(filteredCamp => {
            if (hasCamping === "") return true
         else if (hasCamping === "true")
            return (filteredCamp.has_camping)
            else if (hasCamping === "false")
            return (!filteredCamp.has_camping)
        // may add average ticket and average attendance.filter() later
    }) 

    //mapping over filtered festivals and creating festival cards
    // const festivalList = allFilters.map(festival => (
    //     <FestivalListCard key={festival.id} festival={festival} /> ))

        // // toggle for map 
        // let history = useHistory()
        // const handleMapToggle = () => {
        //     history.push('/map')
        // }

    return(
        <div className="container">
            <div id="festival-list-container">
                <FestivalListCard festivals={festivals}/>
            </div>
        </div>
    )
};

export default FestivalList;