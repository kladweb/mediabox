import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea, Skeleton } from '@mui/material';
import { appColors } from "../services/appColors";
import { useTranslation } from "react-i18next";
import { useState } from "react";


type IProps = {
  device: string
}
export default function CardDevice({device}: IProps): JSX.Element {
  const {t} = useTranslation();
  const [loaded, setLoaded] = useState(false);

  return (
    <Card sx={{
      width: {xs: '90vw', md: 345},
      height: 250,
      maxWidth: 345,
      margin: {xs: '1rem 0', sm: '1rem', md: '2rem'},
      display: 'flex',
      justifyContent: 'center',
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
          image={`/img/devices/${device}.png`}
          alt="green iguana"
          sx={{margin: "1em 0", objectFit: "contain", display: (loaded) ? 'block' : 'none'}}
          onLoad={() => setLoaded(true)}
          // onLoad={() => setLoaded(false)}
        />
        {
          (!loaded) && <Skeleton variant="rounded" width={280} height={140} sx={{m: "auto"}}/>
        }
        <CardContent sx={{textAlign: 'center', color: `${appColors.dark1}`}}>
          {
            (loaded) ?
              <Typography gutterBottom variant="h6" component="div"
                          sx={{fontSize: '1.45em', lineHeight: '1.25em'}}
              >
                {t(device)}
              </Typography>
              :
              <Skeleton variant="text" sx={{fontSize: '1.75rem', width: '80%', m: '0.5rem auto -0.5rem'}}/>
          }
        </CardContent>
      </CardActionArea>
    </Card>
  );
}