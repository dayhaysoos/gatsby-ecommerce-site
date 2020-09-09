import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Give us money and we'll send you these fruits for free</h1>
    <Link to="/products">Click here to see products</Link>
  </Layout>
)

export default IndexPage
