import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea, Skeleton } from '@mui/material';
import { appColors } from "../services/appColors";
import { useTranslation } from "react-i18next";
import { useState } from "react";

type Props = {
  player: string
}
export default function CardPlayer({player}: Props): JSX.Element {
  const {t} = useTranslation();
  const [loaded, setLoaded] = useState(false);

  return (
    <Card sx={{
      width: {xs: '85vw', md: 345},
      maxWidth: 345,
      height: 90,
      m: "0.75em",
      p: "0",
      display: 'flex',
      alignContent: 'flex-start',
      backgroundColor: appColors.light1,
      transition: '1s',
      ':hover': {
        transform: 'scale(1.05)',
        transition: '0.4s'
      },
    }}>
      <CardActionArea sx={{
        display: 'flex',
        justifyContent: 'start',
        alignContent: 'center',
      }}>
        <CardMedia
          component="img"
          image={`/img/players/${player.replace(/[-\s]/g, '').toLowerCase()}.png`}
          alt={player}
          onLoad={() => setLoaded(true)}
          sx={{width: "18%", margin: "0.5em", objectFit: "contain", display: (loaded) ? 'block' : 'none'}}
        />
        {
          (!loaded) && <Skeleton variant="rounded" sx={{width: "18%", height: "5em", m: "0.5em"}}/>
        }
        <CardContent sx={{display: "block", width: "60%", color: `${appColors.mid1}`}}>
          <Typography gutterBottom component="div" sx={{m: "0", fontSize: '1.45em', lineHeight: '1em'}}>
            {player}
          </Typography>
          {
            (player === 'Ott-Play by Alex') &&
            <Typography gutterBottom component="div"
                        sx={{
                          m: "0",
                          fontSize: '1em',
                          lineHeight: '1.5em',
                          position: 'absolute',
                          fontStretch: 'condensed'
                        }}
            >
              {t(`ottplaybyalex-Note`)}
            </Typography>
          }
        </CardContent>
      </CardActionArea>
    </Card>
  );
}