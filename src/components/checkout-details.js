import React from "react"
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"
import { Box, Flex, Image, Button, Close } from "theme-ui"

import Select from "./select"

function CheckoutDetails() {
  const {
    cartDetails,
    formattedTotalPrice,
    handleCartClick,
    removeItem,
    redirectToCheckout,
  } = useShoppingCart()

  const handleSubmit = async event => {
    event.preventDefault()

    const response = await fetch("/.netlify/functions/create-session", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartDetails),
    })
      .then(res => {
        return res.json()
      })
      .catch(error => console.log(error))

    redirectToCheckout({ sessionId: response.sessionId })
  }

  return (
    <Box sx={{ paddingBottom: "24px" }}>
      <Box
        tabIndex="0"
        as="h2"
        sx={{ textAlign: "center", marginBottom: "36px" }}
      >
        Checkout Details
      </Box>
      <Box>
        {Object.keys(cartDetails).map(cartItem => {
          const item = cartDetails[cartItem]
          return (
            <Flex sx={{ height: "120px" }} aria tabIndex="0" key={item.sku}>
              <Image sx={{ objectFit: "contain" }} src={item.image} />
              <Box>{item.name}</Box>
              <Box>
                {formatCurrencyString({ value: item.price, currency: "USD" })}
              </Box>
              <Box>{item.description}</Box>
              <Box>{item.quantity}</Box>
              <Box>{item.formattedValue}</Box>
              <Select cartItem={item} max="50" />
              <Close
                title={"Remove"}
                aria-label={`Remove ${item.name} from cart`}
                onClick={() => removeItem(item.sku)}
              />
            </Flex>
          )
        })}
      </Box>
      <span>Total Cost:</span>
      <span>{formattedTotalPrice}</span>
      <Flex sx={{ alignItems: "center", justifyContent: "space-evenly" }}>
        <Button sx={{ backgroundColor: "teal" }} onClick={handleCartClick}>
          Close
        </Button>
        <Button sx={{ backgroundColor: "teal" }} onClick={handleSubmit}>
          Checkout
        </Button>
      </Flex>
    </Box>
  )
}

export default CheckoutDetails
