import { IUsuario } from '@/interfaces/usuarios/IUsuarios';
import { DataGrid } from '@mui/x-data-grid'
import Link from 'next/link';
import { FC } from 'react';

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "username", headerName: "User", width: 150 },
  { field: "email", headerName: "Email", width: 240 },
  { field: "twitter", headerName: "Twitter", width: 150 },
  { field: "website", headerName: "Website", width: 230 },
  { field: "isActive", headerName: "Activo", width: 100 },
  { field: "roles", headerName: "Rol", width: 120 }
];


interface Props {
  usuarios?: IUsuario[]
}

export const Datatable:FC<Props> = ({usuarios}) => {

  const rows = usuarios.map((usuario) => ({
    id: usuario.id,
    username: usuario.username,
    email: usuario.email,
    twitter: usuario.twitter,
    website: usuario.website,
    isActive: usuario.isActive,
    roles: usuario.roles ? usuario.roles.join(", ") : "",
  }));


  const actionColumn = [
    { field: "action", headerName: "Acciones", width: 200, renderCell:({row}) => {
      
      const {id} = row as IUsuario

      return (
        <div className="cellAction">
          <Link href={`/dashboard/users/${id}`} className="linkall">
            <div className="viewButton">Ver</div>
          </Link>        
          <div className="deleteButton">Borrar</div>
        </div>
      )
    }}
  ]


  return (
    <div className="datatable">
      <div className="datatableTitle">
        Usuarios
        <Link href={"/dashboard/users"} className="linkall linknew">
          Añadir Nuevo
        </Link>
      </div>
      <DataGrid className='datagridUsuarios'
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

