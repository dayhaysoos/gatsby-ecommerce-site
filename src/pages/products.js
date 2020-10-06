import React from 'react'
import { Box, Button, Grid, Image } from 'theme-ui'
import Layout from '../components/layout'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'
import { graphql, Link } from 'gatsby'

export const query = graphql`
  {
    allProduct {
      nodes {
        slug
        currency
        description
        id
        image
        name
        price
        sku
      }
    }
  }
`

function Products({ data }) {
  return (
    <Layout>
      <h1>Produts page</h1>
    </Layout>
  )
}

export default Products
