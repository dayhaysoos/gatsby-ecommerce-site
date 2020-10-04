import React from 'react'
import { Link } from 'gatsby'
import { Container, Heading } from 'theme-ui'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Heading as="h1">Very Good Fruit Store</Heading>
    </Container>
  </Layout>
)

export default IndexPage
