import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { IPedido } from '@/interfaces/pedidos/IPedidos';
import { FC } from 'react';

interface Props {
    pedidos: IPedido[]
}

export const PedidosList:FC<Props> = ({ pedidos }) => {

    return(
        <TableContainer component={Paper} sx={{width: 750, marginLeft: 45 }}>
        <Table sx={{ width: 750, marginTop: 4 }} aria-label="simple table">
            <TableHead>
                <TableRow sx={{backgroundColor: '#7E7CF1'}}>
                    <TableCell sx={{width: 375, textAlign: 'center', fontSize: 15, fontWeight: 'bold'}}>Código</TableCell>
                    <TableCell sx={{width: 375, textAlign: 'center', fontSize: 15, fontWeight: 'bold'}}>Fecha Pedido</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {
                    pedidos.map((pedido: IPedido) => (
                        <TableRow key={pedido.codigo}>
                            <TableCell component="th" scope="row" align="center">{pedido.codigo}</TableCell>
                            <TableCell align="center">{pedido.fecha_pedido}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
        </TableContainer>
    )
}
