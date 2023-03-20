import { IProveedor } from '@/interfaces/proveedores/IProveedores';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';

interface Props {
    proveedores: IProveedor[]
}

export const ProveedoresList:FC<Props> = ({ proveedores }) => {
  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, marginTop: 4 }} aria-label="simple table">
        <TableHead>
            <TableRow sx={{backgroundColor: '#7E7CF1'}}>
                <TableCell sx={{fontSize: 15, fontWeight: 'bold'}}>Código</TableCell>
                <TableCell sx={{fontSize: 15, fontWeight: 'bold'}}>Nombre</TableCell>
                <TableCell sx={{fontSize: 15, fontWeight: 'bold'}}>Teléfono</TableCell>
                <TableCell sx={{fontSize: 15, fontWeight: 'bold'}}>Dirección</TableCell>
                <TableCell sx={{fontSize: 15, fontWeight: 'bold'}}>Email</TableCell>
                <TableCell sx={{fontSize: 15, fontWeight: 'bold'}}>Website</TableCell>
            </TableRow>
        </TableHead>

        <TableBody>
                { 
                    proveedores.map((proveedore: IProveedor) => (
                        <TableRow key= { proveedore.codigo } 
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                { proveedore.codigo }
                            </TableCell>
                            <TableCell>{proveedore.nombre}</TableCell>
                            <TableCell>{proveedore.telefono}</TableCell>
                            <TableCell>{proveedore.direccion}</TableCell>
                            <TableCell>{proveedore.email}</TableCell>
                            <TableCell>{proveedore.website}</TableCell>
                        </TableRow>
                    )
                )}
            </TableBody>
        </Table>
    </TableContainer>
  )
}
