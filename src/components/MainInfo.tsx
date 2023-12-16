import * as React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { appColors } from "../services/appColors";
import { useTranslation } from "react-i18next";
import CardDevice from "./CardDevice";

import { devices } from "../data/dataIPTV";
import './cards.scss';

function MainInfo() {
  const {t} = useTranslation();
  const navigate = useNavigate();

  const handlerChoosePage = () => {
    navigate('/operators');
  }
  return (
    <>
      <Box
        component='p'
        sx={{
          mt: 12,
          mx: 'auto',
          width: '100%',
          fontSize: '1.25em',
          fontWeight: '400',
          color: appColors.light1,
          textAlign: 'left',
          // whiteSpace: 'pre-line',
          textIndent: '2em'
        }}
      >
        {t('mainText1')}
      </Box>
      <CardActionArea
        sx={{
          m: '1em auto',
          p: '1em',
          width: 'fit-content',
          fontSize: '1.25em',
          textAlign: 'center',
          backgroundColor: appColors.mid2,
          borderRadius: '1em',
          boxShadow: `2px 2px 2px ${appColors.dark2}`,
          transition: '0.3s',
          ':hover': {
            transform: 'translate(-0.05em, -0.05em)',
            boxShadow: `4px 4px 10px ${appColors.dark2}`,
            transition: '0.3s'
          },
          ':active': {
            transform: 'translate(0, 0)',
            boxShadow: `2px 2px 2px ${appColors.dark2}`
          },
        }}
        onClick={handlerChoosePage}
      >
        {t('mainButton')}
      </CardActionArea>
    </>
  )
}

export default MainInfo;