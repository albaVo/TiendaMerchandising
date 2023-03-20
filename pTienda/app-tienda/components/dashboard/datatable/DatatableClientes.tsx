import { DataGrid } from '@mui/x-data-grid'
import Link from 'next/link';
import { FC, useContext } from 'react';
import { Search, AddBoxSharp, Delete } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { ICliente } from '@/interfaces/clientes/IClientes';
import { AuthContext } from '@/context/auth';


const columns = [
  { field: "id", headerName: "NIF", width: 150 },
  { field: "nombre", headerName: "Nombre", width: 150 },
  { field: "apellidos", headerName: "Apellidos", width: 210 },
  { field: "telefono", headerName: "Teléfono", width: 170 },
  { field: "direccion", headerName: "Dirección", width: 240 },
  { field: "ciudad", headerName: "Ciudad", width: 170 }
];


interface Props {
  cliente?: ICliente[];
}


type ProductData = {
  NIF: string
}



export const DatatableClientes:FC<Props> = ({cliente}) => {

  console.log(cliente)

  const rows = cliente.map((client) => ({
    id: client.NIF,
    nombre: client.nombre,
    apellidos: client.apellidos,
    telefono: client.telefono,
    direccion: client.direccion,
    ciudad: client.ciudad
  }));


  const router = useRouter()

  const { deleteCliente } = useContext(AuthContext)

  const handleDelete = async (NIF: string) => {
    const { hasError, message } = await deleteCliente(NIF)

    if (hasError){
      // Mostrar error si la eliminación falla
      console.error(message);
      return;
    }

    // Redirigir al usuario a la página de productos
    router.replace('/dashboard/clientes');
  }



  const actionColumn = [
    { field: "action", headerName: "Acciones", width: 200, renderCell:({row}) => {
      
      const {id} = row 

      // console.log("valor del codigo: ", id)
      // console.log(row)

      return (
        <div className="cellAction"> 
          <Link href={`/dashboard/clientes/${id}`}>
            <Search sx={{color: "blue", fontSize: 25}}/>
          </Link> 
          <div className='linkall'>
            <Delete 
              sx={{color: "red", fontSize: 25}}
              onClick={() => handleDelete(id)}
            />
          </div>
        </div>
      )
    }}
  ]



  return (
    <div className="datatable">
      <div className="datatableTitle">
        Clientes
        <Link href={"/dashboard/newClient"}>
          <AddBoxSharp sx={{color: "green", fontSize: 35}}/>
        </Link>
      </div>
      <DataGrid className='datagridClientes'
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />     
    </div>
  )
}

