import { Sidebar, Navbar, Widget, Featured, Chart, List } from "@/components/dashboard"


const home = () => {
  return (
    <div className="home">
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="earning"/>
            <Widget type="balance"/>
          </div>
          <div className="charts">
            <Featured/>
            <Chart title="Últimos 6 meses (Ingresos)" aspect={2/1}/>
          </div>
          <div className="listContainer">
            <div className="listTitle">Últimas transacciones</div>
            <List />
          </div>
        </div>
    </div>
  )
}

export default home