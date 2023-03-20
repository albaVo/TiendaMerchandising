import { ClientesList } from "@/components/clientes/ClientesList"
import { MainLayouts } from "@/layouts"
import { useClientes } from "@/hooks/useClientes"

const IndexClientesPage = () => {
    const { clientes, isLoading } = useClientes('/clientes');
    console.log("l=", isLoading, "c=", clientes)
    return (
      <MainLayouts>
        <ClientesList clientes={clientes}/>
      </MainLayouts>  
    )
}

export default IndexClientesPage