import * as React from 'react'; 
import axios from 'axios'; 


const WeatherContext = React.createContext({

weatherList: [], 
allWeather: [], 
favorites: [], 


})


export const WeatherContextProvider = (props) => {

const [weatherList, setWeatherList] = React.useState([])
const [allWeather, setAllWeather] = React.useState([])
const [favorites, setFavorites] = React.useState([])


const updateFavorites = (displayWeather) => {
    console.log(`The ${displayWeather.city.id} weather was added as a favorite weather`)

    if (!favorites.includes(displayWeather.weather[0].id)) {
        setFavorites((prevState) => [ ...prevState, displayWeather.weather[0].id]) 
      } else {
        setFavorites(() => {
          //  console.log(`The ${mealInfo.strMeal} meal was removed from your favorite Meals`)
          console.log(favorites) 
          return favorites.filter((item) => item !== displayWeather.weather[0].id)
           
        })
    }
    }


React.useEffect(() => {
    const fetchInfo = async () => {
    const weatherURL = `/.netlify/functions/WeatherData`
    try {
    const response = await axios.get(weatherURL)
    const weatherInfo = await response.data.list[0]
    console.log(weatherInfo)
    setWeatherList(weatherInfo)
    setAllWeather([...weatherInfo])
    } catch (err) {
        console.log(err)
    }
    }
    fetchInfo()
}, [])

// call to function 

return (
    <WeatherContext.Provider value={{
        weatherList, 
        allWeather, 
        favorites, 
        updateFavorites,
    }}>
        {props.children}
    </WeatherContext.Provider>
)


}


export const useWeatherContext = () => React.useContext(WeatherContext)