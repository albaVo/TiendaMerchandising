import { IProducto } from "../productos/IProductos";
import { IProveedor } from "../proveedores/IProveedores";

export interface ICategoria {
    codigo:     string;
    nombre:     string;
    proveedore: IProveedor[];
    productos:  IProducto[];
}

