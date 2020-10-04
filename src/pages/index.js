import React from 'react'
import { Link } from 'gatsby'
import { Container, Heading, Grid, Card, Text } from 'theme-ui'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Heading as="h1">Very Good Fruit Store</Heading>
      <Grid gap={20} columns={[1, 2, 3]}>
        <Card>
          <Heading>Fresh</Heading>
          <Text variant={'text.default'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            tempor urna in orci porttitor, sit amet molestie lorem imperdiet.
            Cras fermentum arcu nec ante egestas, sit amet rhoncus nunc finibus.
            Pellentesque eget dapibus velit.
          </Text>
        </Card>
        <Card>
          <Heading>Tasty</Heading>
          <Text variant={'text.default'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            tempor urna in orci porttitor, sit amet molestie lorem imperdiet.
            Cras fermentum arcu nec ante egestas, sit amet rhoncus nunc finibus.
            Pellentesque eget dapibus velit.
          </Text>
        </Card>
        <Card>
          <Heading>Organic</Heading>
          <Text variant={'text.default'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            tempor urna in orci porttitor, sit amet molestie lorem imperdiet.
            Cras fermentum arcu nec ante egestas, sit amet rhoncus nunc finibus.
            Pellentesque eget dapibus velit.
          </Text>
        </Card>
      </Grid>
    </Container>
  </Layout>
)

export default IndexPage
