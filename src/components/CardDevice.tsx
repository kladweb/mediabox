import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { appColors } from "../services/appColors";
import { useTranslation } from "react-i18next";


type IProps = {
  device: string
}
export default function CardDevice({device}: IProps): JSX.Element {
  const {t} = useTranslation();

  return (
    <Card sx={{
      width: 345,
      height: 250,
      margin: "2em",
      display: 'flex',
      backgroundColor: appColors.mid2,
      transition: '1s',
      ':hover': {
        transform: 'scale(1.05)',
        transition: '0.4s'
      },
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`/img/${device}.png`}
          // image="/img/android.png"
          alt="green iguana"
          sx={{margin: "1em 0", objectFit: "contain"}}
        />
        <CardContent sx={{textAlign: 'center', color: `${appColors.dark1}`}}>
          <Typography gutterBottom variant="h6" component="div"
                      sx={{fontSize: '1.45em', lineHeight: '1.25em'}}
          >
            {t(device)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}