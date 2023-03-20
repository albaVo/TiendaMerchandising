import { DataGrid } from '@mui/x-data-grid'
import Link from 'next/link';
import { FC } from 'react';
import { IProducto } from '@/interfaces/productos/IProductos';
import { Delete, Search, AddBoxSharp } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { AuthContext } from '@/context/auth';
import { useState, useContext } from "react"
import { IProveedor } from '@/interfaces/proveedores/IProveedores';


const columns = [
  { field: "id", headerName: "CODIGO", width: 110 },
  { field: "nombre", headerName: "Proveedor", width: 220 },
  { field: "telefono", headerName: "Teléfono", width: 130 },
  { field: "direccion", headerName: "Dirección", width: 240 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "website", headerName: "Website", width: 190 }
];


interface Props {
  proveedor?: IProveedor[];
}


export const DatatableProveedores:FC<Props> = ({proveedor}) => {

  const rows = proveedor.map((proveedo) => ({
    id: proveedo.codigo,
    nombre: proveedo.nombre,
    telefono: proveedo.telefono,
    direccion: proveedo.direccion,
    email: proveedo.email,
    website: proveedo.website
  }));


  const router = useRouter()

//   const { deleteProducto } = useContext(AuthContext)

//   const handleDelete = async (codigo: string) => {
//     const { hasError, message } = await deleteProducto(codigo)
//     console.log(codigo)

//     if (hasError){
//       // Mostrar error si la eliminación falla
//       console.error(message);
//       return;
//     }

//     // Redirigir al usuario a la página de productos
//     router.replace('/dashboard/productos');
//   }



  const actionColumn = [
    { field: "action", headerName: "Acciones", width: 200, renderCell:({row}) => {
      
      const {id} = row 

      // console.log("valor del codigo: ", id)
      // console.log(row)

      return (
        <div className="cellAction"> 
          <Link href={`/dashboard/proveedores/${id}`}>
            <Search sx={{color: "blue", fontSize: 25}}/>
          </Link> 
          {/* <div className='linkall'>
            <Delete 
              sx={{color: "red", fontSize: 25}}
              onClick={() => handleDelete(id)}
            />
          </div> */}
        </div>
      )
    }}
  ]



  return (
    <div className="datatable">
      <div className="datatableTitle">
        Proveedores
        <Link href={"/dashboard/newProveedor"}>
          <AddBoxSharp sx={{color: "green", fontSize: 35}}/>
        </Link>
      </div>
      <DataGrid className='datagridProveedores'
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />     
    </div>
  )
}

