import { DatatablePedidos, Navbar, Sidebar } from "@/components/dashboard"
import { usePedidos } from "@/hooks/usePedidos"

const PedidosAdmin = () => {

    const { pedidos, isLoading } = usePedidos('/pedidos')
    console.log("l=", isLoading, "p=", pedidos)

    return (
        <div className="list">
            <Sidebar/>
            <div className="listContain">
                <Navbar/>
                <DatatablePedidos pedido={pedidos}/>
            </div>
        </div>
    )
}

export default PedidosAdmin