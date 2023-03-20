import { Navbar, Sidebar } from "@/components/dashboard";
import { useCategorias } from "@/hooks/useCategorias";
import { ICategoria } from "@/interfaces/categorias/ICategorias";
import { useRouter } from "next/router";
import { FC } from "react";


interface Props {
    nombre: string;
    categorias?: ICategoria[]
}

const SingleCategoria:FC<Props> = ({categorias}) => {

    const router = useRouter()

    const nombre = router.query

    const {categorias: categori, isLoading} = useCategorias(`/categorias/${nombre.codigo}`)

    console.log("prueba:" ,useCategorias)

    return (
        <div className="single">
            <Sidebar/>
            {/* <div className="singleContainer">
                <Navbar/>
                <div className="topsingle">
                    <div className="leftsingle">
                        <div className="editButton">Editar</div>
                        <h1 className="titlesingle">Informacion</h1>
                        <div className="itemsSingle">
                            <div className="detailssingleCliente">
                                {categori?.map((categoria: ICategoria) => (
                                    <>
                                    <h1 className="itemTitleSingleC">{categoria.nombre}</h1>
                                    <div className="details-wrapperCliente">
                                        <div className="detailitemsingle">
                                            <span className="itemKeyC">Codigo:</span>
                                            <span className="itemValueC">{categoria.codigo}</span>
                                        </div>
                                    </div>
                                    <div className="pedidos-wrapper">
                                        <div className="detailitemsingle">
                                            {categoria.proveedore.map((proveedor) => (
                                                <>
                                                    <span className="itemKeyP">Proveedor:</span>
                                                    <ul key={proveedor.codigo}>
                                                        <li>
                                                            <span className="itemKeyC">Codigo:</span>
                                                            <span className="itemValueC">{proveedor.codigo}</span>
                                                        </li>
                                                        <li>
                                                            <span className="itemKeyC">Nombre:</span>
                                                            <span className="itemValueC">{proveedor.nombre}</span>
                                                        </li>
                                                    </ul>
                                                </>
                                            ))}
                                            <span className="itemKeyP">Producto:</span>
                                            {categoria.productos.map((producto) => (
                                                <>
                                                    <ul key={producto.codigo}>
                                                        <li>
                                                            <span className="itemKeyC">Codigo:</span>
                                                            <span className="itemValueC">{producto.codigo}</span>
                                                        </li>
                                                        <li>
                                                            <span className="itemKeyC">Nombre:</span>
                                                            <span className="itemValueC">{producto.nombre}</span>
                                                        </li>
                                                    </ul>
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default SingleCategoria