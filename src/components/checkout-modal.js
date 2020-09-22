import React from "react"
import { Box, Grid } from "theme-ui"
import { useShoppingCart } from "use-shopping-cart"
import CheckoutDetails from "./checkout-details"

function CheckoutModal() {
  return (
    <Box
      role="dialog"
      id="dialog1"
      aria-modal="true"
      aria-describedby="This is a dialog to learn what's in your cart and proceed to checkout"
      aria-labelledby="dialog1_label"
      sx={{
        paddingTop: "2rem",
        backgroundColor: "rgb(0, 0, 0, .5)",
        overflowY: "auto",
        position: "fixed",
        top: "0",
        left: "50%",
        right: "0",
        bottom: "0",
        width: "100%",
        transform: "translateX(-50%)",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          width: ["100%", "80%", "80%"],
          margin: "0 auto",
        }}
      >
        <h2 aria-label="dialog1_label" style={{ textAlign: "center" }}>
          Your cart
        </h2>
        <CheckoutDetails />
      </Box>
    </Box>
  )
}

export default CheckoutModal
