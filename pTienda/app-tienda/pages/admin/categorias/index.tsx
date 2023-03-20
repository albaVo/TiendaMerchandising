import { MainLayouts } from "@/layouts"
import { useCategorias } from "@/hooks/useCategorias";
import { CategoriasList } from "@/components/categorias/CategoriasList";

const IndexCategoriasPage = () => {
    const { categorias, isLoading } = useCategorias('/categorias');
    console.log("l=", isLoading, "c=", categorias)
    return (
      <MainLayouts>
        <CategoriasList categorias={categorias}/>
      </MainLayouts>  
    )
}

export default IndexCategoriasPage