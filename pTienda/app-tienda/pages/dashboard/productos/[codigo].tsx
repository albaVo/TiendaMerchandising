/* eslint-disable @next/next/no-img-element */
import { ChartProductos, List, Navbar, Sidebar } from "@/components/dashboard";
import { useProductos } from "@/hooks/useProductos";
import { IProducto } from "@/interfaces/productos/IProductos";
import { useRouter } from "next/router";
import { FC } from "react";


interface Props {
    nombre: string;
    productos?: IProducto[]
}

const SingleProducto:FC<Props> = ({productos}) => {

    const router = useRouter()
    console.log(router)

    const nombre = router.query

    const {productos: product, isLoading} = useProductos(`/productos/${nombre.codigo}`)
    console.log(product)

    return (
        <div className="single">
            <Sidebar/>
            <div className="singleContainer">
                <Navbar/>
                <div className="topsingle">
                    <div className="leftsingleProducto">
                        <div className="editButton">Editar</div>
                        <h1 className="titlesingle">Informacion</h1>
                        <div className="itemsSingle">
                            <img className="itemImgProducto"
                                src={product?.thumbnail || "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
                                alt=""
                            />
                            <div className="detailssingle">
                                <h1 className="itemTitleSingle">{product.nombre}</h1>
                                <div className="detailitemsingle">
                                    <span className="itemKey">Tipo:</span>
                                    <span className="itemValue">{product.tipo}</span>
                                </div>
                                <div className="detailitemsingle">
                                    <span className="itemKey">Precio:</span>
                                    <span className="itemValue">{product.precio}</span>
                                </div>
                                <div className="detailitemsingle">
                                    <span className="itemKey">Stock:</span>
                                    <span className="itemValue">{product.stock}</span>
                                </div>
                                <div className="detailitemsingle">
                                    {/* <span className="itemValue">{product.estado}</span> */}
                                    <span className={`statusProducto ${product.estado}`}>{product.estado}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rightsingle">
                        <ChartProductos/>
                    </div>
                </div>
                <div className="bottomsingle">
                    <h1 className="titlesingle">Últimas transacciones</h1>
                    <List />
                </div>
            </div>
        </div>
    )
}

export default SingleProducto