import { Box, Grid, Typography, TextField, Button, Link, Icon, Chip } from '@mui/material';
import NextLink from 'next/link';
import { AuthLayout } from '@/layouts';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { AuthContext } from '@/context/auth/AuthContext';
import { ErrorOutline } from '@mui/icons-material';
import { validations } from '@/utils';
import { getCurrentUser } from '@/utils/getCurrentUser';
import Cookies from 'js-cookie';

interface IRespuestaLogin {
    token: string;
    email: string;
    contraseña: string
}

type FormData = {
    email: string,
    contraseña: string,
}

const LoginPage = () => {

    const router = useRouter()

    const { loginUser } = useContext(AuthContext)
    const { register, handleSubmit, formState:{errors} } = useForm<FormData>();
    
    const [ showError, setShowError ] = useState(false)

    const onLoginUser = async ({email, contraseña}: FormData) => {
        
        setShowError(false);
        const isValidLogin = await loginUser(email, contraseña)
        console.log(email, contraseña)

        if (!isValidLogin) {
            setShowError(true)
            setTimeout( () => setShowError(false), 3000)
            return
        }
        
        // navegar a la pantalla en la que estaba el usuario
        // router.push('/')
        // router.replace('/')
        
        // const currentUser = await getCurrentUser()

        // console.log("usurio:", currentUser)

        // if (currentUser && currentUser.roles.includes('admin')) {
        //     router.push('/dashboard')
        // } else {
        //     router.push('/')
        // }

        const roles = Cookies.get('rol')

        if ( roles == 'admin' ) {
            router.replace('/dashboard')
        } else {
            router.replace('/user')
        }

        // if ( roles == 'usuario' ) {
        //     router.replace('/')
        // }
    }

    return (
        <AuthLayout title={'Ingresar'}>
            <form onSubmit={ handleSubmit(onLoginUser) } noValidate>
                <Box sx={{ width: 500, padding: '55px 55px 37px 55px', background: 'linear-gradient( to bottom, #7579ff, #b224ef)', height: 600, marginTop: 20, borderRadius: 10}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <AccountBalanceIcon sx={{fontSize: 60, color: 'blackgray', width: 120, height: 100, marginLeft: 17, marginBottom: 4, padding: '21px', borderRadius: 50, backgroundColor: 'white', display: 'flex', justifyContent:'center'}}/>
                            <Typography variant='h3' component='h3' sx={{fontFamily: 'Poppins-Medium', fontSize: 30, lineHeight: 1.2, textAlign: 'center', textTransform: 'uppercase', color: '#fff', marginBottom: 2}}>Iniciar Sesión</Typography>
                            <Chip 
                                label="No se reconoce usuario/contraseña"
                                color="error"
                                icon= {<ErrorOutline />}
                                className="fadeIn"
                                sx={{ display: showError ? 'flex': 'none'}}
                            />
                        </Grid>

                        <Grid item xs={12} sx={{display: 'inline-flex', marginBottom: 2}}>
                            <EmailIcon sx={{marginTop: 2, marginRight: 2, color: 'white'}}/>
                            <TextField 
                                { ...register('email', {
                                    required: 'Correo electrónico obligatorio',
                                    validate: (val) => validations.isEmail(val)
                                })}
                                error={!!errors.email}
                                helperText={errors.email?.message}
                                label="Correo Electronico" type="email" variant='filled' fullWidth
                            />
                        </Grid>

                        <Grid item xs={12} sx={{display: 'inline-flex', marginBottom: 3}}>
                            <LockIcon sx={{marginTop: 2, marginRight: 2, color: 'white'}}/>
                            <TextField 
                                { ...register('contraseña', {
                                    required: 'Contraseña obligatoria',
                                    minLength: { value: 6, message: 'Minimo 6 caracteres' }
                                })}
                                error={!!errors.contraseña}
                                helperText={errors.contraseña?.message}
                                label="Contraseña" type="password" variant='filled' fullWidth
                            />
                            <TextField
                                sx={{ display: showError ? 'flex': 'none'}}
                                //  value =  {...register('totken') }
                            />
                        </Grid>

                        <Grid item xs={12} sx={{marginBottom: 2}}>
                            {/* <Link href='/dashboard' passHref component={NextLink} underline='always' sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                                <Button 
                                    type='submit'
                                    sx={{fontFamily: 'Poppins-Medium', fontSize: 16, color:'black', padding: '0 20px', height: 50, borderRadius: 25, backgroundColor: 'whitesmoke'}}
                                > Entrar
                                </Button>
                            </Link> */}
                            <Button 
                                type='submit'
                                sx={{fontFamily: 'Poppins-Medium', fontSize: 16, color:'black', padding: '0 20px', height: 50, borderRadius: 25, backgroundColor: 'whitesmoke', marginLeft: 17}}
                            > Entrar
                            </Button>
                        </Grid>

                        <Grid item xs={12} display='flex' justifyContent='center'>
                            <Link href='/auth/register' passHref component={NextLink} underline='always' sx={{color: 'whitesmoke'}}>
                                ¿No tienes cuenta? <span id='black'>Regístrate</span>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </AuthLayout>
    )
}

export default LoginPage