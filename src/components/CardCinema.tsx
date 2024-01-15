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
      width: {xs: '85vw', md: 345},
      maxWidth: 345,
      height: 100,
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
          image={`/img/apps/${cinema.slice(0, 5)}.png`}
          alt={cinema}
          sx={{display: "block", width: "18%", margin: "0.5em", objectFit: "contain"}}
        />
        <CardContent sx={{display: "block", color: `${appColors.mid1}`}}>
          <Typography gutterBottom component="div" sx={{mt: "0.25em", fontSize: '1.5em', lineHeight: '1em'}}>
            {cinemas[cinema as keyof (typeof cinemas)]}
          </Typography>
          {
            <Typography gutterBottom component="div"
                        sx={{
                          m: "0",
                          fontSize: '1em',
                          lineHeight: '1.25em',
                          // position: 'absolute',
                          // fontStretch: 'condensed'
                        }}
            >
              {t(`${cinema}-note`)}
            </Typography>
          }
        </CardContent>
      </CardActionArea>
    </Card>
  );
}