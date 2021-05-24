const express = require("express")
const cors = require("cors")
const app = express()
const port = 8000

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))

require('./server/routes/boilerplate.routes')(app)
require('./server/config/mongoose.config')

app.listen(port, () => console.log(`Listening on port ${port}`))