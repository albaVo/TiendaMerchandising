import { DataGrid } from '@mui/x-data-grid'
import Link from 'next/link';
import { FC } from 'react';
import { IProducto } from '@/interfaces/productos/IProductos';
import { Delete, Search, AddBoxSharp } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { AuthContext } from '@/context/auth';
import { useState, useContext } from "react"


const columns = [
  { field: "id", headerName: "CODIGO", width: 150 },
  { field: "nombre", headerName: "Producto", width: 280 },
  { field: "tipo", headerName: "Tipo", width: 190 },
  { field: "precio", headerName: "Precio", width: 120 },
  { field: "stock", headerName: "Stock", width: 120 },
  { field: "estado", headerName: "Estado", width: 170 }
];


interface Props {
  producto?: IProducto[];
}


type ProductData = {
  codigo: string
}



export const DatatableProductos:FC<Props> = ({producto}) => {

  console.log(producto)

  const rows = producto.map((product) => ({
    id: product.codigo,
    nombre: product.nombre,
    tipo: product.tipo,
    precio: product.precio,
    stock: product.stock,
    estado: product.estado
  }));


  const router = useRouter()

  const { deleteProducto } = useContext(AuthContext)

  const handleDelete = async (codigo: string) => {
    const { hasError, message } = await deleteProducto(codigo)
    console.log(codigo)

    if (hasError){
      // Mostrar error si la eliminación falla
      console.error(message);
      return;
    }

    // Redirigir al usuario a la página de productos
    router.replace('/dashboard/productos');
  }



  const actionColumn = [
    { field: "action", headerName: "Acciones", width: 200, renderCell:({row}) => {
      
      const {id} = row 

      // console.log("valor del codigo: ", id)
      // console.log(row)

      return (
        <div className="cellAction"> 
          <Link href={`/dashboard/productos/${id}`}>
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
        Productos
        <Link href={"/dashboard/newProduct"}>
          <AddBoxSharp sx={{color: "green", fontSize: 35}}/>
        </Link>
      </div>
      <DataGrid className='datagridProductos'
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />     
    </div>
  )
}

