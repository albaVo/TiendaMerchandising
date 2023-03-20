import { IProducto } from "@/interfaces/productos/IProductos";
import { Box, Button, Chip, Grid, Link, Typography } from "@mui/material";
import { FC, useContext, useState } from "react";
import NextLink  from 'next/link';
import Image from 'next/image';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { ICarrito } from "@/interfaces/carrito/ICarrito";

interface Props {
  productos: IProducto[];
  addToCart: (producto: IProducto) => void;
}

const myLoader = ({src, width, quality}) =>{
  return `${src}?s=${width}`
}

export const ProductosList:FC<Props> = ({ productos, addToCart }) => {

  // const [cart, setCart] = useState<ICarrito>({ productos: [] });

//   const addToCart = (product: IProducto): void => {
//   // console.log("Agregando al carrito:", product);
//   setCart((prevCart) => ({
//     ...prevCart,
//     productos: [...prevCart.productos, product],
//   }));
//   // console.log("Carrito actual:", cart);
// };
 

  // const getTotalPrice = (): number => {
  //   const totalPrice = cart.reduce((total, product) => total + product.precio, 0);
  //   console.log("Precio total:", totalPrice);
  //   return totalPrice;
  // };

  return (
    <Box sx={{display: "flex", flexWrap: "wrap", gap: '10px', marginLeft: 12}}>
      {
        productos.map((producto: IProducto) => (
          // eslint-disable-next-line react/jsx-key
          <Box sx={{backgroundColor: '#E8DAEF', padding: '20px', width: '400px', gap: '10px', display: "flex", flexDirection: "column"}}>
            <Link href={`/public/productos/${producto.codigo}`}  passHref component={NextLink} prefetch={false} sx={{textAlign: "center"}}>
              <Image 
                loader={myLoader}
                src={producto.thumbnail}
                alt={producto.nombre}
                width={150}
                height={150}
              />
              <Typography sx={{fontWeight: 800, fontSize: '20px'}}>{producto.nombre}</Typography>
              <Typography sx={{fontSize:'21px', margin: '5px 0'}}>{producto.precio}€</Typography>
            </Link>

            {/* <Button variant="contained" sx={{width: '20%', marginLeft: 18}} 
              onClick={() => {
                addToCart(producto);
                console.log(cart);
              }}
            >
              <ShoppingCartIcon/>
            </Button> */}
          </Box>
        ))
      }
    </Box>
  )
}
