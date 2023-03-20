import { Navbar, Sidebar } from "@/components/dashboard";
import { useClientes } from "@/hooks/useClientes";
import { ICliente } from "@/interfaces/clientes/IClientes";
import { useRouter } from "next/router";
import { FC } from "react";


interface Props {
    nombre: string;
    clientes?: ICliente[]
}

const SingleCliente:FC<Props> = ({clientes}) => {

    const router = useRouter()
    // console.log(router)

    const nombre = router.query

    const {clientes: client, isLoading} = useClientes(`/clientes/${nombre.NIF}`)

    return (
        <div className="single">
            <Sidebar/>
            <div className="singleContainer">
                <Navbar/>
                <div className="topsingle">
                    <div className="leftsingle">
                        <div className="editButton">Editar</div>
                        <h1 className="titlesingle">Informacion</h1>
                        <div className="itemsSingle">
                            <div className="detailssingleCliente">
                                {client?.map((cliente: ICliente) => (
                                    <>
                                    <h1 className="itemTitleSingleC">{cliente.nombre} {cliente.apellidos}</h1>
                                    <div className="details-wrapperCliente">
                                        <div className="detailitemsingle">
                                            <span className="itemKeyC">NIF:</span>
                                            <span className="itemValueC">{cliente.NIF}</span>
                                        </div>
                                        <div className="detailitemsingle">
                                            <span className="itemKeyC">Teléfono:</span>
                                            <span className="itemValueC">{cliente.telefono}</span>
                                        </div>
                                        <div className="detailitemsingle">
                                            <span className="itemKeyC">Dirección:</span>
                                            <span className="itemValueC">{cliente.direccion}</span>
                                        </div>
                                        <div className="detailitemsingle">
                                            <span className="itemKeyC">Ciudad:</span>
                                            <span className="itemValueC">{cliente.ciudad}</span>
                                        </div>
                                    </div>
                                    <div className="pedidos-wrapper">
                                        <div className="detailitemsingle">
                                            {cliente.pedidos.map((pedido) => (
                                                <>
                                                    <span className="itemKeyP">Pedido:</span>
                                                    <ul key={pedido.codigo}>
                                                        <li>
                                                            <span className="itemKeyC">Codigo:</span>
                                                            <span className="itemValueC">{pedido.codigo}</span>
                                                        </li>
                                                        <li>
                                                            <span className="itemKeyC">Fecha del pedido:</span>
                                                            <span className="itemValueC">{pedido.fecha_pedido}</span>
                                                        </li>
                                                    </ul>
                                                </>
                                            ))}
                                            
                                        </div>
                                    </div>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* <div className="rightsingle">
                        
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow sx={{backgroundColor: '#7E7CF1'}}>
                                        <TableCell sx={{fontSize: 15, fontWeight: 'bold', textAlign:"center"}}>Codigo</TableCell>
                                        <TableCell sx={{fontSize: 15, fontWeight: 'bold', textAlign:"center"}}>Fecha_Pedido</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {clientes?.map((cliente: ICliente) => (
                                    cliente.pedidos.map((pedido: IPedido) => (
                                    <TableRow key={`${cliente.NIF}-${pedido.codigo}`}>
                                        <TableCell className="tableCell">{pedido.codigo}</TableCell>
                                        <TableCell className="tableCell">{pedido.fecha_pedido}</TableCell>
                                    </TableRow>
                                    ))
                                ))}
                                </TableBody>                        
                            </Table>
                        </TableContainer>
                    </div> */}
                </div>
                {/* <div className="bottomsingle">
                    <h1 className="titlesingle">Últimas transacciones</h1>
                    <List />
                </div> */}
            </div>
        </div>
    )
}

export default SingleCliente