const mongoose = require('mongoose');
const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/farmStand')
    .then(() => {
        console.log('Connected to MongoDB successfully!');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    })

// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })

// p.save().then(p => {
//     console.log(p)
// })
//     .catch(e => {
//         console.log(e)
//     })

const seedProducts = [
    { name: 'Tomato', price: 20, category: 'Red' },
    { name: 'Onion', price: 30, category: 'White' },
    { name: 'Potato', price: 15, category: 'Starchy' },
    { name: 'Carrot', price: 25, category: 'Orange' },
    { name: 'Cucumber', price: 10, category: 'Green' },
    { name: 'Cabbage', price: 35, category: 'Green' }
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })