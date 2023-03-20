import { createContext } from 'react';
import { IUsuario } from '@/interfaces/usuarios/IUsuarios';
import { IRespuestaApiAuth } from './interfaces/IRespuestaAuthApi';

interface ContextProps {
    isLoggedIn: boolean;
    user?: IUsuario;

    //firmas
    loginUser: (email: string, contraseña: string) => Promise<boolean>;
    registerUser: (email: string, contraseña: string, username: string) => Promise<IRespuestaApiAuth>;

    createProducto: (codigo: string, nombre: string, thumbnail: string, tipo: string, precio: string, estado: string, stock: string, codigoCategoria: string) => Promise<IRespuestaApiAuth>
    deleteProducto: (codigo: string) => Promise<IRespuestaApiAuth>

    createCliente: (NIF: string, nombre: string, apellidos: string, telefono: string, direccion: string, ciudad: string) => Promise<IRespuestaApiAuth>
    deleteCliente: (NIF: string) => Promise<IRespuestaApiAuth>
}

export const AuthContext  = createContext( {} as ContextProps );