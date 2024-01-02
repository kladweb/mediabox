import * as React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { appColors } from "../../services/appColors";
import ImageManual from "./ImageManual";
import { operators } from "../../data/dataIPTV";
import { sxManualText1, sxCardMain, sxHeadMain, sxLinksRegistration } from "./sxsManuals";

type Props = {
  step: number;
}

function OttplayerSetup({step}: Props) {
  const {t} = useTranslation();
  const params = useParams();
  const operator = params.operator;
  const player = params.player;
  const linkOttplayer = 'https://ottplayer.tv/';

  return (
    <Card
      component='div'
      sx={sxCardMain}
    >
      <Box component='h4' sx={sxHeadMain}>
        {t('step')}{step}{t('step-OttplayerSetup')}
      </Box>
      <CardContent sx={sxManualText1}>{t('ottplayer_manual1-1')}</CardContent>
      <Box component='a' href={linkOttplayer} target="_blank" sx={sxLinksRegistration}>
        OttPlayer website
      </Box>
      <ImageManual image={'ottplayer_manual_01.jpg'}/>
      <ImageManual image={'ottplayer_manual_02.jpg'}/>
      <CardContent sx={sxManualText1}>{t('ottplayer_manual1-2')}</CardContent>
      <CardContent sx={sxManualText1}>{t('ottplayer_manual1-3')}</CardContent>
      <ImageManual image={'ottplayer_manual_03.jpg'}/>
      <CardContent sx={sxManualText1}>{t('ottplayer_manual1-4')}</CardContent>
      <ImageManual image={'ottplayer_manual_04.jpg'}/>
      <ImageManual image={'ottplayer_manual_05.jpg'}/>
      <CardContent sx={sxManualText1}>{t('ottplayer_manual1-5')}</CardContent>
    </Card>
  );
}

export default OttplayerSetup;