const express = require('express')
const app = express()

app.get('/products/all', (request, response) => {
    if(JSON.stringify(request.query) === '{}') {
        response.send('Products, ' + request.header('Page') + ', ' + request.header('Sort') + ', ' + request.header('Order'))
    } else {
        response.send('Products, ' + request.query.sort)
    }
})

app.get('/products/all', (request, response) => {
    response.send('Products, ' + request.query.sort)
})

app.get('/products/:productId-:productSize-:productColor', (request, response) => {
    response.send('Product ,' + request.params.productId + ', ' + request.params.productSize + ', ' + request.params.productColor)
})

app.get('/products/:productId', (request, response) => {
    response.send('Product, ' + request.params.productId)
})

app.listen(3000)