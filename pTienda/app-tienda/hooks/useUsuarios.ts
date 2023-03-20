import { IUsuario } from '@/interfaces/usuarios/IUsuarios';
import useSWR, { SWRConfiguration } from 'swr';


export const useUsuarios = (url: string, config: SWRConfiguration={}) => {
    console.log(url);
    const { data, error } = useSWR<IUsuario[]>(`http://localhost:3000/api${url}`, config);
    console.log("data = ", data, error);
    return {
        usuarios: data || [],
        isLoading: !error && data,
        isError: error
    }
}