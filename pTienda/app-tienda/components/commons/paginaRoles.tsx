import { IUsuario } from "@/interfaces/usuarios/IUsuarios";
import Link from "next/link";
import { FC } from "react";


interface Props {
  usuario: IUsuario;
}

export const Pagina: FC<Props> = ({ usuario }) => {
  return (
    <>
      {usuario.roles.includes("admin") ? (
        <Link href="/dashboard"></Link>
      ) : (
        <Link href="/"></Link>
      )}
    </>
  );
};
