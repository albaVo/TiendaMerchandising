import useSWR, { SWRConfiguration } from 'swr';
import { IProducto } from '../interfaces/productos/IProductos';


export const useProductos = (url: string, config: SWRConfiguration={}) => {
    console.log(url);
    const { data, error } = useSWR<IProducto[]>(`http://localhost:3000/api${url}`, config);
    console.log("data = ", data, error);
    return {
        productos: data || [],
        isLoading: !error && data,
        isError: error
    }
}