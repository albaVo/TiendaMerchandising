import { PublicLayouts } from "@/layouts"
import { useCategorias } from "@/hooks/useCategorias";
import { CategoriasList } from "@/components/categorias/CategoriasList";

const IndexCategoriasPage = () => {
    const { categorias, isLoading } = useCategorias('/categorias');
    console.log("l=", isLoading, "c=", categorias)
    return (
      <PublicLayouts>
        <h2 id="seccion">Sección de Categorías</h2>
        <CategoriasList categorias={categorias}/>
      </PublicLayouts>  
    )
}

export default IndexCategoriasPage