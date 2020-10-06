const stripe = require('stripe')(process.env.STRIPE_API_SECRET)
const validateCartItems = require('use-shopping-cart/src/serverUtil')
  .validateCartItems

const inventory = require('../data/products.json')
