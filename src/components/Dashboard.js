import React, { useState} from 'react';
import Onlinecard from "./OnlineCard";
import MasterVolumeCard from "./MasterVolumeCard";
import SoundQualityCard from "./SoundQualityCard";

function Dashboard(props) {
    const notifications = []

        
    return(
        <div>
            <h1 style={{marginLeft: "8%", color: "grey"}}>Welcome User!</h1>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
                <Onlinecard/>
                <MasterVolumeCard/>
                <SoundQualityCard/>
            </div>
            <h1 style={{marginLeft: "8%"}}>System Notifications:</h1>
            <p> 
                {notifications ?
                    // if there are notifications: show here 
                    : <p> No notifications</p>
                }
            </p>
        </div>
    )
    
};



export default Dashboard; 