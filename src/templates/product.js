import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

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

const ProductTemplate = ({ data }) => {
  return (
    <Layout>
      <p>{JSON.stringify(data, null, 2)}</p>
    </Layout>
  )
}

export default ProductTemplate
