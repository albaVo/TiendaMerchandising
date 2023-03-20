import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import { ICliente } from '../../interfaces/clientes/IClientes';


interface Props {
    clientes: ICliente[]
}

export const ClientesList:FC<Props> = ({ clientes }) => {
  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, marginTop: 4 }} aria-label="simple table">
        <TableHead>
            <TableRow sx={{backgroundColor: '#7E7CF1'}}>
                <TableCell sx={{fontSize: 15, fontWeight: 'bold'}}>NIF</TableCell>
                <TableCell sx={{fontSize: 15, fontWeight: 'bold'}}>Nombre</TableCell>
                <TableCell sx={{fontSize: 15, fontWeight: 'bold'}}>Apellidos</TableCell>
                <TableCell sx={{fontSize: 15, fontWeight: 'bold'}}>Teléfono</TableCell>
                <TableCell sx={{fontSize: 15, fontWeight: 'bold'}}>Dirección</TableCell>
                <TableCell sx={{fontSize: 15, fontWeight: 'bold'}}>Ciudad</TableCell>
            </TableRow>
        </TableHead>

        <TableBody>
                { 
                    clientes.map((cliente: ICliente) => (
                        <TableRow key= { cliente.NIF } 
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                { cliente.NIF }
                            </TableCell>
                            <TableCell>{cliente.nombre}</TableCell>
                            <TableCell>{cliente.apellidos}</TableCell>
                            <TableCell>{cliente.telefono}</TableCell>
                            <TableCell>{cliente.direccion}</TableCell>
                            <TableCell>{cliente.ciudad}</TableCell>
                        </TableRow>
                    )
                )}
                
            </TableBody>
        </Table>
    </TableContainer>
  )
}
