const products = require('./data/products.json')

// Slug for product page path
const slugify = (str) => {
  const slug = str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')

  return `${slug}`.replace(/\/\/+/g, '/')
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  const typeDefs = `
    type Product implements Node {
    name: String 
    sku: String
    slug: String
    id: String
    price: Int
    image: String
    currency: String
    description: String
    tags: [String]
    }
  `
  createTypes(typeDefs)
}
