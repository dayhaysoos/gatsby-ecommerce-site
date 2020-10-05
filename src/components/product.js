import React from 'react'
import { Box, Button, Grid, Image } from 'theme-ui'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'

function Product({ product }) {
  const { name, image, currency, description, price, tags } = product
  const { addItem } = useShoppingCart()

  return (
    <>
      <h1>This is a product component</h1>
    </>
  )
}

export default Product
