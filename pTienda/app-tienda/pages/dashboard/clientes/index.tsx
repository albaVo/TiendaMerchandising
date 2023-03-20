import { DatatableClientes, Navbar, Sidebar } from "@/components/dashboard"
import { useClientes } from "@/hooks/useClientes"


const ClientesAdmin = () => {

    const { clientes, isLoading } = useClientes('/clientes')
    console.log("l=", isLoading, "c=", clientes)

    return (
        <div className="list">
            <Sidebar/>
            <div className="listContain">
                <Navbar/>
                <DatatableClientes cliente={clientes}/>
            </div>
        </div>
    )
}

export default ClientesAdmin