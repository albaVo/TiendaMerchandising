import { ShoppingCart } from "@/components/carrito"
import { PublicLayouts, UserLayouts } from "@/layouts"


const indexCarrito = () => {
  return (
    <UserLayouts>
      <ShoppingCart />
    </UserLayouts>
  )
}

export default indexCarrito

