import { CartList } from "@/components/carrito"
import { ProductosListCarrito } from "@/components/productos"
import { useProductos } from "@/hooks/useProductos"
import { PublicLayouts, UserLayouts } from "@/layouts"
import { useState } from "react"

const IndexProductos = () => {
    const { productos, isLoading } = useProductos('/productos')
    console.log("l=", isLoading, "p=", productos)
  
    const [cart, setCart] = useState([])
    const [showCart, setShowCart] = useState(false)
    console.log(cart)

    const addToCart = (data) => {
        setCart([ ...cart, data ])
    }
    
    return (
        <UserLayouts>
            <h2 id="seccion">Sección de Productos</h2>
            {/* <ProductosCardList productos={productos}/> */}
            {/* {
                showCart ?
                <CartList cart={cart}></CartList>:
                <ProductosListCarrito productos={productos} addToCart={addToCart}/>
            } */}
            <CartList cart={cart}></CartList>
            <ProductosListCarrito productos={productos} addToCart={addToCart}/>
        </UserLayouts>
    )
}

export default IndexProductos
