const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

app.use(cors({
  origin: function(origin, callback){
    return callback(null, true);
  },
    credentials: true
}));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 9191

const router = express.Router()

// To collect snowplow events
router.post('/snowplow/com.snowplowanalytics.snowplow/tp2', (req, res) => {
    console.log(req.body)
    res.json({ message: 'Event received' })
})

app.use('/api', router)

app.listen(port)

console.log(`Dummy collector running on http://localhost:${port}`)
