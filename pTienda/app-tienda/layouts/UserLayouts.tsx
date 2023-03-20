import React, { FC, useState } from 'react'
import { NavBar } from '../components/commons/user';

interface Props {
    children: any;
}

export const UserLayouts:FC<Props> = ({ children }) => {
 
    const [showCart, setShowCart] = useState(false)

    const handleShow = (value) => {
        setShowCart(value)
    }
    
    return (
    <>
        <header>
            <NavBar/>
            <h2>header</h2> 
        </header>
        <main style={{
            margin: '20px auto',
            maxWidth: '1440px',
            padding: '0px 30px'
        }}>
            { children }
        </main>
    </>
  )
}