import { ICategoria } from '@/interfaces/categorias/ICategorias';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';

interface Props {
    categorias: ICategoria[]
}

export const CategoriasList:FC<Props> = ({ categorias }) => {
  return (
    <TableContainer component={Paper} sx={{width: 750, marginLeft: 45 }}>
        <Table sx={{ width: 750, marginTop: 4 }} aria-label="simple table">
        <TableHead>
            <TableRow sx={{backgroundColor: '#7E7CF1'}}>
                <TableCell sx={{width: 375, textAlign: 'center', fontSize: 15, fontWeight: 'bold'}}>Código</TableCell>
                <TableCell sx={{width: 375, textAlign: 'center', fontSize: 15, fontWeight: 'bold'}}>Nombre</TableCell>
            </TableRow>
        </TableHead>

        <TableBody>
                { 
                    categorias.map((categoria: ICategoria) => (
                        <TableRow key= { categoria.codigo }>
                            <TableCell component="th" scope="row" align="center">{ categoria.codigo }</TableCell>
                            <TableCell align="center">{categoria.nombre}</TableCell>
                        </TableRow>
                    )
                )}
                
            </TableBody>
        </Table>
    </TableContainer>
  )
}
