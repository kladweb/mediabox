import { useNavigate } from "react-router-dom";
import { Box, CardActionArea, Typography } from '@mui/material';
import { useTranslation } from "react-i18next";

import './cards.scss';
import { appColors } from "../services/appColors";

function AboutUs() {
  const {t} = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <Box
        component='h3'
        sx={{
          m: {xs: '4.5em auto 0.75em', md: '3.5em auto 0.5em'},
          width: '100%',
          fontSize: {xs: '1.2rem', md: '1.75rem'},
          fontWeight: '500',
          color: appColors.mid2,
          textAlign: 'center'
        }}
      >
        {t('aboutTitle')}
      </Box>
      <Box
        component='div'
        sx={{
          m: '0 auto 5rem',
          width: '100%',
          fontSize: {xs: '1rem', md: '1.25rem'},
          fontWeight: '400',
          color: appColors.light1,
          textAlign: 'justify',
          textIndent: '2em',
        }}
      >
        <Box component='p' sx={{my: 0}}>{t('aboutContent01')}</Box>
        <Box component='p' sx={{my: 0}}>{t('aboutContent02')}</Box>
        <Box component='p' sx={{my: 0}}>{t('aboutContent03')}</Box>

        {/*<Box component='p' sx={{my: 0}}>{t('aboutContent04')}</Box>*/}
        {/*<Box component='p' sx={{m: '1rem auto', textAlign: 'center'}}>*/}
        {/*  <iframe*/}
        {/*    src="https://widget.qiwi.com/widgets/middle-widget-300x300?publicKey=48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iP3gNCbB6hPp7rGp6PTgYWATbbY2X9N5sxYJ2EnwadsXcikzpa7NUd7Sgpqae9gQVPXGAJjr3XtSQY3498tfaxVEey1H8zoywrXJBvMb1W2&noCache=true"*/}
        {/*    width="300" height="300" scrolling="no" frameBorder="0"></iframe>*/}
        {/*</Box>*/}


        {/*<Box component='p' sx={{m: '1rem auto', textAlign: 'center'}}>*/}
        {/*  <iframe src="https://yoomoney.ru/quickpay/fundraise/button?billNumber=wMn1HQHWqSU.240116&" width="330"*/}
        {/*          height="50" frameBorder="0"  scrolling="no"></iframe>*/}
        {/*</Box>*/}

        <Box component='p' sx={{my: 0}}>{t('aboutContent05')}</Box>
        <Box component='p' sx={{my: '1rem', fontStyle: 'italic', textAlign: 'center'}}>{t('aboutContent06')}</Box>
        <Box component='p' sx={{my: 0}}>{t('aboutContent07')}</Box>
        <Box
          component='h3'
          sx={{
            m: {xs: '1.5em auto 0.75em', md: '1.5em auto 0.5em'},
            width: '100%',
            fontSize: {xs: '1rem', md: '1.5rem'},
            fontWeight: '500',
            color: appColors.mid2,
            textAlign: 'center',
          }}
        >
          {t('aboutContent30')}
        </Box>
        <Box component='p' sx={{my: 0}}>{t('aboutContent31')}</Box>
        <Box component='p' sx={{my: 0}}>{t('aboutContent32')}</Box>
      </Box>
    </>
  )
}

export default AboutUs;