import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { Box, Flex, Button, Close } from 'theme-ui'

function CheckoutDetails() {
  const {
    cartDetails,
    formattedTotalPrice,
    handleCartClick,
    removeItem,
    redirectToCheckout
  } = useShoppingCart()

  return (
    <Box>
      <h2>Checkout details</h2>
    </Box>
  )
}

export default CheckoutDetails
