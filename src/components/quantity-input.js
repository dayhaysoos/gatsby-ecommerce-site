import React from 'react'
import { Box, Button } from 'theme-ui'
import { useShoppingCart } from 'use-shopping-cart'

function QuantityInput({ sku, quantity = 1, action = 'increase' }) {
  const { addItem, decrementItem } = useShoppingCart()
  return (
    <Button
      label={
        action === 'increase'
          ? `Increase by ${quantity}`
          : `Decrease by ${quantity}`
      }
      onClick={(event) => {
        event.preventDefault()
        action === 'increase'
          ? addItem({ sku, quantity })
          : decrementItem(sku, quantity)
      }}
    >
      {action === 'increase' ? '+' : '-'}
    </Button>
  )
}

export default QuantityInput
