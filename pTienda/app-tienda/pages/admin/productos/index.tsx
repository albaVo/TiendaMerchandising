import { MainLayouts } from "@/layouts"
import { useProductos } from '@/hooks/useProductos'

const IndexProductosPage = () => {
  const { productos, isLoading } = useProductos('/productos')
  console.log("l=", isLoading, "p=", productos)
  return (
    <MainLayouts>
      
    </MainLayouts>
    
  )
}

export default IndexProductosPage