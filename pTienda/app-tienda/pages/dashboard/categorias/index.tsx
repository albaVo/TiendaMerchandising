import { DatatableCategorias, Navbar, Sidebar } from "@/components/dashboard"
import { useCategorias } from "@/hooks/useCategorias"


const CategoriasAdmin = () => {

    const { categorias, isLoading } = useCategorias('/categorias')
    console.log("l=", isLoading, "c=", categorias)

    return (
        <div className="list">
            <Sidebar/>
            <div className="listContain">
                <Navbar/>
                <DatatableCategorias categoria={categorias}/>
            </div>
        </div>
    )
}

export default CategoriasAdmin