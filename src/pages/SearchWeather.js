import * as React from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-grid-system';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
//import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CloudySkyVideo from '../backgroundvideos/pexelsMiguelSkyTimelapse.mp4'; 
//import DateandTime from '../components/dateandtime/DateandTime.js'; 
import SunriseSunset from '../components/SunriseSunset/SunriseSunset';
import '../App.css';






 const APIKey = process.env.REACT_APP_WEATHER_API_KEY



// all weather styles 

const weatherStyles = {


}

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
  padding: '15px', 
  display: 'grid', 
  margin: '0px auto', 
  borderRadius: '5px', 
  width: '80%', 
  marginTop: '20px'
}

const inputCardStylesMD = {
width: '20%'


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
    margin: '0px auto', 
    borderRadius: '100px',
    //width: '90%'
    
    
    }


// card styling

const cardStyles = {
clear: 'both', 
display: 'grid', 
justifyContent: 'center',  
margin: '30px auto',
top: '250px',  
width: '95%', 
marginBottom: "25px", 


}

const cardCityTitle = {
  justifyContent: 'center', 
  textAlign: 'center', 
  marginLeft: 'auto', 
  marginRight: 'auto',  
  fontSize: '35px', 
  width: '100%'
}

const currentTempStyles = {
  textAlign: 'center', 
  fontSize: '60px', 
  color: '#1976d2', 
  fontWeight: '900'
}


const nowWeather = {
  textAlign: 'center', 
  marginRight: 'auto', 
  marginLeft: 'auto', 
  fontSize: '30px'
}

const cardImage = {
  width: '50px', 
  height: '50px', 
}


const MinandMaxRow = {
  display: 'inline-grid', 
  paddingBottom: '25px'
}

const MinandMax = {
 // marginBottom: '10px'

}


// card styling 2

const cardStyles2 = {
  clear: 'both', 
  display: 'grid', 
  justifyContent: 'center',  
  margin: '30px auto',
  top: '50px',  
  width: '95%', 
  marginBottom: "25px", 
  
  
  }

const infoRow = {
  backgroundColor: '#fefefe', 
  
}

const weatherInfoText = {
  clear: 'both', 
  textAlign: 'center', 
  backgroundColor: '#fdfdfd', 
  alignItems: 'baseline', 
  padding: '-5px',
  
  }

const weatherInfoNumber = {
  fontSize: '45px', 
 // margin: '-15px', 
  textAlign: 'center', 
  fontWeight: '900'
}


const symbol = {
fontSize: '20px', 
color: 'navy', 
padding: '-5px',
}


// card styling 3

const cardStyles3 = {
  clear: 'both', 
  display: 'grid', 
  justifyContent: 'center',  
  margin: '30px auto',
  top: '50px',  
  width: '95%', 
  marginBottom: "150px", 
  
  
  }





