import { Params, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "../ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "../../../services/sxStyles";
import { playersAll } from "../../../data/dataIPTV";
import type { ITranslate, PropsStep } from '../../../types/typesBox';

function OttPlayFossSetupKey({step}: PropsStep): JSX.Element {
  const {t}: ITranslate = useTranslation();
  const params: Readonly<Params<string>> = useParams();
  const player: string | undefined = params.player;

  return (
    <Card component='div' sx={sxCardMain}>
      <Box component='h4' sx={sxHeadMain}>
        {t('step')}{step}{t('step-ottplayfossSetup')}{playersAll[player as keyof (typeof playersAll)]}
      </Box>
      <CardContent sx={sxManualText1}>{t('ottplayfoss_manual2-45')}</CardContent>
      <ImageManual image='OttPlay/ottplayfoss_manual4.jpg'/>
      <CardContent sx={sxManualText1}>{t('ottplayfoss_manual2-5')}</CardContent>
      <ImageManual image='OttPlay/ottplayfoss_manual5.jpg'/>
      {
        (player === 'ottplaybyalex') &&
        <>
          <CardContent sx={sxManualText1}>{t('ottplay-smarttv_manual1-01')}</CardContent>
          <ImageManual image='Ilooktv/ilooktv_smartTv_ottplay_001.jpg'/>
        </>
      }
      <CardContent sx={sxManualText1}>{t('ottplay-smarttv_manual1-1')}</CardContent>
      <ImageManual image='Ilooktv/ilooktv_smartTv_ottplay_01.jpg'/>
      <CardContent sx={sxManualText1}>{t('ottplay-smarttv_manual1-2')}</CardContent>
      <CardContent sx={sxManualText1}>{t('ottplay-smarttv_manual1-3')}</CardContent>
      <ImageManual image='Ilooktv/ilooktv_smartTv_ottplay_02.jpg'/>
      <CardContent sx={sxManualText1}>{t('ottplay-smarttv_manual1-4')}</CardContent>
      <ImageManual image='Ilooktv/ilooktv_smartTv_ottplay_03.jpg'/>
      <CardContent sx={sxManualText1}>{t('ottplay-smarttv_manual1-5')}</CardContent>
      <CardContent sx={sxManualText1}>{t('ottplay-smarttv_manual1-6')}</CardContent>
      <ImageManual image='Ilooktv/ilooktv_smartTv_ottplay_04.jpg'/>
      <CardContent sx={sxManualText1}>{t('ottplay-smarttv_manual1-7')}</CardContent>
      <ImageManual image='OttPlay/ottplayfoss_manual15.jpg'/>
      <CardContent sx={sxManualText1}>{t('note_manual01')}</CardContent>
      <CardContent sx={sxManualText1}>{t('enjoy_manual01')}</CardContent>
    </Card>
  );
}

export default OttPlayFossSetupKey;