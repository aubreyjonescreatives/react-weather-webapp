import * as React from 'react';
import {useWeatherContext} from '../../contexts/WeatherContext';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import JSONTEST from '../../json/test.json'; 


const SEEDATA = JSONTEST
console.log(SEEDATA)

const cardStyles = {
  width: 345, 
  margin: 2
}



const WeatherCard = (props) => {


//const navigate = useNavigate(); 

const { displayWeather } = props



// local
const [favorite, setFavorite] = React.useState(false)
  

// global 
const { favorites, updateFavorites } = useWeatherContext()

//console.log(favorites.list)



const handleCardInfoClick = () => {
  updateFavorites(displayWeather) 
  console.log("Here is some weather data")
}




React.useEffect(() => {
  favorites.includes(displayWeather.weather[0].id) ? setFavorite(true) : setFavorite(false)
  console.log(favorites)
   }, [displayWeather.weather[0].id, favorites])





  return (
    <>
    <Card sx={ cardStyles}>
    <CardHeader
    title={props.displayWeather.weather[0].main}
    >

    </CardHeader>
    <CardMedia 
    component="img" 
    height="194"
    image={`${props.displayWeather.weather[0].icon}`}
    alt={`${props.displayWeather.weather[0].main}`}
/>
    <CardActions >
    <IconButton aria-label="See More Info" onClick={handleCardInfoClick}>
    <InfoIcon 
    sx={{color: favorite ? '#000000' : 'purple'}}
    />

    </IconButton>

    </CardActions>
    <Typography>{`${props.displayWeather.weather[0].description}`} Some Text</Typography>
    </Card>
    
    
    </>
  )
}

export default WeatherCard; 