import React from "react"
import { useShoppingCart } from "use-shopping-cart"

function Select({ max = 10, cartItem }) {
  const { setItemQuantity } = useShoppingCart()

  const options = []
  for (let quantity = 1; quantity <= max; ++quantity)
    options.push(
      <option key={quantity} value={quantity}>
        {quantity}
      </option>
    )

  return (
    <select
      value={cartItem.quantity}
      fontSize={"20px"}
      onChange={event => {
        setItemQuantity(cartItem.sku, event.target.value)
      }}
    >
      {options}
    </select>
  )
}

export default Select
