const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const { response } = require('express')
const app = express()
const port = 3000
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())

const d = new Date();
const api_config = {headers:{ 
  "Authentication": "bearer 722e9d274134d4be7fba4be3fed5c931f7a3fe8c",
  "User-Agent": "Order Status Test (developer@martechagency.com.br)",
  "Content-Type": "application/json"}}

async function getOrderItens(id) {
  let api_return = await axios.get(`https://api.nuvemshop.com.br/v1/1605982/orders/${id}`, api_config)
  return api_return
}

app.get('/', (req, res) => {
  res.send('Pedidos pagos...')
})

app.post('/orders', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        id: req.body.id || null, // id do pedido
        payment_date: d || null
    }));

    console.log(`Pedido ${req.body.id}`)

    if(req.body.id !== undefined && req.body.id !== null){
      getOrderItens(req.body.id).then(response => {
        for (let i = 0; i < response.data.products.length; i++){
          let product_id = response.data.products[i].id
          let product_name = response.data.products[i].name
          console.log(`Produto a ser enviado --> id: ${product_id}, nome: ${product_name}`)
        }
      })
    }
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
