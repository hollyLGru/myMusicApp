import React, { useState} from 'react';
import Onlinecard from "./OnlineCard";
import MasterVolumeCard from "./MasterVolumeCard";
import SoundQualityCard from "./SoundQualityCard";

function Dashboard(props) {
const [notifications, setNotifications] = useState([]);

let componentDidUpdate = () => {
    if (!online) {
        console.log("Your application is offline. You won't be able to share or stream music to other devices.")
    } 

    if (volume > 80 ) {
        console.log("Listening to music at a high volume could cause long-term hearing loss")
    }

    if (quality == 1){
        console.log("Music quality is degraded. Increase quality if your connection allows it.")
    }
}

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
                    {/* {notifications ?
                        // if there are notifications: show here 
                        : <p> No notifications</p>
                    } */}
                </p>
        </div>
    )
    
};



export default Dashboard; 