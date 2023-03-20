import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import NextLink from 'next/link';
import LogoutIcon from '@mui/icons-material/Logout';

export const NavBar = () => {
    return (
        <AppBar sx={{backgroundColor: "black"}}>
            <Toolbar>
                {/* <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{color: '#4a148c'}}
                >
                    <MenuIcon />
                </IconButton> */}
                <Typography variant="h6" component="h3" sx={{color: 'white'}}>
                    Home
                </Typography>
                <Box flex={1} />
                
                <Box component="nav"
                    sx={{ display: { xs: 'none', sm: 'flex' }}}>
                    <Link href='/admin/productos' component={NextLink}>
                        <Button sx={{color: 'white', marginRight: 2, boxShadow: 4}}>Productos</Button>
                    </Link>
                    <Link href='/admin/categorias' component={NextLink}>
                        <Button sx={{color: 'white', marginRight: 2, boxShadow: 4}}>Categorias</Button>
                    </Link>
                    <Link href='/admin/proveedores' component={NextLink}>
                        <Button sx={{color: 'white', marginRight: 2, boxShadow: 4}}>Proveedores</Button>
                    </Link>
                    <Link href='/admin/clientes' component={NextLink}>
                        <Button sx={{color: 'white', marginRight: 2, boxShadow: 4}}>Clientes</Button>
                    </Link>
                    <Link href='/admin/pedidos' component={NextLink}>
                        <Button sx={{color: 'white', marginRight: 2, boxShadow: 4}}>Pedidos</Button>
                    </Link>
                </Box>
                <Box flex={1} />
                <Box>
                    <Typography sx={{color: "white"}}>User: Alba</Typography>
                    <Link href='/public' component={ NextLink }>
                        <LogoutIcon sx={{ color: 'white'}} />
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>

    )
}