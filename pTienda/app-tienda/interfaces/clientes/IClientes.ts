import { IPedido } from "../pedidos/IPedidos";

export interface ICliente {
    NIF:       string;
    nombre:    string;
    apellidos: string;
    telefono:  string;
    direccion: string;
    ciudad:    string;
    pedidos:   IPedido[];
}