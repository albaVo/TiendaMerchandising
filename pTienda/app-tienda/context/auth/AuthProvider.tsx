import tiendaApi from "@/api/TiendaApi";
import { IUsuario } from "@/interfaces/usuarios/IUsuarios";
import axios from "axios";
import Cookies from "js-cookie";
import { FC, useEffect, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { IRespuestaApiAuth } from "./interfaces/IRespuestaAuthApi";

export interface AuthState {
    isLoggedIn: boolean,
    user?: IUsuario
}

const AUTH_INITIAL_STATE: AuthState = {
    isLoggedIn: false,
    user: undefined
}

interface Props {
    children: any
}

export const AuthProvider:FC<{children:any}> = ({children}) => {

    const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE)

    useEffect( () => {
        checkToken()
    }, [])

    const checkToken = async() => {
        //
    }



    // USUARIOS
    const loginUser = async (email: string, contraseña: string):Promise<boolean> => {
        try {
            const { data } = await tiendaApi.post('/auth/login', {email, contraseña})
            // console.log(data)
            const { token, user } = data
            // console.log(user)
            Cookies.set('token', token)
            Cookies.set('username', user.username)
            Cookies.set('rol', user.roles)
            
            dispatch({ type: '[Auth] - Login', payload: user })
            
            return true;
            
        } catch (error) {
            return false;
        }
    }

    const registerUser = async (email: string, contraseña: string, username: string):Promise<IRespuestaApiAuth> => {
        try {
            const { data } = await tiendaApi.post('/auth/register', {email, username, contraseña})
            // console.log(data)
            const { token, user } = data
            Cookies.set('token', token)
            Cookies.set('rol', user.roles)
            dispatch({ type: '[Auth] - Login', payload: user })
            return {
                hasError: false,
                message: 'Usuario creado con éxito',
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return {
                    hasError: true,
                    message: error.response?.data.message
                }
            }
            // no es error de axios
            return {
                hasError: true,
                message: 'No se puede crear el usuario, inténtalo de nuevo'
            }
        }
    }



    // PRODUCTOS
    const createProducto = async (codigo: string, nombre: string, thumbnail: string, tipo: string, precio: string, estado: string, stock: string, codigoCategoria: string):Promise<IRespuestaApiAuth> => {
        try {
            const { data } = await tiendaApi.post('/productos', {codigo, nombre, thumbnail, tipo, precio, estado, stock, codigoCategoria})
            return {
                hasError: false,
                message: 'Producto creado con éxito'
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return {
                    hasError: true,
                    message: error.response?.data.message
                }
            }
            // no es error de axios
            return {
                hasError: true,
                message: 'No se puede crear el producto, inténtalo de nuevo'
            }
        }
    }

    const deleteProducto = async (codigo: string):Promise<IRespuestaApiAuth> => {
        try {
            const { data } = await tiendaApi.delete(`/productos/${codigo}`)
            return {
                hasError: false,
                message: 'Producto eliminado con éxito'
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return {
                    hasError: true,
                    message: error.response?.data.message
                }
            }
            // no es error de axios
            return {
                hasError: true,
                message: 'No se puede elimianar el producto, inténtalo de nuevo'
            }
        }
    }



    // CLIENTES
    const createCliente = async (NIF: string, nombre: string, apellidos: string, telefono: string, direccion: string, ciudad: string):Promise<IRespuestaApiAuth> => {
        try {
            const { data } = await tiendaApi.post('/clientes', {NIF, nombre, apellidos, telefono, direccion, ciudad})
            return {
                hasError: false,
                message: 'Cliente creado con éxito'
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return {
                    hasError: true,
                    message: error.response?.data.message
                }
            }
            // no es error de axios
            return {
                hasError: true,
                message: 'No se puede crear el cliente, inténtalo de nuevo'
            }
        }
    }

    const deleteCliente = async (NIF: string):Promise<IRespuestaApiAuth> => {
        try {
            const { data } = await tiendaApi.delete(`/clientes/${NIF}`)
            return {
                hasError: false,
                message: 'Cliente eliminado con éxito'
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return {
                    hasError: true,
                    message: error.response?.data.message
                }
            }
            // no es error de axios
            return {
                hasError: true,
                message: 'No se puede elimianar el cliente, inténtalo de nuevo'
            }
        }
    }


    
    return (
        <AuthContext.Provider value={{
            ...state,
            loginUser,
            registerUser,
            createProducto,
            deleteProducto,
            createCliente,
            deleteCliente
        }}>
            { children }
        </AuthContext.Provider>
    )
}