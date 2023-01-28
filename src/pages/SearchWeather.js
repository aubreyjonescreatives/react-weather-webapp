import * as React from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-grid-system';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CloudySkyVideo from '../backgroundvideos/pexelsMiguelSkyTimelapse.mp4'; 
import DateandTime from '../components/dateandtime/DateandTime.js'; 

 const APIKey = process.env.REACT_APP_WEATHER_API_KEY


// background video styling 


const videoStyles  = {
  position: 'fixed', 
  zIndex: '-1', 
  width: '100%', 
  height: '100%', 
  top: '0px'
  
  
  }



// searchBox styling


const inputCardStyles = {
  padding: '5px', 
  display: 'block', 
  margin: '0px auto', 
  borderRadius: '25px', 
  width: '80%'
}



  const searchboxHeader = {
    textAlign: 'center', 
    color: 'black', 
    opacity: '100%', 
    foontSize: '25px'
    

  }

  const searchInputStyles = {
    padding: '10px', 
    display: 'block', 
    margin: '0 auto', 
   borderRadius: '100px',
   width: '90%'
    
    
    }


// card styling

const cardStyles = {
clear: 'both', 
display: 'block', 
margin: '50px auto',
top: '250px',  
width: '80%', 
marginBottom: "50px"
}



const cardImage = {
  width: '50px', 
  height: '50px', 
  margin: '15px'
}






const SearchWeather = () => {




// retrieve current weather data from weather API


const [findWeatherData, setFindWeatherData] = React.useState({})

const [weatherLocation, setWeatherLocation] = React.useState('')


// ${weatherLocation}

const cityweatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${weatherLocation}&units=imperial&appid=${APIKey}`
 

const inputLocation = (event) => {
if (event.key === 'Enter') {

  axios.get(cityweatherURL).then((response) => {
    setFindWeatherData(response.data) 
    console.log(response.data)
})
setFindWeatherData('')

}

}

// retrieve current date and time

//const date = new Date(); 

//document.getElementById("dateandTime").innerHTML = date; 




  return (
    <>

    <Box sx={videoStyles}>
    <video autoPlay loop muted id="video" >
      <source src={CloudySkyVideo} type='video/mp4' />
    </video>
    </Box>

  
    <Card sx={inputCardStyles}>
    <Typography sx={searchboxHeader}>Search Weather by City:</Typography>
  
   
   <TextField 
   value={weatherLocation}
   onChange={event => setWeatherLocation(event.target.value)}
   onKeyDown={inputLocation}
   placeholder='Enter City'
   type="text"
   sx={searchInputStyles}
   />

</Card>

  

    {findWeatherData.name !== undefined && 
  <Box>

      <Card sx={cardStyles}>
<Row>
</Row>
<Row>

      <CardMedia
      sx={cardImage}
      component="img" 
      image={`https://openweathermap.org/img/w/${findWeatherData.weather[0].icon}.png`}
      alt={findWeatherData.weather ? `${findWeatherData.weather.main}` : null}
      
      />

    <CardHeader
    title={findWeatherData.name}
    >
      
    </CardHeader>
    </Row>
<CardContent>
   <Typography>{findWeatherData.main ? <Typography>Current Temp: {findWeatherData.main.temp} ° F</Typography> :null}</Typography> 
    <Typography>{findWeatherData.weather ? <Typography>Current Sky: {findWeatherData.weather[0].main}</Typography> : null} </Typography>
      <Typography>{findWeatherData.weather ? <Typography>Current Temp Feels Like: {findWeatherData.main.feels_like} ° F</Typography> : null} </Typography>
      <Typography>{findWeatherData.main ? <Typography>Humidity: {findWeatherData.main.humidity}%</Typography> : null} </Typography>
     <Typography>{findWeatherData.wind ? <Typography>Wind Speed: {findWeatherData.wind.speed} MPH</Typography> : null} </Typography>
     </CardContent>
    
      </Card>



  </Box>

  }

    </>

  )
}

export default SearchWeather; 