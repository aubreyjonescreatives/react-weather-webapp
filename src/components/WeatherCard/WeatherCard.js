import * as React from 'react';
import {useWeatherContext} from '../../contexts/WeatherContext';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
//import JSONTEST from '../../json/test.json'; 


// const SEEDATA = JSONTEST
// console.log(SEEDATA)

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

console.log(favorites)



const handleFavoriteClick = () => {
  updateFavorites(displayWeather) 
  console.log("Here is some weather data")
}




React.useEffect(() => {
  //const FavoriteID = weather[0].id
  favorites.includes(displayWeather.id) ? setFavorite(true) : setFavorite(false)
  console.log(favorites)
   }, [displayWeather.id, favorites])





  return (
    <>
    <Card sx={ cardStyles}>
    <CardHeader
    title={props.displayWeather.description}
    >

    </CardHeader>
    <CardMedia 
    component="img" 
    height="194"
    image={`https://openweathermap.org/img/w/${props.displayWeather.icon}.png`}
    alt={`${props.displayWeather.main}`}
/>
    <CardActions >
    <IconButton aria-label="See More Info" onClick={handleFavoriteClick}>
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