import React from 'react'
import { Box, Button, Grid, Image } from 'theme-ui'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'
import SEO from './seo'

function Product({ product }) {
  const { name, image, currency, description, price, tags } = product
  const { addItem } = useShoppingCart()

  return (
    <Box
      sx={{
        maxWidth: '768px',
        margin: '0 auto'
      }}
    >
      <SEO title={name} />
      <Grid sx={{ color: 'primary', fontWeight: '700' }} columns={[1, 2]}>
        <Box>
          <Image alt={`${product.name}`} src={image} />
        </Box>
        <Box
          as="section"
          sx={{
            display: 'flex',
            flexDirection: 'column'
          }}
          as="section"
        >
          <Box
            sx={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box as="p">{description}</Box>
            <Box as="p">{formatCurrencyString({ value: price, currency })}</Box>
          </Box>
          <Button
            onClick={() => addItem(product)}
            sx={{ backgroundColor: 'teal' }}
            alt={`Add ${product.name} to cart`}
          >
            Add to Cart
          </Button>
        </Box>
      </Grid>
    </Box>
  )
}

export default Product
