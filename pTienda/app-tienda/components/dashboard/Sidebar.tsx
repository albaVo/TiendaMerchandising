import {AccountCircleOutlined, AssignmentInd, CalendarMonth, Class, ColorLensRounded, Dashboard, ExitToAppOutlined, InsertChart, LocalShipping, NotificationsOutlined, Payment, PersonOutlineOutlined, PsychologyOutlined, SettingsApplications, SettingsSystemDaydreamOutlined, Store} from '@mui/icons-material';
import Link from 'next/link';
import { useContext } from 'react';
import { ThemeContext } from '@emotion/react';


export const Sidebar = () => {

  const { toggleTheme, themeMode } = useContext(ThemeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">atenea</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">PRINCIPAL</p>
          <li>
            <Link href={"/dashboard"} className="linkall">
              <Dashboard className='icon'/>
              <span>Dashboard</span>
            </Link>
          </li>
          <p className="title">LISTAS</p>
          <Link href={"/dashboard/users"} className="linkall">
            <li>
              <PersonOutlineOutlined className='icon'/>
              <span>Usuarios</span>
            </li>
          </Link>
          <Link href={"/dashboard/clientes"} className="linkall">
            <li>
              <AssignmentInd className='icon'/>
              <span>Clientes</span>
            </li>
          </Link>
          <Link href={"/dashboard/productos"} className="linkall">
            <li>
              <Store className='icon'/>
              <span>Productos</span>
            </li>
          </Link>
          <Link href={"/dashboard/categorias"} className="linkall">
            <li>
              <Class className='icon'/>
              <span>Categorias</span>
            </li>
          </Link>
          <Link href={"/dashboard/proveedores"} className="linkall">
            <li>
              <LocalShipping className='icon'/>
              <span>Proveedores</span>
            </li>
          </Link>
          <Link href={"/dashboard/pedidos"} className="linkall">
            <li>
              <Payment className='icon'/>
              <span>Pedidos</span>
            </li>
          </Link>
          <p className="title">UTILES</p>
          <Link href="/dashboard/calendario" className='linkall'>
            <li>
              <CalendarMonth className='icon'/>
              <span>Calendario</span>
            </li>
          </Link>
          <li>
            <ColorLensRounded className='icon'/>
            <span>Colores</span>
          </li>
          <p className="title">SERVICIOS</p>
          <Link href="/dashboard/ajustes" className='linkall'>
            <li>
              <SettingsApplications className='icon'/>
              <span>Ajustes</span>
            </li>
          </Link>
          {/* <li>
            <NotificationsOutlined className='icon'/>
            <span>Notificaciones</span>
          </li> */}
          <p className="title">USUARIO</p>
          <Link href="/dashboard/perfil" className='linkall'>
            <li>
              <AccountCircleOutlined className='icon'/>
              <span>Perfil</span>
            </li>
          </Link>
          <Link href="/" className='linkall'>
            <li>
              <ExitToAppOutlined className='icon'/>
              <span>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={() => toggleTheme('light')}></div>
        <div className="colorOption" onClick={() => toggleTheme('dark')}></div>
      </div>
    </div>
  )
}
