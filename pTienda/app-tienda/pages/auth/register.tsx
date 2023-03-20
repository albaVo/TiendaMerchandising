import { Box, Grid, Typography, TextField, Button, Link, Input, Chip } from '@mui/material';
import NextLink from 'next/link';
import { AuthLayout } from '@/layouts';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LanguageIcon from '@mui/icons-material/Language';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { AuthContext } from '@/context/auth';
import { ErrorOutline } from '@mui/icons-material';
import { validations } from '@/utils';
import tiendaApi from '@/api/TiendaApi';

interface IRespuestaRegister {
    token: string;
    email: string;
    contraseña: string;
    username: string;
    isActive: boolean;
    roles: String[]
}

type UserData = {
    email: string,
    contraseña: string,
    username: string
} 

const RegisterPage = () => {

    const router = useRouter()

    const { registerUser } = useContext(AuthContext)

    const { register, handleSubmit, formState:{errors} } = useForm<UserData>();

    const [ showError, setShowError ] = useState(false)
    const [ errorMessage, setErrorMessage ] = useState('')

    const onRegisterUser = async ( InputData: UserData ) => { 
        // const { email, contraseña, username } = InputData
        // console.log(InputData)

        // try {
        //     // const { data } = await tiendaApi.get<IRespuestaRegister>('/auth')
        //     const { data } = await tiendaApi.post<IRespuestaRegister>('/auth/register', InputData)
        //     console.log(data)
        // } catch (error) {
        //     console.log('Error', error)
        // }
        
        setShowError(false);
        const { email, contraseña, username } = InputData;
        const { hasError, message } = await registerUser(email, contraseña, username)
        console.log(message);
        
        if (hasError){
            setShowError(true);
            setErrorMessage(message || '');
            setTimeout( () => setShowError(false), 3000);
            return;
        }

        router.replace('/user');
        // router.push('/');
    }

    return (
        <AuthLayout title={'Crear cuenta'}>
            <form onSubmit={ handleSubmit(onRegisterUser) } noValidate>
                <Box sx={{ width: 520, padding: '55px 55px 37px 55px', background: 'linear-gradient( to bottom, #EE2222, #E07DBA)', height: 660, marginTop: 22, borderRadius: 10}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <AccountBalanceIcon sx={{fontSize: 60, color: 'blackgray', width: 120, height: 100, marginLeft: 19, marginBottom: 4, padding: '21px', borderRadius: 50, backgroundColor: 'white', display: 'flex', justifyContent:'center'}}/>
                            <Typography variant='h3' component='h3' sx={{fontFamily: 'Poppins-Medium', fontSize: 30, lineHeight: 1.2, textAlign: 'center', textTransform: 'uppercase', color: '#fff', marginBottom: 2}}>Crear cuenta</Typography>
                            <Chip 
                                label="Datos no validos"
                                color="error"
                                icon= {<ErrorOutline />}
                                className="fadeIn"
                                sx={{ display: showError ? 'flex': 'none'}}
                            />
                        </Grid>

                        <Grid item xs={12} sx={{display: 'inline-flex', marginBottom: 2}}>
                            <PersonIcon sx={{marginTop: 2, marginRight: 2, color: 'white'}}/>
                            <TextField 
                                { ...register('username', {
                                    required: 'Nombre de usuario obligatorio'
                                })}
                                error={!!errors.username}
                                helperText={errors.username?.message}
                                label="Nombre Usuario" variant='filled' fullWidth
                            />
                        </Grid>

                        <Grid item xs={12} sx={{display: 'inline-flex', marginBottom: 3}}>
                            <EmailIcon sx={{marginTop: 2, marginRight: 2, color: 'white'}}/>
                            <TextField 
                                { ...register('email', {
                                    required: 'Correo electrónico obligatorio',
                                    validate: validations.isEmail
                                })}
                                error={!!errors.email}
                                helperText={errors.email?.message}
                                label="Correo Electronico" variant='filled' fullWidth
                            />
                        </Grid>

                        <Grid item xs={12} sx={{display: 'inline-flex', marginBottom: 3}}>
                            <LockIcon sx={{marginTop: 2, marginRight: 2, color: 'white'}}/>
                            <TextField 
                                { ...register('contraseña', {
                                    required: 'Contraseña obligatoria',
                                    minLength: { value: 6, message: 'Minimo 6 caracteres' }
                                })}
                                error= { !!errors.contraseña}
                                helperText = { errors.contraseña?.message }
                                label="Contraseña" type="password" variant='filled' fullWidth
                            />
                        </Grid>

                        {/* <Grid item xs={12} sx={{display: 'inline-flex', marginBottom: 3}}>
                            <TwitterIcon sx={{marginTop: 2, marginRight: 2, color: 'white'}}/>
                            <TextField label="Twitter" type="string" variant='filled' fullWidth/>
                        </Grid>

                        <Grid item xs={12} sx={{display: 'inline-flex', marginBottom: 3}}>
                            <LanguageIcon sx={{marginTop: 2, marginRight: 2, color: 'white'}}/>
                            <TextField label="Website" type="string" variant='filled' fullWidth/>
                        </Grid> */}

                        <Grid item xs={12} sx={{marginBottom: 2}}>
                            {/* <Link href='/admin' passHref component={NextLink} underline='always' sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                                <Button sx={{fontFamily: 'Poppins-Medium', fontSize: 16, color:'black', padding: '0 20px', height: 50, borderRadius: 25, backgroundColor: 'whitesmoke'}}>Entrar</Button>
                            </Link> */}
                            <Button 
                                type='submit'
                                sx={{fontFamily: 'Poppins-Medium', fontSize: 16, color:'black', padding: '0 20px', height: 50, borderRadius: 25, backgroundColor: 'whitesmoke', marginLeft: 17}}
                            > Entrar
                            </Button>
                        </Grid>

                        <Grid item xs={12} display='flex' justifyContent='center'>
                            <Link href='/auth/login' passHref component={NextLink} underline='always' sx={{color: 'whitesmoke'}}>
                                ¿Ya tienes cuenta? <span id='black'>Iniciar Sesión</span>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </AuthLayout>
    )
}

export default RegisterPage