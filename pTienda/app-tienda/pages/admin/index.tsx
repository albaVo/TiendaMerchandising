import { MainLayouts } from '../../layouts/MainLayouts'
import { NextPage } from "next";
import { Box } from '@mui/material';

const indexPage: NextPage = () => {
  return (
    // <MainLayouts>
    //   <h1>Administración Tienda</h1>
    // </MainLayouts>
    <Box sx={{fontFamily: 'Nunito'}}>
      dashboard
    </Box>
  )
}

export default indexPage