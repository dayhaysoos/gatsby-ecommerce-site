import React from "react"
import { Box, Grid, Flex, Image } from "theme-ui"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { formatCurrencyString } from "use-shopping-cart"

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
  const products = data.allProduct.nodes
  return (
    <Layout>
      <Grid columns={4}>
        {products.map(product => {
          return (
            <Flex
              as={Link}
              to={`/products/${product.slug}`}
              key={product.id}
              css={{ flexDirection: "column" }}
            >
              <Image src={product.image} />
              <Box as="p">{product.name}</Box>
              <Box as="p">
                {formatCurrencyString({
                  value: product.price,
                  currency: "USD",
                })}
              </Box>
              <Box as="p">{product.description}</Box>
            </Flex>
          )
        })}
      </Grid>
    </Layout>
  )
}

export default Products
