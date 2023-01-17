import * as React from 'react'; 
import axios from 'axios'; 


const WeatherContext = React.createContext({

weatherList: []


})


export const WeatherContextProvider = (props) => {

const [weatherList, setWeatherList] = React.useState([])



React.useEffect(() => {
    const fetchInfo = async () => {
    const weatherURL = `/.netlify/functions/WeatherData`
    try {
    const response = await axios.get(weatherURL)
    const cityName = await response.data 
    console.log(cityName)
    setWeatherList(cityName)
    } catch (err) {
        console.log(err)
    }
    }
    fetchInfo()
}, [])

// call to function 

return (
    <WeatherContext.Provider value={{
        weatherList
    }}>
        {props.children}
    </WeatherContext.Provider>
)


}


export const useWeatherContext = () => React.useContext(WeatherContext)