// import React, {useState, useEffect, useCallback} from 'react';
// import axios from 'axios'; 
// import _ from 'lodash'; 
// import { v4 as uuidv4 } from 'uuid';
// import {useWeatherContext} from '../contexts/WeatherContext';
// //import { styled, /*alpha*/ } from '@mui/material/styles';
// import TextField from '@mui/material/TextField';
// import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';
// //dotenv.config(); 


// //const APIKey = process.env.WEATHER_API_KEY


// const searchHeader = {
// marginLeft: '50px', 
// padding: '20px'



// }




// // const Search = styled('div')(({ theme }) => ({
// //     display: 'inline-flex', 
// //     margin: '10px', 
// //     width: '25%'


// //   }));
  
//   // const SearchIconWrapper = styled('div')(({ theme }) => ({
//   //   fontSize: '20px', 
//   //   backgroundColor: 'blue', 
//   //   width: '35px', 
//   //   textAlign: 'center', 
//   //   color: 'white', 
//   //   borderRadius: '0px 25px 25px 0px', 
//   //   cursor: 'pointer', 
//   //   height: '32px'

//   // }));
  

//   // const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   //  border: '1px solid gray', 
//   //  borderRadius: '25px 0px 0px 25px', 
//   //  padding: '15px', 
//   //  height: '15px'

    
//   // }));












// const Weather = () => {

//   const allweatherData = useWeatherContext()

// const [weatherData, setWeatherData] = useState([])
// const [debouncedName, setDebouncedName] = useState('')


// const [weatherList, setWeatherList] = useState(allweatherData); 
// const [name, setName] = useState(''); 


// function handleChange(event) {
//   setName(event.target.value); 
// }

// function handleAdd(){
// const newList = allweatherData.concat({ name, id: uuidv4() }); 
// setWeatherList(newList); 
// setName('');
// }






// //  const params = useParams()




//   console.log(weatherData)

// const handleInput = (event) => {
//   debounce(event.target.value)
// }


// const debounce = useCallback(
//   _.debounce((searchVal) => {
//     setDebouncedName(searchVal)
//   }, 1000),
//   [], 
// )




//  const handleSearch = () => {
//   if (debouncedName) {
//     setWeatherData(weatherData.filter(weather => weather.name.includes(debouncedName)))
//   } else {
//     fetchWeather()
//   }
//  } 



//  const handleCreate = async () => {
//   try {
//     const result = await axios.post(``, {
//       name: 'name',
//     })
//     if (result.status === 200) {
//       fetchWeather()
//       console.log(result.status)
//     }
//   } catch (err) {
//     console.error(err)
//   }
//   fetchWeather()
//  }



//  const fetchWeather = async () => {
//   try {
//     const weatherInfo = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=2f4dcd39f2b81b6e284a6acac29fcac9`)
//     setWeatherData(weatherInfo.data)
//     console.log(weatherInfo)
//   } catch (err) {
//     console.log(err)
//   }
// }

// useEffect(() => {
//   fetchWeather()
// }, [])





//   return (
// <>

// <h3 sx={searchHeader}>Search a City</h3>

// <form>
// <TextField placeholder='search' onChange={handleChange} />
// <IconButton aria-label='search' onClick={handleAdd}>
//   <SearchIcon />
// </IconButton>

// </form>





//       <div>City Info:</div>

//     <div>
//     <AddItem
//     name={name}
//     onChange={handleChange}
//     onAdd={handleAdd}
//     />
//     <List list={weatherList} />
//     </div>

  



//       <ul>
//       {weatherList.map((city) => (
//         <li key={city.local_name}>{city.uk}</li> 
//       ))}

//     </ul>

//     </>
//   )
// }

// export default Weather; 