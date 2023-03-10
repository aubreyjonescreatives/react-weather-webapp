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
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=42&lon=20&appid=${APIKey}`, {
        //
    })
.then((response) => res.json(response.data))
.catch((err) => res.status(500).json({type: 'error', message:err.message}))
})


const PORT = process.env.PORT || 5500
app.listen(PORT, () => console.log(`Now listening on ${PORT}`))