import React from "react"
import { FaShoppingCart } from "react-icons/fa"
import { Button, Flex } from "theme-ui"
import { useShoppingCart } from "use-shopping-cart"

function ShoppingCartIcon() {
  const { cartCount, handleCartClick } = useShoppingCart()

  return (
    <Button
      onClick={handleCartClick}
      sx={{
        display: "flex",
        transition: "all .2s ease",
        background: "transparent",
        padding: 0,
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <FaShoppingCart size={30} />
      {cartCount === 0 ? null : (
        <Flex
          as="span"
          style={{
            flexDirection: "column",
            position: "relative",
            bottom: "8px",
            right: "8px",
            backgroundColor: "teal",
            borderRadius: "50%",
            height: "24px",
            width: "24px",
            justifyContent: "center",
            backgroundColor: "gray",
          }}
        >
          {cartCount}
        </Flex>
      )}
    </Button>
  )
}

export default ShoppingCartIcon
