const axios = require('axios')



const APIKey = process.env.WEATHER_API_KEY



exports.handler = async function (event, context) {
console.log(event)
console.log(context)
try {
    const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${APIKey}`, {
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