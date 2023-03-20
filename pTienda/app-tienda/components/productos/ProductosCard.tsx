import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material";
import { FC } from "react";
import NextLink  from 'next/link';
import { IProducto } from "@/interfaces/productos/IProductos";

interface Props {
  producto: IProducto;
}

export const ProductoCard:FC<Props> = ({ producto }) => {
  return (
    <Grid item xs={6} sm={3}>
        <Box sx= {{ marginTop: 1}} className='fadeIn'>
            <Typography fontWeight={700}>{producto.nombre}</Typography>
        </Box>
        <Card sx={{ width: '90%', height: '100%', marginBottom: 10}}>
          <Link href={`/public/productos/${producto.codigo}`}  passHref component={NextLink} prefetch={false}>
            <CardActionArea>
                <Box display='flex' alignItems='flex-start' flexDirection='row'>
                    <CardMedia
                        component='img' className='fadeIn'
                        image={ producto.thumbnail } alt={ producto.nombre } 
                        sx={{ width:'120px' }}
                    />
                    <Box sx={{marginLeft: 3}}>
                        <Typography fontWeight={500}>Precio</Typography> 
                        <Typography fontWeight={700}>{producto.precio} €</Typography> 
                    </Box>
                </Box>
            </CardActionArea>
          </Link>
        </Card>
    </Grid>
  )
}