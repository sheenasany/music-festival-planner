
import {useHistory} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ReactMapGL, {
    Marker, 
    Popup, 
    NavigationControl, 
    FullscreenControl, 
    GeolocateControl} from 'react-map-gl'; //importing necessary props 
// import 'mapbox-gl/dist/mapbox-gl.css'; needed for version 7 of react-mapbox


function FestivalMap(){

    // initializing state for map markers
    const [dataMarkers, setDataMarkers] = useState([])
    // initializing state for selected map markers
    const [selectedFest, setSelectedFest] = useState(null)
    
    // http request for festival data 
    useEffect(() => {
        fetch('/markers')
        .then(res => res.json())
        .then(data => setDataMarkers(data))
    }, []);
    
    // toggle function for show list button (push to festival list)
    let history = useHistory()
    const handleShowList = () => {
        history.push('/festivals')
    }

    // function for show details button (push to festival card) 
    const handleShowDetailsBtn = () => {
        history.push(`festivals/${selectedFest.festivals[0].id}`)
    }

    // initializing state for viewport
    const [viewport, setViewport] = useState({
        latitude: 39.8283,
        longitude: -98.5795,
        width: "60vw",
        height: "60vh",
        zoom: 3
    })

    useEffect(() => {
        // sets an event listener on the escape key to change the setSelectedFestival to null (closes popup)
        const listener = (e) => {
            if (e.key === "Escape") {
                setSelectedFest(null)
            }
        }
        window.addEventListener("keydown", listener)

        // removes the event listener for the "escape" key
        return () => {
            window.removeEventListener("keydown", listener)
        }
    }, [])
    
    // function handling the zoom focus when marker is selected on the popup window 
    // (resets viewport on click event) 
    let handleCenter = (dataMarker) => {
        // console.log(dataMarker)
        // debugger
        setSelectedFest(dataMarker)
    
        let viewport = {
            width: "80%",
            height: "80vh",
            latitude: dataMarker.latitude,
            longitude: dataMarker.longitude,
            zoom: 4,
        }
        setViewport(viewport)
    }

    // function to handle mapped data over controlled markers
    // button on marker handles the center function
    const mapMarkers = () => {
        if (dataMarkers.length) {
            return dataMarkers.map((dataMarker) => {
                return (
                    <Marker 
                        key={dataMarker.id} 
                        longitude={dataMarker.longitude} 
                        latitude={dataMarker.latitude}
                    >
            <button className='marker-btn' onClick={() => handleCenter(dataMarker)}>
                <img src="/glowsticks.svg" alt="Festival Icon"/>
        </button>
        </Marker>
                )
        })
    }
}

 // after the user clicks on a marker, show popup for the selected Festival
 let showSelectedFestPopup = () => {
     if (selectedFest) {
        console.log(selectedFest)
        // debugger
        return (
            <Popup 
                latitude={selectedFest.latitude} 
                longitude={selectedFest.longitude}
                onClose={() => {
                    setSelectedFest(null)
                }}
            >
                <div>
                    {/* nested data needed square brackets*/}
                    <h3>{selectedFest.festivals[0].name} || {selectedFest.festivals[0].date}</h3>
                    <li>{selectedFest.city}</li>
                    <li>{selectedFest.state}</li>
                    {/* button pushes to festival card*/}
                    <button onClick={handleShowDetailsBtn}> Show More Details </button>
                </div>
            </Popup>
        )
    }
}
    
    return(
        <div>
            <h1>Map of Festivals</h1>
            <button type="button" onClick={handleShowList}> Show List </button>
            <br/>
            <ReactMapGL 
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle="mapbox://styles/sheenanagig/cl9fvbbba006414mmcoe02rtf"
                onViewportChange={(viewport) => {
                    setViewport(viewport);
                }}
            >
             {/* map controller props positioned*/}
            <div style={{padding: '5px'}}>    
            <GeolocateControl position="top-left" /></div>
            <div style={{padding: '5px'}}> 
            <FullscreenControl position="top-left" /></div>
            <div style={{padding: '5px'}}> 
            <NavigationControl position="top-left" /></div>
            
            {mapMarkers()}
            {showSelectedFestPopup()}

            </ReactMapGL>
        </div>
    )
}
export default FestivalMap;
                






// react-mapbox-gl code for version 7 (popup non-functioning)
/* {dataMarkers.map(dataMarker => (
                    <Marker 
                        key={dataMarker.id} 
                        longitude={dataMarker.longitude} 
                        latitude={dataMarker.latitude}
                        >

                        <button className='marker-btn' 
                        onClick={(e) => {
                            e.preventDefault()
                            setSelectedFest(dataMarker)}}>
                            <img src="/glowsticks.svg" alt="Festival Icon"/>
                        </button>
                    </Marker>
                    ))} */



/* {selectedFest ? 
(<Popup 
longitude={selectedFest.longitude} 
latitude={selectedFest.latitude}
onClose={() => {
    setSelectedFest(null)
}}>
    <div>
        <p>{selectedFest.city}, {selectedFest.state}</p>
    </div>
</Popup>
) : null} */