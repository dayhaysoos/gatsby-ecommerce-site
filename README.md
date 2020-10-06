# Gatsby e-commerce Workshop

Jamstack frameworks are changing the way we build top-of-the-line experiences on the web. They are performant, secure and enable developers to build web apps faster than before. In this workshop, Nick DeJesus will walk you through what it's like to build an e-commerce site using Gatsby, use-shopping-cart and theme-ui. You will learn how serverless functions help you make secure transactions and how to build accessible UI components that extend use-shopping-cart's abilities.

From this workshop, you will learn:

- How to install a gatsby theme
- How theme-ui can help make building systemized UIs easy via the theme object
- How to use theme-ui components and how to access the sx prop
- About some of Gatsby's life cycle methods within gatsby-node, gatsby-browser and gatsby-ssr
- How to create Schema Customizations with Gatsby graphql
- How to create GraphQL nodes with Gatsby
- How to create pages from a source of data with gatsby-node
- How to set up templates to pass data to your pages
- How to initiate Stripe in your Gatsby app
- How to wrap your gatsby app in a provider (use-shopping-carts <CartProvider />)
- How to make accessible components with use-shopping-cart
- How to set up serverless functions with netlify
- How to get to Stripe's Checkout via use-shopping-cart

## Get Started

Make sure you go to your Stripe Dashboard, get your API secret and Public keys, and add them to `.env.development` like this:

GATSBY_STRIPE_API_PUBLIC=pk_test_YOUR_KEY_HERE
STRIPE_API_SECRET=sk_test_YOUR_KEY_HERE

1. Install the Netlify CLI
2. Run ntl login to hook up to their Netlify account
3. Click the Deploy to Netlify Button below to create a copy of the workshop repo
4. Clone the repo you just created
5. ntl link to hook up to it
6. ntl dev to build

[![](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/dayhaysoos/gatsby-ecommerce-site/)
