import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { appColors } from "../services/appColors";
import { useTranslation } from "react-i18next";
import { operators } from "../data/dataIPTV";


type Props = {
  operator: string
}
export default function CardOperator({operator}: Props): JSX.Element {
  const {t} = useTranslation();

  return (
    <Card sx={{
      width: {xs: '90vw', sm: 345},
      maxWidth: 345,
      height: 180,
      margin: {xs: '0.75rem 0', sm: '1.5rem'},
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: appColors.light1,
      transition: '1s',
      ':hover': {
        transform: 'scale(1.05)',
        transition: '0.4s'
      },
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          // height="100"
          image={`/img/operators/${operator.toLowerCase()}.png`}
          alt={operator}
          sx={{margin: "1em 0", height: '5rem', objectFit: "contain"}}
        />
        <CardContent sx={{textAlign: 'center', color: `${appColors.mid1}`}}>
          <Typography gutterBottom variant="h6" component="div"
                      sx={{fontSize: '1.45em', lineHeight: '1.25em'}}
          >
            {operators[operator as keyof (typeof operators)]['name']}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}