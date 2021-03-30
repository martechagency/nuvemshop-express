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

app.post('/orders', (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    res.send(JSON.stringify({
        id: req.body.id || null, // id do pedido
        payment_date: d || null
    }));

    console.log(`ID: ${req.body.id}`)

    if(req.body.id !== undefined && req.body.id !== null){
        console.log('Chama a funcao da esteniografia')
    }
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
