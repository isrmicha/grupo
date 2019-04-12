const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const listaEsforcoSalario = require('./googleSheets').listaEsforcoSalario





app.get('/', (req, res) => express.static('public'))
app.get('/esforcoSalario', async(req, res) => {
  res.send(await listaEsforcoSalario())
})
app.get('/precoMulheres', async(req, res) => {
  res.send(await listaEsforcoSalario())
})

app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`))