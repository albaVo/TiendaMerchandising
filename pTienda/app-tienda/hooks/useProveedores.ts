import { IProveedor } from '@/interfaces/proveedores/IProveedores';
import useSWR, { SWRConfiguration } from 'swr';


export const useProveedores = (url: string, config: SWRConfiguration={}) => {
    console.log(url);
    const { data, error } = useSWR<IProveedor[]>(`http://localhost:3000/api${url}`, config);
    console.log("data = ", data, error);
    return {
        proveedores: data || [],
        isLoading: !error && data,
        isError: error
    }
}