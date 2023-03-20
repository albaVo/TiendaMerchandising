import { Sidebar, Navbar } from "@/components/dashboard"
import { AuthContext } from "@/context/auth"
import { DriveFolderUploadOutlined, ErrorOutline } from "@mui/icons-material"
import { Chip, TextField } from "@mui/material"
import { useRouter } from "next/router"
import { useState, useContext, useEffect } from "react"
import { useForm } from "react-hook-form"


const images = [
    "https://img.freepik.com/iconos-gratis/prisionero_318-198081.jpg",
    "https://img.freepik.com/iconos-gratis/motociclista_318-210119.jpg",
    "https://img.freepik.com/iconos-gratis/avatar_318-158391.jpg?w=2000",
    "https://img.freepik.com/iconos-gratis/policia_318-198076.jpg",
    "https://img.freepik.com/iconos-gratis/usuario_318-219682.jpg"
]

const RandomImage = () => {
    const [currentImage, setCurrentImage] = useState(images[0])
    
    useEffect(() => {
        const interval = setInterval(() => {
        const index = Math.floor(Math.random() * images.length);
        setCurrentImage(images[index]);
        }, 3000); // Cambia la imagen cada 3 segundos.
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
          <img src={currentImage} alt="Random" />
        </div>
    );
}



type ClientData = {
    NIF: string,
    nombre: string,
    apellidos: string,
    telefono: string,
    direccion: string,
    ciudad: string
}


const NewClient = () => {

    const router = useRouter()

    const { createCliente } = useContext(AuthContext)

    const { register, handleSubmit, formState:{errors} } = useForm<ClientData>()

    const [ showError, setShowError ] = useState(false)
    const [ errorMessage, setErrorMessage ] = useState('')


    const onCreateCliente = async ( InputData: ClientData ) => {
        setShowError(false)
        const { NIF, nombre, apellidos, telefono, direccion, ciudad } = InputData
        const { hasError, message } = await createCliente(NIF, nombre, apellidos, telefono, direccion, ciudad )
        console.log(message)

        if (hasError){
            setShowError(true);
            setErrorMessage(message || '');
            setTimeout( () => setShowError(false), 3000);
            return;
        }

        router.replace('/dashboard/clientes');
    }
    


  return (
    <div className="new">
        <Sidebar/>
        <div className="newContainer">
            <Navbar />
            <div className="topnew">
                <h1>Añadir Nuevo Cliente</h1>
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
                    <RandomImage/>
                </div>
                <div className="rightnew">
                    <form onSubmit={ handleSubmit(onCreateCliente) } noValidate>
                        <div className="formInput">
                            <TextField className="input"
                                { ...register('NIF', {
                                    required: 'NIF obligatorio'
                                })}
                                error={!!errors.NIF}
                                helperText={errors.NIF?.message}
                                label="NIF" variant='filled' fullWidth
                            />
                        </div>
                        <div className="formInput">
                            <TextField className="input"
                                { ...register('nombre', {
                                    required: 'Nombre obligatorio',
                                })}
                                error={!!errors.nombre}
                                helperText={errors.nombre?.message}
                                label="Nombre" variant='filled' fullWidth
                            />
                        </div>
                        <div className="formInput">
                            <TextField className="input"
                                { ...register('apellidos', {
                                    required: 'Apellidos obligatorios'
                                })}
                                error={!!errors.apellidos}
                                helperText={errors.apellidos?.message}
                                label="Apellidos" variant='filled' fullWidth 
                            />
                        </div>
                        <div className="formInput">
                            <TextField className="input"
                                { ...register('telefono', {
                                    required: 'Telefono obligatorio'
                                })}
                                error={!!errors.telefono}
                                helperText={errors.telefono?.message}
                                label="Telefono" variant='filled' fullWidth
                            />
                        </div>
                        <div className="formInput">
                            <TextField className="input"
                                { ...register('direccion', {
                                    required: 'Direccion obligatoria',
                                })}
                                error={!!errors.direccion}
                                helperText={errors.direccion?.message}
                                label="Direccion" variant='filled' fullWidth
                            />
                        </div>
                        <div className="formInput">
                            <TextField className="input"
                                { ...register('ciudad', {
                                    required: 'Ciudad obligatoria'
                                })}
                                error={!!errors.ciudad}
                                helperText={errors.ciudad?.message}
                                label="Ciudad" variant='filled' fullWidth
                            />
                        </div>
                        <button className="send">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewClient