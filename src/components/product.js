import React from 'react'
import { Box, Button, Grid, Image } from 'theme-ui'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'
import SEO from './seo'

function Product({ product }) {
  const { name, image, currency, description, price, tags } = product
  const { addItem } = useShoppingCart()

  return (
    <Box sx={{ maxWidth: '768px', margin: '0 auto' }}>
      <SEO title={name} />
    </Box>
  )
}

export default Product
