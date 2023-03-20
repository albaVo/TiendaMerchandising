import { Navbar, Sidebar } from "@/components/dashboard"
import { SettingsNotifications } from "@/components/dashboard/SettingsNotifications"
import { Container, Stack, Typography } from "@mui/material"


const Ajustes = () => {
  return (
    <div className="list">
        <Sidebar/>
            <div className="listContain">
                <Navbar/>
                <Container maxWidth="lg">
                    <Stack spacing={3}>
                        <Typography variant="h4" sx={{textAlign: "center", margin: 5, marginBottom: 1}}>
                            Ajustes
                        </Typography>
                        <SettingsNotifications/>
                    </Stack>
                </Container>
            </div>    
    </div>
  )
}

export default Ajustes