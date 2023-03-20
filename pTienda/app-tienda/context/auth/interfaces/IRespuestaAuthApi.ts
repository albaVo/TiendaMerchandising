import { IUsuario } from "@/interfaces/usuarios/IUsuarios";

export interface IRespuestaApiAuth {
    hasError: boolean;
    message?: string;
}

export interface IRespuestaLogin {
    token: string;
    usuario: IUsuario;
}


