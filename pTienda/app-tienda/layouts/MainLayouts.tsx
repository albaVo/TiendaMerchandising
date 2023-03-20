import { FC } from "react";
import { NavBar } from '../components/commons/admin';

interface Props {
    children: any;
}

export const MainLayouts:FC<Props> = ({children}) => {
    return (
        <>
            <header>
              <NavBar /> 
              <h2>header</h2>       
            </header>
            <main style={{
                margin: '20px auto',
                maxWidth: '1440px',
                padding: '0px 30px'
            }}>
                { children }
            </main>
            <footer>
                {/* <h2>footer</h2> */}
            </footer>
        </>
    )
}