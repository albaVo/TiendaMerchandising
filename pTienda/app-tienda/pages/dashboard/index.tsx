import { DarkModeContext, DarkModeContextProvider } from '@/context/dashboard/darkModeContext'
import Link from 'next/link'
import React, { useContext } from 'react'
import Home from './home'

const indexDashboard = () => {

  return (
    <div>
      <Home/>
    </div>

  )
}

export default indexDashboard