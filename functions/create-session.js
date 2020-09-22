const stripe = require("stripe")(process.env.STRIPE_API_SECRET)
const validateCartItems = require("use-shopping-cart/src/serverUtil")
  .validateCartItems

const inventory = require("../data/products.json")

exports.handler = async event => {
  try {
    const productJSON = JSON.parse(event.body)

    const line_items = validateCartItems(inventory, productJSON)

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries: ["US", "CA"],
      },
      success_url: `${process.env.URL}/success.html`,
      cancel_url: process.env.URL,
      line_items,
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ sessionId: session.id }),
    }
  } catch (error) {
    console.error(error)
  }
}
