import { KeyboardArrowDown, KeyboardArrowUpOutlined, MoreVert } from "@mui/icons-material"
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

export const Featured = () => {
  return (
    <div className="featured">
        <div className="topf">
            <h1 className="titlef">Ingresos Totales</h1>
            <MoreVert fontSize="small"/>
        </div>
        <div className="bottomf">
            <div className="featuredChart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
            </div>
            <p className="titlepf">Ventas totales hoy</p>
            <p className="amountpf">420€</p>
            <p className="descpf">Procesamiento de las anteriores transacciones. Úlimos pagos no incluidos.</p>
            <div className="summary">
                <div className="itemsu">
                    <div className="itemTitle">Objetivo</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDown fontSize="small"/>
                        <div className="resultAmount">12.4k €</div>
                    </div>
                </div>
                <div className="itemsu">
                    <div className="itemTitle">Última Semana</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlined fontSize="small"/>
                        <div className="resultAmount">12.4k €</div>
                    </div>
                </div>
                <div className="itemsu">
                    <div className="itemTitle">Úlitmo Mes</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlined fontSize="small"/>
                        <div className="resultAmount">12.4k €</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
