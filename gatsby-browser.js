const React = require('react')
const { CartProvider } = require('use-shopping-cart')
const { loadStripe } = require('@stripe/stripe-js')

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_API_PUBLIC)

export const wrapRootElement = ({ element }) => {
  return (
    <CartProvider
      stripe={stripePromise}
      successUrl={`${process.env.URL || 'http://localhost:8000/success'}`}
      cancelUrl={`${process.env.URL || 'https://twitter.com/dayhaysoos'}`}
      currency="USD"
      allowedCountries={['US', 'GB', 'CA']}
      billingAddressCollection={true}
      mode="checkout-session"
    >
      {element}
    </CartProvider>
  )
}
