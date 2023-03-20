import { PedidosList } from "@/components/pedidos/PedidosList"
import { usePedidos } from "@/hooks/usePedidos";
import { MainLayouts } from "@/layouts"

const IndexPedidosPage = () => {
    const { pedidos, isLoading } = usePedidos('/pedidos');
    console.log("l=", isLoading, "p=", pedidos)
    return (
      <MainLayouts>
        <PedidosList pedidos={pedidos}/>
      </MainLayouts>  
    )
}

export default IndexPedidosPage