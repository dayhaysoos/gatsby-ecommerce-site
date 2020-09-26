import React from 'react'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'
import { Box, Flex, Image, Button, Close } from 'theme-ui'

import Select from './select'

function CheckoutDetails() {
  const {
    cartDetails,
    formattedTotalPrice,
    handleCartClick,
    removeItem,
    redirectToCheckout
  } = useShoppingCart()

  const handleSubmit = async (event) => {
    event.preventDefault()

    const response = await fetch('/.netlify/functions/create-session', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cartDetails)
    })
      .then((res) => {
        return res.json()
      })
      .catch((error) => console.log(error))

    redirectToCheckout({ sessionId: response.sessionId })
  }

  return (
    <Box as="form">
      <Box as="table">
        <Box as="tr">
          <Box as="th">Name</Box>
          <Box as="th">Description</Box>
          <Box as="th">Total</Box>
          <Box as="th">Quantity</Box>
        </Box>
        {Object.keys(cartDetails).map((cartItem) => {
          const item = cartDetails[cartItem]
          return (
            <Box as="tr" aria tabIndex="0" key={item.sku}>
              {/* <Image sx={{ objectFit: 'contain' }} src={item.image} /> */}
              <Box as="td">{item.name}</Box>
              <Box as="td">{item.description}</Box>
              <Box as="td">{item.formattedValue}</Box>
              <Box as="td">
                <Select cartItem={item} max="50" />
              </Box>
              <Box as="td">
                <Close
                  title={'Remove'}
                  aria-label={`Remove ${item.name} from cart`}
                  onClick={() => removeItem(item.sku)}
                />
              </Box>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default CheckoutDetails
