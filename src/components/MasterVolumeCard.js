import React, { useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


function MasterVolumeCard(props) {
const [like, setLike] = useState(false);
        
    return(
        <Card sx={{ minWidth: 275,  margin: "5%" }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="black" gutterBottom>
            Master Volume
          </Typography>
          
          <Typography sx={{ mb: 1.5 }} color="black">
            Overrides all the other sound settings in the application
          </Typography>
          <Slider
        defaultValue={30}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
        </CardContent>

      </Card>

    )
    
};



export default MasterVolumeCard; 