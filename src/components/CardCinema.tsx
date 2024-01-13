import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { appColors } from "../services/appColors";
import { useTranslation } from "react-i18next";
import { cinemas } from "../data/dataIPTV";

type Props = {
  cinema: string
}
export default function CardCinema({cinema}: Props): JSX.Element {
  const {t} = useTranslation();
  return (
    <Card sx={{
      width: 345,
      height: 90,
      m: "0.75em",
      p: "0",
      display: 'flex',
      // justifyContent: 'start',
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
          image={`/img/players/${cinema.replace(/[-\s]/g, '').toLowerCase()}.png`}
          alt={cinema}
          sx={{display: "block", width: "18%", margin: "0.5em", objectFit: "contain"}}
        />
        <CardContent sx={{display: "block", width: "60%", color: `${appColors.mid1}`}}>
          <Typography gutterBottom component="div" sx={{m: "0", fontSize: '1.45em', lineHeight: '1em'}}>
            {cinemas[cinema as keyof (typeof cinemas)]}
          </Typography>
          {
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