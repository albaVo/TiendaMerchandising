import { Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ProductosList } from "../productos";
import NextLink from 'next/link';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useState } from "react";
import { IProducto } from "@/interfaces/productos/IProductos";
import { useCart } from "react-use-cart";

export const ShoppingCart = ({}) => {

    // const cart = useAppContext();

    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart()
  
    if(isEmpty) return (
        <Box sx={{textAlign: "center", margin: 20}}>
            <Typography sx={{fontSize: 37, fontFamily: 'Merriweather', fontWeight: 700, padding: 5}}>La cesta está vacía</Typography>
            <Link href='/public/productos' passHref component={ NextLink }>
                <Typography sx={{fontFamily: 'Lora', fontSize: 25}}>Siga comprando</Typography>
                <ShoppingCartCheckoutIcon sx={{fontSize: 30, color: '#394EE6'}}/>
            </Link>
        </Box> 
    )
    

    return (
        <>
            <Grid container>
                <Box>
                    <Box>
                        <Typography variant="h5">Cart ({totalUniqueItems}) total Items: ({totalItems})</Typography>
                    </Box>
                </Box>
            </Grid>





        {/* <div>

            {cart.items.length === 0 ? (
                <Box sx={{textAlign: "center", margin: 20}}>
                    <Typography sx={{fontSize: 37, fontFamily: 'Merriweather', fontWeight: 700, padding: 5}}>La cesta está vacía</Typography>
                    <Link href='/public/productos' passHref component={ NextLink }>
                        <Typography sx={{fontFamily: 'Lora', fontSize: 25}}>Siga comprando</Typography>
                        <ShoppingCartCheckoutIcon sx={{fontSize: 30, color: '#394EE6'}}/>
                    </Link>
                </Box>
                

            ) : (
                <>
                    <h3>Productos</h3>
                    <div>
                        {cart.items.map((productos) => (
                            <ProductosList 
                                key={productos.codigo} 
                                productos={productos} 
                                qty={productos.qty} 
                            />
                        ))}
                    </div>
                </>
            )}

        </div> */}

        </>
    )
}

export default ShoppingCart