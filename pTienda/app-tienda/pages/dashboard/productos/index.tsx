import { DatatableProductos, Navbar, Sidebar } from '@/components/dashboard'
import { useProductos } from '@/hooks/useProductos'

const ProductosAdmin = () => {

    const { productos, isLoading } = useProductos('/productos')
    console.log("l=", isLoading, "p=", productos)

    return (
        <div className='list'>
            <Sidebar/>   
            <div className="listContain">
                <Navbar/>
                <DatatableProductos producto={productos}/>
            </div>
        </div>
    )
}

export default ProductosAdmin