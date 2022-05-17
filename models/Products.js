let products = [
    {
        id: '1', 
        'slug':'nike-shoe',
        'name':'Nike Shoe',
        'price': 59.99
    },
    {
        id: '2', 
        'slug':'polo-shirt',
        'name':'Polo Shirt',
        'price': 40.00
    },
    {
        id: '3', 
        'slug':'khaki-shorts',
        'name':'Khaki Shorts',
        'price': 35.50
    },
    {
        id: '4', 
        'slug':'dress-shoe',
        'name':'Dress Shoe',
        'price': 79.99
    },
    {
        id: '5', 
        'slug':'dress-belt',
        'name':'Dress Belt',
        'price': 15.99
    },
]

const all = () => {
    return products
}

const find = (id) => {
    return products.find(p => p.id === id)
}

const create = (product) => {
    const id = Number(products[products.length - 1].id) + 1 + ""
    products.push({ id, ...product })
    return products[products.length - 1]
}

const update = (id, product) => {
    products = products.map((p) => {
        return (p.id === id) ? product : p
    })
    return products
}

const remove = (id) => {
    products = products.filter(p => p.id !== id)
    return products
}

module.exports = { all, find, create, update, remove}