const axios = require('axios')
import JSONTEST from '../../src/json/test.json'







const APIKey = process.env.WEATHER_API_KEY
//const BaseWeatherURL = 'https://api.openweathermap.org'; 






// const fetchWeatherData = (location) => {
//     const { lat } = location; 
//     const { lon } = location; 
//     const city = location.name; 

//     const weatherAPIURL = `${BaseWeatherURL}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${APIKey}`

//     fetch(weatherAPIURL)
//     .then(function (res) {
//         return res.json(); 
//     })
//     .then(function (data) {
//         renderItems(city, data); 
//     })
//     .catch(function (err) {
//         console.error(err); 
//     }); 

// }


// const retrieveCoordinates = (search) => {


//     const weatherAPIURL = `${BaseWeatherURL}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${APIKey}`

//     fetch(weatherAPIURL)
//     .then(function (res) {
//         return res.json(); 
//     })
//     .then(function (data) {
//         if (!data[0]) {
//             alert('Location unavailable'); 
//         } else {
//             appendToHistory(search); 
//             fetchWeatherData(data[0])
//         } 
//     })
//     .catch(function(err) {
//         console.log(err)
//     }); 
// }







exports.handler = async function (event, context) {
console.log(event)
console.log(context)

try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=42&lon=20&appid=${APIKey}`, {
        // headers: {'api-key': process.env.WEATHER_API_KEY}
    })
    return {
        statusCode: 200, 
        body: JSON.stringify(response.data)
    }
} catch (err) {
    return {
        statusCode: 404, 
        body: err.toString()
    }
}


}