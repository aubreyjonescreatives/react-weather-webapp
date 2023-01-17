const express = require('express')
const axios = require('axios')
var cors = require('cors')



require('dotenv').config()


const app = express()

app.use(cors())



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next(); 
})

const APIKey = process.env.WEATHER_API_KEY

app.get('/', (req, res) => {
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${APIKey}`, {
        //
    })
.then((response) => res.json(response.data))
.catch((err) => res.status(500).json({type: 'error', message:err.message}))
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Now listening on ${PORT}`))