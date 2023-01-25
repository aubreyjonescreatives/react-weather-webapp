import * as React from 'react';
import { useWeatherContext } from '../contexts/WeatherContext';
import WeatherCard from '../components/WeatherCard/WeatherCard'; 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import APIDATA from '../data/test.json'; 






const SearchWeather = (props) => {


  const { displayWeather } = props


const [findCityData, setFindCityData] = React.useState(""); 

const [findFavorites, setfindFavorites] = React.useState([])

const {allWeather, favorites} = useWeatherContext()

const handleCitySearchSubmit = (event) => {
  event.preventDefault(); 
  console.log(`You searched for ${findCityData}`)


  if (findCityData = displayWeather.name) {
    console.log(displayWeather.id)
  }
  else {
    console.log(`this is not the city you are looking for...`)
  }


}




  




React.useEffect(() => {
 setfindFavorites((prevState) => {
  const theWeather = allWeather.filter((displayWeather) => favorites.includes(displayWeather.name) )
  console.log(theWeather)
  return [...prevState, ...theWeather]
})
}, [favorites, allWeather])





  return (
    <>
    <div>Search Weather by City:</div>
   

    <Box>
    <form 
    onSubmit={handleCitySearchSubmit}
    >
      <label>
        <input 
        type="text" 
        value={findCityData} 
        placeholder="City Name"
        onChange={(e) => setFindCityData(e.target.value)}
        /> 
      </label>
      <input type="submit" value="Search" />
    </form>


    </Box>

  

<Box>
    {allWeather.map((displayWeather) => {
      return (
        <WeatherCard
            key={displayWeather.name}
            displayWeather={{...displayWeather}}
        />
      )
    })}

</Box>





<Box>
    {findFavorites.map((displayWeather) => {
      return (
        <WeatherCard
            key={displayWeather.name}
            displayWeather={{...displayWeather}}
        />
      )
    })}

</Box>


    </>

  )
}

export default SearchWeather; 