import React, { useState} from 'react';
import Onlinecard from "./OnlineCard";
import MasterVolumeCard from "./MasterVolumeCard";
import SoundQualityCard from "./SoundQualityCard";

function Dashboard(props) {
const [like, setLike] = useState(false);
        
    return(
        <div>
            <Onlinecard/>
            <MasterVolumeCard/>
            <SoundQualityCard/>
        </div>

    )
    
};



export default Dashboard; 