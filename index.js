const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())

const d = new Date();

app.get('/', (req, res) => {
  res.send('Pedidos pagos...')
})

app.post('/teste', (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    res.send(JSON.stringify({
        id: req.body.id || null,
        name: req.body.name || null,
        created_at: d || null
    }));

    console.log(`ID: ${req.body.id}, NAME: ${req.body.name}`)

    if(req.body.id !== undefined && req.body.id !== null){
        console.log('Chama a funcao da esteniografia')
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
