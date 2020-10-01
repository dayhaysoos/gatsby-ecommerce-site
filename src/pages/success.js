import { Link } from 'gatsby'
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'

function Success() {
  const { clearCart } = useShoppingCart()

  clearCart()

  return (
    <>
      <h1>Thank you so much!</h1>
      <Link to="/">Click here to go back</Link>
    </>
  )
}

export default Success
