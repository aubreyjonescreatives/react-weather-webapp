import * as React from 'react';
import { useWeatherContext } from '../contexts/WeatherContext';
import WeatherCard from '../components/WeatherCard/WeatherCard'; 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


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
   

    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="searchButton" placeholder="Search..." />
   

    <Stack direction="row" spacing={2}>
      <Button variant="contained" href="#contained-buttons">
        <SearchIcon></SearchIcon>
      </Button>
    </Stack>

    </Box>

  

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