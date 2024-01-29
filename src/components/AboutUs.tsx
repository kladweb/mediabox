import { useNavigate } from "react-router-dom";
import { Box, CardActionArea, Typography } from '@mui/material';
import { useTranslation } from "react-i18next";

import './cards.scss';
import { appColors } from "../services/appColors";
import { sxLink1, sxParagraphAbout1 } from "../services/sxStyles";
import * as React from "react";

function AboutUs() {
  const {t} = useTranslation();
  const navigate = useNavigate();

  const linkQiwi = 'https://my.qiwi.com/Pavel-KNYAGwCpTu?noCache=true';

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
        }}
      >
        <Box component='p' sx={sxParagraphAbout1}>{t('aboutContent01')}</Box>
        <Box component='p' sx={sxParagraphAbout1}>{t('aboutContent02')}</Box>
        <Box component='p' sx={sxParagraphAbout1}>{t('aboutContent03')}</Box>
        <Box component='p' sx={sxParagraphAbout1}>{t('aboutContent04')}</Box>
        <Box component='a' href={linkQiwi} target="_blank" sx={{
          display: 'block',
          width: 'fit-content',
          p: '0.2em 1em 0.4em',
          m: '0.5em auto 2em',
          textDecoration: 'none',
          textIndent: '0',
          color: `${appColors.mid1}`,
          fontSize: {xs: '0.8rem', md: '1.1rem'},
          fontWeight: '400',
          textAlign: 'center',
          backgroundColor: `${appColors.mid2}`,
          borderRadius: '0.5em',
          transition: '0.2s',
          ':hover': {
            opacity: '0.8',
            transition: '0.2s'
          }
        }}>
          {t('aboutContent041')}
        </Box>

        <Box component='p' sx={sxParagraphAbout1}>{t('aboutContent05')}</Box>
        <Box component='p' sx={{my: '1rem', fontStyle: 'italic', textAlign: 'center'}}>{t('aboutContent06')}</Box>
        <Box component='p' sx={sxParagraphAbout1}>{t('aboutContent07')}</Box>
        <Box
          component='h3'
          sx={{
            m: {xs: '2em auto 0.75em', md: '2em auto 0.5em'},
            width: '100%',
            fontSize: {xs: '1rem', md: '1.5rem'},
            fontWeight: '500',
            color: appColors.mid2,
            textAlign: 'center',
          }}
        >
          {t('aboutContent30')}
        </Box>
        <Box component='p' sx={sxParagraphAbout1}>{t('aboutContent31')}</Box>
        <Box component='p' sx={sxParagraphAbout1}>{t('aboutContent32')}</Box>
      </Box>
    </>
  )
}

export default AboutUs;