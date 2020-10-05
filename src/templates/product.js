import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Product from '../components/product'

export const query = graphql`
  query($slug: String!) {
    product(slug: { eq: $slug }) {
      slug
      currency
      description
      id
      image
      name
      price
      sku
      tags
    }
  }
`
