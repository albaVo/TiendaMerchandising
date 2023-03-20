import { DatatableProveedores, Navbar, Sidebar } from '@/components/dashboard'
import { useProveedores } from '@/hooks/useProveedores'

const ProveedoresAdmin = () => {

    const { proveedores, isLoading } = useProveedores('/proveedores')
    console.log("l=", isLoading, "p=", proveedores)

    return (
        <div className='list'>
            <Sidebar/>   
            <div className="listContain">
                <Navbar/>
                <DatatableProveedores proveedor={proveedores}/>
            </div>
        </div>
    )
}

export default ProveedoresAdmin