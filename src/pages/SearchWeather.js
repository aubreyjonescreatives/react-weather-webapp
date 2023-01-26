import * as React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


// require('dotenv').config()

 const APIKey = process.env.REACT_APP_WEATHER_API_KEY


const searchStyles = {
display: 'block', 
margin: '0px auto'


}

const searchInputStyles = {
  display: 'block', 
  margin: '0px auto', 
  textAlign: 'center'
  
  
  }

const cardStyles = {
display: 'block', 
margin: '50px auto', 
width: '500px'
}



const cardImage = {
  width: '100px', 
  height: '100px'
}






const SearchWeather = () => {


const [findWeatherData, setFindWeatherData] = React.useState({})

const [weatherLocation, setWeatherLocation] = React.useState('')


const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${weatherLocation}&units=imperial&appid=${APIKey}`
 

const inputLocation = (event) => {
if (event.key === 'Enter') {

  axios.get(weatherURL).then((response) => {
    setFindWeatherData(response.data) 
    console.log(response.data)
})
setFindWeatherData('')

}

}


  return (
    <>
    <div>Search Weather by City:</div>
   

    <Box sx={searchStyles}>
   
   <input 
   value={weatherLocation}
   onChange={event => setWeatherLocation(event.target.value)}
   onKeyDown={inputLocation}
   placeholder='Enter City'
   type="text"
   sx={searchInputStyles}
   />


    </Box>

    {findWeatherData.name !== undefined && 
  <Box>

      <Card sx={cardStyles}>

    <CardHeader
    title={findWeatherData.name}
    >

    </CardHeader>

      <CardMedia
      sx={cardImage}
      component="img" 
      image={`https://openweathermap.org/img/w/${findWeatherData.weather[0].icon}.png`}
      alt={findWeatherData.weather ? `${findWeatherData.weather.main}` : null}
      
      />
<CardContent>
   <Typography>{findWeatherData.main ? <Typography>Current Temp: {findWeatherData.main.temp} F</Typography> :null}</Typography> 
    <Typography>{findWeatherData.weather ? <Typography>Current Sky: {findWeatherData.weather[0].main}</Typography> : null} </Typography>
      <Typography>{findWeatherData.weather ? <Typography>Current Temp Feels Like: {findWeatherData.main.feels_like} F</Typography> : null} </Typography>
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