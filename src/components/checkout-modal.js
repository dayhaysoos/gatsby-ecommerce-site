/**@jsx jsx */
import { jsx } from 'theme-ui'
import { useShoppingCart } from 'use-shopping-cart'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import '@reach/dialog/styles.css'

function CheckoutModal() {
  const { shouldDisplayCart, handleCloseCart, cartCount } = useShoppingCart()
  return (
    <DialogOverlay onDismiss={handleCloseCart} isOpen={shouldDisplayCart}>
      <DialogContent
        sx={{ backgroundColor: 'background', width: ['100vw', '90vw'] }}
      >
        {cartCount === 0 ? (
          <h2 sx={{ textAlign: 'center', backgroundColor: 'background' }}>
            No items in cart
          </h2>
        ) : (
          <h2>Checkout details here</h2>
        )}
      </DialogContent>
    </DialogOverlay>
  )
}

export default CheckoutModal
