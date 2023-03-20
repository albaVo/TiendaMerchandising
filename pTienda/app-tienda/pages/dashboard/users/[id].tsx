/* eslint-disable @next/next/no-img-element */
import { Sidebar, Navbar, Chart, List } from "@/components/dashboard";
import { useUsuarios } from "@/hooks/useUsuarios";
import { IUsuario } from "@/interfaces/usuarios/IUsuarios";
import { useRouter } from "next/router";
import { FC } from "react";


interface Props {
    username: string;
    usuarios?: IUsuario[]
}

const Single:FC<Props> = ({usuarios}) => {

    const router = useRouter()
    console.log(router)

    const username = router.query

    const {usuarios: user, isLoading} = useUsuarios(`/auth/${username.id}`)
    console.log(user)


  return (
    <div className="single">
        <Sidebar/>
        <div className="singleContainer">
            <Navbar/>
            <div className="topsingle">
                <div className="leftsingle">
                    <div className="editButton">Editar</div>
                    <h1 className="titlesingle">Informacion</h1>
                    <div className="itemsSingle">
                        <img 
                            src="https://cdn-icons-png.flaticon.com/128/1782/1782873.png" 
                            alt="" 
                            className="itemImg" 
                        />
                        <div className="detailssingle">
                            {user?.map((usuario: IUsuario) => (
                                <>
                                    <h1 className="itemTitleSingle">{usuario.username}</h1>
                                    <div className="detailitemsingle">
                                        <span className="itemKey">Email:</span>
                                        <span className="itemValue">{usuario.email}</span>
                                    </div>
                                    <div className="detailitemsingle">
                                        <span className="itemKey">Twitter:</span>
                                        <span className="itemValue">{usuario.twitter}</span>
                                    </div>
                                    <div className="detailitemsingle">
                                        <span className="itemKey">Website:</span>
                                        <span className="itemValue">{usuario.website}</span>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="rightsingle">
                    <Chart aspect={3 / 1} title="Gastos Usuario (Úlitmos 6 meses)"/>
                </div>
            </div>
            <div className="bottomsingle">
                <h1 className="titlesingle">Últimas transacciones</h1>
                <List />
            </div>
        </div>
    </div>
  )
}

export default Single
