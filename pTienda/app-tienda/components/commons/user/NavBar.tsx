import { AppBar, Box, Button, IconButton, Link, MenuItem, Toolbar, Typography } from "@mui/material"
import NextLink from 'next/link';
import Image from "next/image";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/auth";
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { IProducto } from "@/interfaces/productos/IProductos";
import { ICarrito } from "@/interfaces/carrito/ICarrito";
import { AccountCircle } from "@mui/icons-material";
import Menu from '@mui/material/Menu';
import React from "react";



export const NavBar = ({ cart }: {cart: IProducto[]}, props) => {

    console.log(cart)

    const { user } = useContext(AuthContext)
    console.log(user)

    // const cart = useAppContext()

    const [active, setActive] = useState(false)
      
    // const getTotalPrice = (): number => {
    //     const totalPrice = cart.reduce((total, product) => {
    //       if (product.nombre && product.precio) {
    //         return total + product.precio;
    //       } else {
    //         return total;
    //       }
    //     }, 0);
    //     console.log("Precio total:", totalPrice);
    //     return totalPrice;
    // };


    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
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
                        <Button sx={{color: 'white', boxShadow: 4, width: 150, marginLeft:33}}>Productos</Button>
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

                
                <Button sx={{color: "white", marginRight: 20 }} onClick={() => {setActive(!active)}}>
                    <ShoppingCartIcon/>
                    {/* <sup>{props.count}</sup> */}
                </Button> 

                
                <div className={`container-cart-products ${active ? '' : 'hidden-cart'}`}>
                    {/* {
                        allProducts.length ? (
                            <>
                                <div className="row-product">
                                    {allProducts.map(producto => (
                                        <div className="cart-product" key={producto.codigo}>
                                            <div className="info-cart-product">
                                                <span className="cantidad-producto-carrito">
                                                    {producto.stock}
                                                </span>
                                                <p className="titutlo-producto-carrito">
                                                    {producto.nombre}
                                                </p>
                                                <span className="precio-producto-carrito">
                                                    {producto.precio}€
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <>
                                <p className="cart-empty">El carrito está vacío</p>
                            </>
                        )
                    } */}

                    {cart && cart.length === 0 ? (
                        <p>El carrito está vacío</p>
                    ) : (
                        <>
                            Contenido:
                            {/* {cart && cart.map((product) => (
                                <div key={product.codigo}>
                                    <p>{product?.nombre}</p>
                                    <p>{product?.precio}€</p>
                                </div>
                            ))}
                            {cart && cart.length > 0 && <p>Precio total: {getTotalPrice()}€</p>} */}
                        </>
                    )}

                </div>              

                
                {/* <Link href='/auth/login' passHref component={ NextLink }>
                    <button className="btn-98"><span>Login</span></button>
                </Link> */}

                <Box>
                    <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle sx={{color: 'white'}}/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose} sx={{textAlign:'center'}}>{user?.username}</MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link href="/user/perfil">
                                        Mi Cuenta
                                    </Link>
                                </MenuItem>
                                {/* <Link href='/' component={ NextLink }>
                                    <LogoutIcon sx={{ color: 'white'}} />
                                </Link> */}
                                <MenuItem>
                                    <Link href='/' component={ NextLink }>
                                        <LogoutIcon sx={{ color: 'black'}} />
                                    </Link>
                                </MenuItem>
                            </Menu>
                        </div>
                </Box>

                <Box flex={1} />
            </Toolbar>
        </AppBar>
    )
}