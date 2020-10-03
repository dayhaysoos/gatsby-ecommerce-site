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
      <Box sx={{ marginBottom: '24px' }} as="table">
        <caption className={`visually-hidden`}>Shopping Cart</caption>
        <Box as="tr">
          <Box as="th" scope="col">
            Name
          </Box>
          <Box as="th" scope="col">
            Description
          </Box>
          <Box as="th" scope="col">
            Total
          </Box>
          <Box as="th" scope="col">
            Quantity
          </Box>
        </Box>
        {Object.keys(cartDetails).map((cartItem) => {
          const item = cartDetails[cartItem]
          return (
            <Box as="tr" key={item.sku}>
              <Box as="td" scope="row">
                {item.name}
              </Box>
              <Box as="td">{item.description}</Box>
              <Box as="td">{item.formattedValue}</Box>
              <Box as="td">
                <label>
                  <span className={`visually-hidden`}>
                    Quantity of {item.name}
                  </span>
                  <Select cartItem={item} max="50" />
                </label>
              </Box>
              <Box as="td">
                <Close
                  aria-label={`Remove ${item.name} from cart`}
                  title={'Remove'}
                  onClick={() => removeItem(item.sku)}
                />
              </Box>
            </Box>
          )
        })}
      </Box>
      <Flex sx={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
        <Button onClick={handleCartClick}>Close</Button>
        <Button onClick={handleSubmit}>Checkout</Button>
      </Flex>
    </Box>
  )
}

export default CheckoutDetails
