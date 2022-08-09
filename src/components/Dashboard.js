import React, { useState, useEffect } from 'react';
import Onlinecard from "./OnlineCard";
import MasterVolumeCard from "./MasterVolumeCard";
import SoundQualityCard from "./SoundQualityCard";

function Dashboard(props) {
const [notifications, setNotifications] = useState([]);

useEffect(() => {
    if (!online) {
        notifications.push("Your application is offline. You won't be able to share or stream music to other devices.")
    } 
    
    if (volume > 80 ) {
        notifications.push("Listening to music at a high volume could cause long-term hearing loss")
    }
    
    if (quality == 1){
        notifications.push("Music quality is degraded. Increase quality if your connection allows it.")
    }
}, [notifications]); 



const {userName} = props;
        
    return(
        <div>
                <h1 style={{marginLeft: "8%", color: "grey"}}>Welcome {userName}</h1>
                <div style={{display: "flex", justifyContent: "space-evenly"}}>
                    <Onlinecard/>
                    <MasterVolumeCard/>
                    <SoundQualityCard/>
                </div>
                <h1 style={{marginLeft: "8%"}}>System Notifications:</h1>
                <p> 
                    {notifications}
                </p>
        </div>
    )
    
};



export default Dashboard; 