import React, { useContext } from "react";
import NavBar from '../navbar/NavBar';
import axios from "axios";
import { useEffect, useState } from "react";
import Details from "../details/Details";
import ProgressBar from "../progress_bar/ProgressBar";
import { TrackingNumContext } from './../navbar/CustomToggle';

const Home = () => {
    const [transitEvent, setTransitEvent] = React.useState([]);
    const [orderTracking, setOrderTracking] = React.useState(null);
    const {trackingNum} = useContext(TrackingNumContext);
    
    const baseURL = "https://tracking.bosta.co/shipments/track/"+trackingNum;
        React.useEffect(() => {
            axios.get(baseURL).then((response) => {
                setTransitEvent(response.data.TransitEvents);
                setOrderTracking(response.data);
            });
        }, []);

    return ( 
        <div>
        <NavBar/>
        <ProgressBar orderTracking={orderTracking}/>
        <Details transitEvent={transitEvent}/>
        </div>
     );
}
 
export default Home;