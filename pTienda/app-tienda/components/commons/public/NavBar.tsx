import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material"
import NextLink from 'next/link';
import Image from "next/image";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/auth";
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { IProducto } from "@/interfaces/productos/IProductos";
import { ICarrito } from "@/interfaces/carrito/ICarrito";



export const NavBar = ({ cart }: {cart: IProducto[]}) => {

    console.log(cart)

    const { user } = useContext(AuthContext)
    console.log(user)

    // const cart = useAppContext()

    const [active, setActive] = useState(false)
      
    const getTotalPrice = (): number => {
        const totalPrice = cart.reduce((total, product) => {
          if (product.nombre && product.precio) {
            return total + product.precio;
          } else {
            return total;
          }
        }, 0);
        console.log("Precio total:", totalPrice);
        return totalPrice;
    };
    

    return (
        <AppBar>
            <Toolbar>
                <div id="logo">
                    <Image src="/logo-w.png" width={120} height={100}  alt="logo" />
                </div>

                <Link href='/' passHref component={ NextLink }>
                    <button className="btn-98"><span>Home</span></button>
                </Link>
                <Box flex={1} />

                <Box component="nav"
                    sx={{ display: { xs: 'none', sm: 'flex' }}}
                >
                    <Link href='/public/productos' component={NextLink}>
                        <Button sx={{color: 'white', boxShadow: 4, width: 150, marginLeft: 22}}>Productos</Button>
                    </Link>
                    <Link href='/public/categorias' component={NextLink}>
                        <Button sx={{color: 'white', boxShadow: 4, width: 150, marginLeft: 10}}>Categorias</Button>
                    </Link>
                </Box>
                <Box flex={1} />
             
                {/* <Link href="/public/carrito">
                    <Button sx={{color: "white", marginRight: 20 }} onClick={() => setActive(!active)}>
                        <ShoppingCartIcon/>
                    </Button>  
                </Link> */}

                
                {/* <Button sx={{color: "white", marginRight: 20 }} onClick={() => setActive(!active)}>
                    <ShoppingCartIcon/>
                </Button>  */}
          

                
                <Link href='/auth/login' passHref component={ NextLink }>
                    <button className="btn-98"><span>Login</span></button>
                </Link>

                {/* <Box>
                    <Link href='/' component={ NextLink }>
                        <LogoutIcon sx={{ color: 'white'}} />
                        {user?.username}
                    </Link>
                </Box> */}

                <Box flex={1} />
            </Toolbar>
        </AppBar>
    )
}