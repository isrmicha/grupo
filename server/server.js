const express = require('express')
const app = express()
var cors = require('cors')

const port = process.env.PORT || 3000
const listaEsforcoSalario = require('./googleSheets').listaEsforcoSalario
const listaPrecoMulheres = require('./googleSheets').listaPrecoMulheres



app.use(cors())
app.get('/', (req, res) => express.static('public'))
app.get('/esforcoSalario', async(req, res) => {
  return res.send(await listaEsforcoSalario())
})
app.get('/precoMulheres', async(req, res) => {
  return res.send(await listaPrecoMulheres())
})

app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`))