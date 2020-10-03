/**@jsx jsx */
import { jsx } from 'theme-ui'
import { useShoppingCart } from 'use-shopping-cart'
import CheckoutDetails from './checkout-details'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import '@reach/dialog/styles.css'

function CheckoutModal() {
  const { shouldDisplayCart, handleCloseCart } = useShoppingCart()
  return (
    <DialogOverlay onDismiss={handleCloseCart} isOpen={shouldDisplayCart}>
      <DialogContent
        sx={{ backgroundColor: 'background', width: ['100vw', '90vw'] }}
      >
        <CheckoutDetails />
      </DialogContent>
    </DialogOverlay>
  )
}

export default CheckoutModal
