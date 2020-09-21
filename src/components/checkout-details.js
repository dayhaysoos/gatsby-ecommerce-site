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
  return (
    <Box sx={{ paddingBottom: "24px" }}>
      <h3 sx={{ textAlign: "center" }}>Checkout Details</h3>
      <Box>
        {Object.keys(cartDetails).map(cartItem => {
          const item = cartDetails[cartItem]
          return (
            <Flex key={item.sku}>
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
      Total: <span>{formattedTotalPrice}</span>
      <Flex sx={{ alignItems: "center", justifyContent: "space-evenly" }}>
        <Button sx={{ backgroundColor: "teal" }} onClick={handleCartClick}>
          Close
        </Button>
        <Button sx={{ backgroundColor: "teal" }} onClick={redirectToCheckout}>
          Checkout
        </Button>
      </Flex>
    </Box>
  )
}

export default CheckoutDetails
