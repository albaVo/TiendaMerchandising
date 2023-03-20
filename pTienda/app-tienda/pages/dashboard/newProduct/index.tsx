/* eslint-disable @next/next/no-img-element */
import { Sidebar, Navbar } from "@/components/dashboard"
import { AuthContext } from "@/context/auth"
import { DriveFolderUploadOutlined, ErrorOutline } from "@mui/icons-material"
import { Chip, TextField } from "@mui/material"
import { useRouter } from "next/router"
import { useState, useContext } from "react"
import { useForm } from "react-hook-form"


type ProductData = {
    codigo: string,
    nombre: string,
    thumbnail: string,
    tipo: string,
    // tallas: string,
    precio: string,
    estado: string,
    stock: string,
    codigoCategoria: string
}


const NewProduct = () => {

    const router = useRouter()

    const { createProducto } = useContext(AuthContext)

    const { register, handleSubmit, formState:{errors} } = useForm<ProductData>()

    const [ showError, setShowError ] = useState(false)
    const [ errorMessage, setErrorMessage ] = useState('')


    const onCreateProducto = async ( InputData: ProductData ) => {
        setShowError(false)
        const { codigo, nombre, thumbnail, tipo, precio, estado, stock, codigoCategoria } = InputData
        const { hasError, message } = await createProducto(codigo, nombre, thumbnail, tipo, precio, estado, stock, codigoCategoria )
        console.log(message)

        if (hasError){
            setShowError(true);
            setErrorMessage(message || '');
            setTimeout( () => setShowError(false), 3000);
            return;
        }

        router.replace('/dashboard/productos');
    }
    

    // const [file, setFile] = useState("")
    const [imageUrl, setImageUrl] = useState("");


  return (
    <div className="new">
        <Sidebar/>
        <div className="newContainer">
            <Navbar />
            <div className="topnew">
                <h1>Añadir Nuevo Producto</h1>
                <Chip 
                    label="Datos no validos"
                    color="error"
                    icon= {<ErrorOutline />}
                    className="fadeIn"
                    sx={{ display: showError ? 'flex': 'none'}}
                />
            </div>
            <div className="bottomnew">
                <div className="leftnew">
                    <img
                        src={imageUrl || "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
                        alt=""
                    />

                </div>
                <div className="rightnew">
                    <form onSubmit={ handleSubmit(onCreateProducto) } noValidate>
                        <div className="formInput">
                            <TextField className="input"
                                { ...register('codigo', {
                                    required: 'Codigo obligatorio'
                                })}
                                error={!!errors.codigo}
                                helperText={errors.codigo?.message}
                                label="Codigo" variant='filled' fullWidth
                            />
                        </div>
                        <div className="formInput">
                            <TextField className="input"
                                { ...register('nombre', {
                                    required: 'Nombre obligatorio',
                                    minLength: { value: 3, message: 'Minimo 3 caracteres' }
                                })}
                                error={!!errors.nombre}
                                helperText={errors.nombre?.message}
                                label="Nombre" variant='filled' fullWidth
                            />
                        </div>
                        <div className="formInput">
                            <TextField className="input"
                                { ...register('thumbnail', {
                                    required: 'Enlace de imagen obligatoria'
                                })}
                                error={!!errors.thumbnail}
                                helperText={errors.thumbnail?.message}
                                label="Enlace Imagen" variant='filled' fullWidth 
                                type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}
                            />
                        </div>
                        <div className="formInput">
                            <TextField className="input"
                                { ...register('tipo', {
                                    required: 'Tipo obligatorio'
                                })}
                                error={!!errors.tipo}
                                helperText={errors.tipo?.message}
                                label="Tipo" variant='filled' fullWidth
                            />
                        </div>
                        {/* <div className="formInput">
                            <TextField className="input"
                                { ...register('tallas', {
                                    required: 'Talla obligatoria',
                                    validate: {
                                        isTallasArray: value => Array.isArray(value) || value.split(",").every(talla => talla.trim().length > 0)
                                    }
                                })}
                                error={!!errors.tallas}
                                helperText={errors.tallas?.message}
                                label="Tallas" type="text" variant='filled' fullWidth multiline
                            />
                        </div> */}
                        <div className="formInput">
                            <TextField className="input"
                                { ...register('precio', {
                                    required: 'Precio obligatorio',
                                })}
                                error={!!errors.precio}
                                helperText={errors.precio?.message}
                                label="Precio" variant='filled' fullWidth
                            />
                        </div>
                        <div className="formInput">
                            <TextField className="input"
                                { ...register('estado', {
                                    required: 'Estado obligatorio'
                                })}
                                error={!!errors.estado}
                                helperText={errors.estado?.message}
                                label="Estado" variant='filled' fullWidth
                            />
                        </div>
                        <div className="formInput">
                            <TextField className="input"
                                { ...register('stock', {
                                    required: 'Stock obligatorio',
                                })}
                                error={!!errors.stock}
                                helperText={errors.stock?.message}
                                label="Stock" variant='filled' fullWidth
                            />
                        </div>
                        <div className="formInput">
                            <TextField className="input"
                                { ...register('codigoCategoria', {
                                    required: 'Codigo de la categoria obligatorio'
                                })}
                                error={!!errors.codigoCategoria}
                                helperText={errors.codigoCategoria?.message}
                                label="Codigo Categoria" variant='filled' fullWidth
                            />
                        </div>
                        {/* <div className="formInput">
                            <label htmlFor="file"  className="labelfile">
                                Image: <DriveFolderUploadOutlined className="iconfile" sx={{fontSize: 32}}/>
                            </label>
                            <input 
                                type="file" 
                                id="file" 
                                style={{display: "none"}} 
                                onChange={e=>setFile(e.target.files[0])}
                            />
                        </div> */}
                        <button className="send">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewProduct