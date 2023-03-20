import { ICliente } from "../clientes/IClientes";

export interface IUsuario {
    id:     string;
    username:   string;
    contraseña: string;
    email:      string;
    twitter?:    string;
    website?:    string;
    isActive?:   boolean;
    roles?:      string[];
    // cliente:    ICliente[];
}
