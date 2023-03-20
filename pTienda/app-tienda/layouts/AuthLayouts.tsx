import { Box, Button, Link, Typography } from "@mui/material";
import Head from "next/head";
import { FC } from "react"
import NextLink from 'next/link';
import Image from "next/image";

interface Props {
    title: string;
    children?: any
}
export const AuthLayout:FC<Props> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title> { title } </title>
        </Head>
        <header>
            <Box component="nav" 
                sx= {{ height: 55, backgroundColor:'#7E7CF1', alignItems:'center',  display: { xs: 'none', sm: 'flex' }}} 
            > 
                <Box flex={3} sx={{marginLeft: 12}}/>  
                    <Typography sx={{fontWeight: 700, fontSize: 20, fontFamily: 'Merriweather'}}>Zona de Autenticación</Typography> 
                <Box flex={2} />   
                <Link href='/' passHref component={ NextLink }>
                    <button className="btn-98"><span>Home</span></button>
                </Link>
                <Box flex={1} />   
            </Box>
        </header>
        <main>
            <Box sx={{marginLeft: 3}}>
               
            </Box>
            <Box display='flex' justifyContent={'center'} alignItems='center' height="calc(100vh - 200px)">
                { children }
            </Box>
        </main>
        <footer>
            {/* <h2>Pie de página</h2> */}
        </footer>
    </>
  )
}
