import React from "react"
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"
import { Box, Flex, Image, Button } from "theme-ui"

function CheckoutDetails() {
  const {
    cartDetails,
    formattedTotalPrice,
    handleCartClick,
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
      <Box tabIndex="0" as="h2" sx={{ textAlign: "center" }}>
        Checkout Details
      </Box>
      <Box>
        {Object.keys(cartDetails).map(cartItem => {
          const item = cartDetails[cartItem]
          return (
            <Flex tabIndex="0" key={item.sku}>
              <Image sx={{ width: "8%" }} src={item.image} />
              <Box sx={{ width: "20%" }}>{item.name}</Box>
              <Box sx={{ width: "20%" }}>
                {formatCurrencyString({ value: item.price, currency: "USD" })}
              </Box>
              <Box sx={{ width: "20%" }}>{item.description}</Box>
              <Box sx={{ width: "20%" }}>{item.quantity}</Box>
              <Box sx={{ width: "20%" }}>{item.formattedValue}</Box>
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
