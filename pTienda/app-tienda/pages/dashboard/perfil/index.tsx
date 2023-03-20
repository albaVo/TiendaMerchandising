import { AccountProfileDetails, DatatableCategorias, Navbar, Sidebar } from "@/components/dashboard"
import AccountProfile from "@/components/dashboard/AccountProfile"
import { Container, Stack, Typography, Grid, Box } from "@mui/material"


const Perfil = () => {

    return (
        <div className="list">
            <Sidebar/>
            <div className="listContain">
                <Navbar/>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        py: 8
                    }}
                >
                    <Container maxWidth="lg">
                        <Stack spacing={3}>
                        <div>
                            <Typography variant="h4">
                            Cuenta
                            </Typography>
                        </div>
                        <div>
                            <Grid
                            container
                            spacing={3}
                            >
                            <Grid
                                xs={12}
                                md={6}
                                lg={4}
                            >
                                <AccountProfile />
                            </Grid>
                            <Grid
                                xs={12}
                                md={6}
                                lg={8}
                            >
                                <AccountProfileDetails />
                            </Grid>
                            </Grid>
                        </div>
                        </Stack>
                    </Container>
                </Box>
            </div>
        </div>
    )
}

export default Perfil