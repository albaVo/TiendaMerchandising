import { IProducto } from "@/interfaces/productos/IProductos"
import { Box, Button, ButtonGroup, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material"
import { FC } from "react"
import Image from 'next/image';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import React, { useState } from 'react';
import { useCart } from "react-use-cart";


interface Props {
    producto: IProducto;
}

const myLoader = ({src, width, quality}) =>{
    return `${src}?s=${width}`
}

export const ProductoDetalle:FC<Props> = ({producto}) => {

    const [selectedSize, setSelectedSize] = useState<string | undefined>();

    const handleSizeClick = (size: string) => {
        if (typeof size === 'string') {
            setSelectedSize(size);
        } else {
            console.log('size no es una cadena de caracteres');
        }
    };

    const { addItem } = useCart()

    return (
        <Box sx={{backgroundColor: '#E8DAEF', padding: '50px', display: "flex", boxShadow: '0 0 50px rgba(0, 0, 0, 0.40)', margin: 12}}>
            <Box>
                <Image
                    loader={myLoader}
                    src={producto.thumbnail}
                    alt={producto.nombre}
                    width={300}
                    height={300}
                />
            </Box>

            <Box sx={{display: "flex", flexDirection: "column", gap: '20px', marginLeft: 7}}>
                <Box>
                    <Typography variant="h3" sx={{fontFamily: 'Merriweather'}}>{producto.nombre}</Typography>
                </Box>
                <Box sx={{fontFamily: 'Lora', fontSize: 20}}>{producto.tipo}</Box>
                <Box sx={{fontFamily: 'Lora', fontSize: 22}}>
                    Stock: {producto.stock}
                </Box>
                {/* <Box>
                    
                    {Array.isArray(producto?.tallas) ? (
                        producto.tallas.map((talla, index) => (
                        <button
                            key={index}
                            onClick={() => handleSizeClick(talla)}
                            className={`btn-size ${selectedSize === talla ? 'btn-size-active' : ''}`}
                            sx={{ m: 1, py: 2, px: 4, borderRadius: '50px', border: 'none', outline: 'none', cursor: 'pointer' }}
                        >
                            {talla}
                        </button>
                        ))
                    ) : (
                        <div>No se encontraron tallas para este producto.</div>
                    )}
                </Box> */}
                <Box sx={{fontFamily: 'Lora', fontSize: '25px', fontWeight: 800, margin: '10px 0'}}>{producto.precio}€</Box>
                <Button variant="contained" sx={{width: '20%'}} onClick={() => addItem(producto.codigo)}>
                    <ShoppingCartIcon/>
                </Button>
            </Box>
        </Box>
    )
}
