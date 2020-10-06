import React from 'react'
import { Box, Button, Grid, Image, Flex } from 'theme-ui'
import Layout from '../components/layout'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'
import { graphql, Link } from 'gatsby'

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
                to={`${product.slug}`}
                as={Link}
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
                <Image alt={product.name} src={product.image} />
                <Box as="p">{product.name}</Box>
                <Box as="p">
                  {formatCurrencyString({
                    value: product.price,
                    currency: 'USD'
                  })}
                </Box>
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
