import { ProductoDetalle } from "@/components/productos";
import { useProductos } from "@/hooks/useProductos";
import { PublicLayouts } from "@/layouts";
import { useRouter } from "next/router";

interface Props {
    nombre: string
}

const ProductoPage = () =>  {
    const router = useRouter();
    console.log(router);

    const nombre = router.query;

    // renombrando la variable productos por producto
    const { productos:producto, isLoading } = useProductos(`/productos/${nombre.codigo}`);
    console.log(producto)
    
    return (
        <PublicLayouts>
            {/* <h2>detalle del producto {`${router.query.nombre}`}</h2> */}
            <ProductoDetalle producto={producto}/>
        </PublicLayouts>
    )
}

export default ProductoPage