import { DataGrid } from '@mui/x-data-grid'
import Link from 'next/link';
import { FC, useContext } from 'react';
import { Search, AddBoxSharp, Delete } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { ICliente } from '@/interfaces/clientes/IClientes';
import { AuthContext } from '@/context/auth';
import { ICategoria } from '@/interfaces/categorias/ICategorias';


const columns = [
  { field: "id", headerName: "CODIGO", width: 550 },
  { field: "nombre", headerName: "Proveedor", width: 550 }
];


interface Props {
  categoria?: ICategoria[];
}


// type CategoryData = {
//   codigo: string
// }



export const DatatableCategorias:FC<Props> = ({categoria}) => {

  const rows = categoria.map((categori) => ({
    id: categori.codigo,
    nombre: categori.nombre
  }));


  const router = useRouter()

//   const { deleteCliente } = useContext(AuthContext)

//   const handleDelete = async (NIF: string) => {
//     const { hasError, message } = await deleteCliente(NIF)

//     if (hasError){
//       // Mostrar error si la eliminación falla
//       console.error(message);
//       return;
//     }

//     // Redirigir al usuario a la página de productos
//     router.replace('/dashboard/clientes');
//   }



  const actionColumn = [
    { field: "action", headerName: "Acciones", width: 200, renderCell:({row}) => {
      
      const {id} = row 

      return (
        <div className="cellAction"> 
          <Link href={`/dashboard/categorias/${id}`}>
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
        Categorias
        <Link href={"/dashboard/newCategoria"}>
          <AddBoxSharp sx={{color: "green", fontSize: 35}}/>
        </Link>
      </div>
      <DataGrid className='datagridCategorias'
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />     
    </div>
  )
}

