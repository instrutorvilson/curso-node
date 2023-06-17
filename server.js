const express = require('express')
const app = express()
var cors = require('cors')
const rotas = require('./rotas')

app.use(cors())
app.use(express.json())
app.use(rotas)

const port = process.env.PORT

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})