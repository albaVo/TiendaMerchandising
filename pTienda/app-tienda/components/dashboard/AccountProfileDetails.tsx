import { useCallback, useState, useContext } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { AuthContext } from '@/context/auth';


export const AccountProfileDetails = () => {

  const { user } = useContext(AuthContext)
  console.log(user)

  return (
      <Card>
        {/* <h1 className="itemTitleSingleC">Perfil</h1> */}
        <CardContent sx={{ pt: 0, backgroundColor: '#D1B1EA' }}>
          <Box sx={{height: 305, padding: 5}}>
          
              <div className="detailitemsingle">
                <span className="itemKeyC">Email:</span>
                <span className="itemValueC">{user?.email}</span>
              </div>
              <div className="detailitemsingle">
                <span className="itemKeyC">Twitter:</span>
                <span className="itemValueC">{user?.twitter}</span>
              </div>
              <div className="detailitemsingle">
                <span className="itemKeyC">Website:</span>
                <span className="itemValueC">{user?.website}</span>
              </div>
          </Box>
        </CardContent>
        {/* <Divider /> */}
        {/* <CardActions sx={{ justifyContent: 'flex-end' }}>
        </CardActions> */}
      </Card>
  );
}