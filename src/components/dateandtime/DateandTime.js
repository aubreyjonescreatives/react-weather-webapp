import React, {useState, useEffect} from 'react'; 
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const dtStyles = {
textAlign: 'center', 
padding: '5px', 
margin: '0px auto'

}



const DateandTime = () => {
  
  const currentDate = new Date(); 

  console.log(currentDate)


  const displayDate = currentDate.getMonth() + "-" + currentDate.getDate() + "-" + currentDate.getFullYear()


 // const displayDate2 = displayDate.toDateString()

  const displayTime = currentDate.getHours() + ":" + currentDate.getMinutes() 
  
  
  console.log(displayTime)

  
  
  // add current date and time to application 


  
    return (
  <>
  <Box sx={dtStyles}>
    <Typography>Date: {`${displayDate}`}</Typography>
<Typography>{`${displayTime}`}</Typography>
 
  </Box>
  
  </>
  
  
  


  )
}

export default DateandTime