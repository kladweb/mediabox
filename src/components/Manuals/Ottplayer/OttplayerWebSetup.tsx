import { useTranslation } from "react-i18next";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import ImageManual from "../ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain, sxLink1 } from "../../../services/sxStyles";
import type { ITranslate, PropsStep } from '../../../types/typesBox';

function OttplayerWebSetup({step}: PropsStep): JSX.Element {
  const {t}: ITranslate = useTranslation();
  const linkOttplayer: string = 'https://ottplayer.tv/';

  return (
    <Card component='div' sx={sxCardMain}>
      <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-OttplayerWebSetup')}</Box>
      <CardContent sx={sxManualText1}>{t('ottplayer_manual1-1')}</CardContent>
      <Box component='a' href={linkOttplayer} target="_blank" sx={sxLink1}>OttPlayer website</Box>
      <ImageManual image='Ottplayer/ottplayer_manual_01.jpg'/>
      <ImageManual image='Ottplayer/ottplayer_manual_02.jpg'/>
      <CardContent sx={sxManualText1}>{t('ottplayer_manual1-2')}</CardContent>
      <CardContent sx={sxManualText1}>{t('ottplayer_manual1-3')}</CardContent>
      <ImageManual image='Ottplayer/ottplayer_manual_03.jpg'/>
      <CardContent sx={sxManualText1}>{t('ottplayer_manual1-4')}</CardContent>
      <ImageManual image='Ottplayer/ottplayer_manual_04.jpg'/>
      <ImageManual image='Ottplayer/ottplayer_manual_05.jpg'/>
      <CardContent sx={sxManualText1}>{t('ottplayer_manual1-5')}</CardContent>
    </Card>
  );
}

export default OttplayerWebSetup;