import { MainLayouts } from "@/layouts"
import { useProveedores } from "@/hooks/useProveedores";
import { ProveedoresList } from "@/components/proveedores/ProveedoresList";

const IndexProveedoresPage = () => {
    const { proveedores, isLoading } = useProveedores('/proveedores');
    console.log("l=", isLoading, "p=", proveedores)
    return (
      <MainLayouts>
        <ProveedoresList proveedores={proveedores}/>
      </MainLayouts>  
    )
}

export default IndexProveedoresPage