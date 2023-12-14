import * as React from 'react';
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { appColors } from "../services/appColors";
import { operators } from "../data/dataIPTV";

type Props = {
  operator: string
}
export default function CardChoosing({operator}: Props): JSX.Element {
  const {t} = useTranslation();
  const prices: string[] = `${t(`price-${operator}`)}`.split('-');
  const descriptions: string[] = `${t(`description-${operator}`)}`.split('-');
  const links: string[] = operators[operator as keyof (typeof operators)]['links'];
  const mirrors = links.slice(1);

  return (
    <Card
      component='div'
      sx={{
        margin: "1.5em auto",
        display: 'block',
        backgroundColor: appColors.light1,
        transition: '1s',
        border: `solid 5px ${appColors.mid2}`,
        borderRadius: '1em'
        // ':hover': {
        //   transform: 'scale(1.01)',
        //   transition: '0.4s'
        // }
      }}
    >
      <CardMedia
        component="img"
        height="100"
        image={`/img/operators/${operator.toLowerCase()}.png`}
        alt="green iguana"
        sx={{margin: "1em 0 -1em", objectFit: "contain"}}
      />
      <CardContent sx={{textAlign: 'left', color: `${appColors.dark2}`}}>
        <Typography gutterBottom component="h6"
                    sx={{fontSize: '1.25em'}}
        >
          {t('price')}
        </Typography>
        <Typography gutterBottom component="div"
                    sx={{fontSize: '1.25em', lineHeight: '1.75em', color: `${appColors.mid1}`}}
        >
          {
            <ul style={{margin: 0}}>
              {
                prices.map((price, i) => (
                  <li key={i}>{price}</li>
                ))
              }
            </ul>
          }
        </Typography>
        <Typography gutterBottom component="h6"
                    sx={{mt: '1em', fontSize: '1.25em'}}
        >
          {t('description')}
        </Typography>
        <Typography gutterBottom
                    component="div"
                    sx={{fontSize: '1.25em', lineHeight: '1.75em', color: `${appColors.mid1}`}}
        >
          {
            <ul style={{margin: 0, listStyleImage: "url('/img/icons/arrow.png')", whiteSpace: 'pre-wrap'}}>
              {
                descriptions.map((description, i) => (
                  <li key={i}>{description}</li>
                ))
              }
            </ul>
          }
        </Typography>
        <Box
          component='a'
          href={links[0]}
          target="_blank"
          sx={{
            display: 'inline-block',
            p: '0.5em 1em 0.55em',
            mt: '1em',
            textDecoration: 'none',
            color: `${appColors.mid2}`,
            fontSize: '1.1em',
            fontWeight: '400',
            backgroundColor: `${appColors.mid1}`,
            borderRadius: '0.75em',
            transition: '0.2s',
            ':hover': {
              opacity: '0.8',
              transition: '0.2s'
            }
          }}
        >
          {t('link')}
        </Box>
        {
          (mirrors.length > 0) ?
            <div>
              {
                mirrors.map((mirror, i) =>
                  <Box
                    key={i}
                    component='a'
                    href={mirror}
                    target="_blank"
                    sx={{
                      display: 'inline-block',
                      p: '0.2em 0.5em 0.4em',
                      m: '1em 0.5em 0 0',
                      textDecoration: 'none',
                      color: `${appColors.mid2}`,
                      fontSize: '1.1em',
                      fontWeight: '400',
                      backgroundColor: `${appColors.mid1}`,
                      borderRadius: '0.5em',
                      transition: '0.2s',
                      ':hover': {
                        opacity: '0.8',
                        transition: '0.2s'
                      }
                    }}
                  >
                    {`${t('mirror')}${i + 1}`}
                  </Box>
                )
              }
            </div>
            :
            null
        }
      </CardContent>
    </Card>
  );
}