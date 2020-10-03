import React from 'react'
import { Box, Grid, Flex, Image, Button } from 'theme-ui'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart'
import QuantityInput from '../components/quantity-input'

export const query = graphql`
  {
    allProduct {
      nodes {
        slug
        currency
        description
        id
        image
        name
        price
        sku
      }
    }
  }
`

function Products({ data }) {
  const { addItem } = useShoppingCart()
  const products = data.allProduct.nodes
  return (
    <Layout>
      <Grid columns={4}>
        {products.map((product) => {
          return (
            <Box key={product.id}>
              <Flex
                as={Link}
                to={`/products/${product.slug}`}
                sx={{
                  paddingTop: '24px',
                  paddingBottom: '24px',
                  flexDirection: 'column',
                  color: 'primary',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontWeight: '700',
                  textDecoration: 'none'
                }}
              >
                <Image src={product.image} />
                <Box as="p">{product.name}</Box>
                <Box as="p">
                  {formatCurrencyString({
                    value: product.price,
                    currency: 'USD'
                  })}
                </Box>
                <Box as="p">{product.description}</Box>
              </Flex>

              <Flex sx={{ justifyContent: 'center' }}>
                <Button
                  onClick={() => addItem(product)}
                  sx={{ backgroundColor: 'teal' }}
                  alt={`Add ${product.name} to cart`}
                >
                  Add to Cart
                </Button>
              </Flex>
            </Box>
          )
        })}
      </Grid>
    </Layout>
  )
}

export default Products
