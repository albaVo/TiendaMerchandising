import { Navbar, Sidebar } from "@/components/dashboard"
import { Typography } from "@mui/material"
// import { Inject, ScheduleComponent } from "@syncfusion/ej2-react-schedule"
// import { Agenda, Day, DragAndDrop, Month, Resize, Week, WorkWeek } from "@syncfusion/ej2-react-schedule/src"

const Calendario = () => {
  return (
    <div className="list">
        <Sidebar/>
        <div className="listContain">
            <Navbar/>
            {/* <div className="calendario">
              <Typography>Calendario</Typography>
              <ScheduleComponent>
                <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}/>
              </ScheduleComponent>
            </div> */}
        </div>
    </div>
  )
}

export default Calendario