import * as React from 'react';
import { useWeatherContext } from '../contexts/WeatherContext';
import WeatherCard from '../components/WeatherCard/WeatherCard'; 
import Box from '@mui/material/Box';



const SearchWeather = () => {



  const [findFavorites, setfindFavorites] = React.useState([])
  const {allWeather, favorites} = useWeatherContext()






React.useEffect(() => {
 setfindFavorites((prevState) => {
  const theWeather = allWeather.filter((displayWeather) => favorites.includes(displayWeather.id) )
  console.log(theWeather)
  return [...prevState, ...theWeather]
})
}, [favorites, allWeather])




  return (
    <>
    <div>Search Weather</div>
   

     

  

<Box>
    {allWeather.map((displayWeather) => {
      return (
        <WeatherCard
            key={displayWeather.id}
            displayWeather={{...displayWeather}}
        />
      )
    })}

</Box>



<Box>
    {findFavorites.map((displayWeather) => {
      return (
        <WeatherCard
            key={displayWeather.id}
            displayWeather={{...displayWeather}}
        />
      )
    })}

</Box>


    </>

  )
}

export default SearchWeather; 