const SearchWeather = () => {




// retrieve current weather data from weather API


const [findWeatherData, setFindWeatherData] = React.useState({})

const [weatherLocation, setWeatherLocation] = React.useState('')


// ${weatherLocation}

const cityweatherURL = `https://api.openweathermap.org/data/2.5/weather?zip=${weatherLocation}&appid=${APIKey}&units=imperial`
 
//https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid=

//https://api.openweathermap.org/data/2.5/weather?q=${weatherLocation}&units=imperial&appid=

//https://api.openweathermap.org/data/2.5/weather?zip=${weatherLocation}&appid=

//https://api.openweathermap.org/data/2.5/weather?q=${weatherLocation}&appid={API key}

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
    <div sx={weatherStyles}>
    <Box sx={videoStyles}>
    <video autoPlay loop muted id="video" >
      <source src={CloudySkyVideo} type='video/mp4' />
    </video>
    </Box>

    <Box>

    </Box>

<Container>
    <Card sx={inputCardStyles} md={inputCardStylesMD}>
    <Typography sx={searchboxHeader}>Search Weather by Zip Code:</Typography>
  
   
   <TextField 
   value={weatherLocation}
   onChange={event => setWeatherLocation(event.target.value)}
   onKeyDown={inputLocation}
   placeholder='Enter City Zip Code'
   type="text"
   sx={searchInputStyles}
   />

</Card>

</Container>


    {findWeatherData.name !== undefined && 

<Container>

     <Card sx={cardStyles} className="cardStyles">

<Row>


    <Typography 
    >{findWeatherData.main ?
      <Typography sx={cardCityTitle} className="cardCityTitle">{findWeatherData.name}</Typography> :null}
      
    </Typography>

    </Row>



  <Row>
   <Typography>{findWeatherData.main ?
    <Typography sx={currentTempStyles} className="currentTemp">{findWeatherData.main.temp} °F</Typography> :null}</Typography> 
   </Row>






   <Row sx={nowWeather} className="nowWeather">
    <Typography>{findWeatherData.weather ? 
    <Typography> {findWeatherData.weather[0].description}</Typography>: null} </Typography> 
      <CardMedia 
      sx={cardImage}
      className="cardImage"
      component="img" 
      image={`https://openweathermap.org/img/w/${findWeatherData.weather[0].icon}.png`}
      alt={findWeatherData.weather ? `${findWeatherData.weather.main}` : null}
      
      />
   
    </Row>
    <Row sx={MinandMaxRow}>
      <Typography sx={MinandMax}>{findWeatherData.main ? 
      <Typography sx={MinandMax}>L: {findWeatherData.main.temp_min} °F</Typography>
      : null }</Typography>
      <Typography>{findWeatherData.main ? 
      <Typography>H: {findWeatherData.main.temp_max} °F</Typography>
      : null }</Typography>
    </Row>

    </Card>

</Container>


}





{findWeatherData.name !== undefined && 

<Container>

     <Card sx={cardStyles2} className="cardStyles2">

    <CardContent>


    <Row sx={infoRow}>
      <Col>
      <Typography>{findWeatherData.weather ? <Typography sx={weatherInfoText}><Col><Row><Typography sx={weatherInfoNumber}>{findWeatherData.main.feels_like} </Typography><Typography sx={symbol}>°F</Typography></Row></Col><Col> Feels Like</Col></Typography> : null} </Typography>
      </Col>
      <Col>
      <Typography>{findWeatherData.main ? <Typography sx={weatherInfoText}><Col><Row><Typography sx={weatherInfoNumber}>{findWeatherData.main.humidity} </Typography><Typography sx={symbol}>%</Typography></Row></Col><Col>Humidity</Col></Typography> : null} </Typography>
      </Col>
      <Col>
     <Typography>{findWeatherData.wind ? <Typography sx={weatherInfoText}><Col><Row><Typography sx={weatherInfoNumber}>{findWeatherData.wind.speed} </Typography><Typography sx={symbol}>MPH</Typography></Row></Col><Col> Wind Speed</Col></Typography> : null} </Typography>
     </Col>
     </Row>
     
     </CardContent>
    
      </Card>

      </Container>
  
  
  }



{findWeatherData.name !== undefined && 

<Container>

     <Card sx={cardStyles3} className="cardStyles3">

    <CardContent>
  
  <Row>
    <SunriseSunset />
  </Row>

    <Row sx={infoRow}>
    <Col>
      <Typography>{findWeatherData.sys ? <Typography sx={weatherInfoText}><Col><Row><Typography sx={symbol}>{new Date(findWeatherData.sys.sunrise * 1000).toLocaleTimeString()}</Typography></Row></Col><Col>Sunrise</Col></Typography> : null} </Typography>
      </Col>
      <Col>
      <Typography>{findWeatherData.sys ? <Typography sx={weatherInfoText}><Col><Row><Typography sx={symbol}>{new Date(findWeatherData.sys.sunset * 1000).toLocaleTimeString()}</Typography></Row></Col><Col>Sunset</Col></Typography> : null} </Typography>
      </Col>
    
     </Row>
     
     </CardContent>
    
      </Card>

      </Container>
  
  
  }



</div>

    </>

  )
}

export default SearchWeather; 