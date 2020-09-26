import React from "react"
import { Box, Button, Grid, Image } from "theme-ui"
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"

function Product({ product }) {
  const { image, currency, description, price } = product
  const { addItem } = useShoppingCart()

  return (
    <Box
      sx={{
        maxWidth: "768px",
        margin: "0 auto",
      }}
    >
      <Grid sx={{color: 'primary', fontWeight: '700'}} columns={[1, 2]}>
        <Box>
          <Image src={image} />
        </Box>
        <Box
          as="article"
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
          as="section"
        >
          <Box sx={{ flex: 1 }}>
            <Box as="p">{description}</Box>
            <Box as="p">{formatCurrencyString({ value: price, currency })}</Box>
          </Box>
          <Button
            onClick={() => addItem(product)}
            sx={{ backgroundColor: "teal" }}
            alt="Add To Cart"
          >
            Add to Cart
          </Button>
        </Box>
      </Grid>
    </Box>
  )
}

export default Product
