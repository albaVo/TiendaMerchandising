import { AuthContext } from "@/context/auth";
import { Box, Card, CardContent, Avatar, Typography, Button, CardActions, Divider } from "@mui/material"
import { useContext, useEffect, useState } from "react";

const images = [
  "https://lh3.googleusercontent.com/xwFku6dE4kwNIwQ2HrVEicurq7bd3LeNJzAgEDb3mS7AQj_04d2rnVlXn35KFsEe5e51",
  "https://play-lh.googleusercontent.com/u4QVFxcMHXGrxPSWA2kz0O3a136K5kA0-Pe-ArafOx2RFt98mY0zFVJUU4-1qT_2ryQ",
  "https://i.pinimg.com/474x/25/34/5e/25345e8510eeaab262dcaf3c56c57f30.jpg",
  "https://i.pinimg.com/originals/68/16/3e/68163efb3c2201721d8e681cde6aef2b.jpg",
  "https://en.apkshki.com/storage/5540/icon_5f3feeba72510_5540.png",
  "https://i.pinimg.com/564x/e8/4a/c9/e84ac9bb68e1fd01d7cd435b9a592002.jpg"
]

const RandomImage = () => {
  const [currentImage, setCurrentImage] = useState(images[0])
  
  useEffect(() => {
      const interval = setInterval(() => {
      const index = Math.floor(Math.random() * images.length);
      setCurrentImage(images[index]);
      }, 3000);
      return () => clearInterval(interval);
  }, []);

  return (
      <div>
        <img src={currentImage} alt="Random" />
      </div>
  );
}

const AccountProfile = () => {

  const { user } = useContext(AuthContext)
  console.log(user)

  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div className="leftnew">
            <RandomImage/>
          </div>
          <Typography
            gutterBottom
            variant="h5"
          >
            {user?.username}
          </Typography>
          {/* <Typography
            color="text.secondary"
            variant="body2"
          >
            {user.city} {user.country}
          </Typography>
          <Typography
            color="text.secondary"
            variant="body2"
          >
            {user.timezone}
          </Typography> */}
        </Box>
      </CardContent>
      <Divider />
      {/* <CardActions>
        <Button
          fullWidth
          variant="text"
        >
          Subir imagen
        </Button>
      </CardActions> */}
    </Card>
  )
}

export default AccountProfile