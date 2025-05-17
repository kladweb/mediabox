import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "../ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "../../../services/sxStyles";
import { Params, useParams } from "react-router-dom";
import type { ITranslate, PropsStep } from '../../../types/typesBox';

function OttplayerInstall({step}: PropsStep): JSX.Element {
  const {t}: ITranslate = useTranslation();
  const params: Readonly<Params<string>> = useParams();
  const devices: string | undefined = params.devices;

  return (
    <Card component='div' sx={sxCardMain}>
      <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-ottplayerInstall')}</Box>
      <CardContent sx={sxManualText1}>{t(`ottplayer_manual2-1_${devices}`)}</CardContent>
      <ImageManual image='Ottplayer/ottplayer_manual_12.jpg'/>
      <CardContent sx={sxManualText1}>{t('ottplayer_manual2-2')}</CardContent>
      <ImageManual image='Ottplayer/ottplayer_manual_13.jpg'/>
      <CardContent sx={sxManualText1}>{t('ottplayer_manual2-3')}</CardContent>
      <ImageManual image='Ottplayer/ottplayer_manual_14.jpg'/>
      <CardContent sx={sxManualText1}>{t('ottplayer_manual2-4')}</CardContent>
      <ImageManual image='Ottplayer/ottplayer_manual_15.jpg'/>
      <ImageManual image='Ottplayer/ottplayer_manual_16.jpg'/>
      <CardContent sx={sxManualText1}>{t('ottplayer_manual2-5')}</CardContent>
      <ImageManual image='Ottplayer/ottplayer_manual_17.jpg'/>
      <ImageManual image='Ottplayer/ottplayer_manual_18.jpg'/>
      <CardContent sx={sxManualText1}>{t('ottplayer_manual2-6')}</CardContent>
      <ImageManual image='Ottplayer/ottplayer_manual_20.jpg'/>
      <CardContent sx={sxManualText1}>{t('ottplayer_manual2-7')}</CardContent>
      <ImageManual image='Ottplayer/ottplayer_manual_03.jpg'/>
      <CardContent sx={sxManualText1}>{t('ottplayer_manual2-8')}</CardContent>
      <ImageManual image='Ottplayer/ottplayer_manual_10.jpg'/>
      <CardContent sx={sxManualText1}>{t('ottplayer_manual2-9')}</CardContent>
      <ImageManual image='Ottplayer/ottplayer_manual_11.jpg'/>
      <CardContent sx={sxManualText1}>{t(`ottplayer_manual2-10_${devices}`)}</CardContent>
      <ImageManual image='Ottplayer/ottplayer_manual_21.jpg'/>
      <ImageManual image='Ottplayer/ottplayer_manual_22.jpg'/>
      <CardContent sx={sxManualText1}>{t('ottplayer_manual2-11')}</CardContent>
      <ImageManual image='Ottplayer/ottplayer_manual_23.jpg'/>
      <CardContent sx={sxManualText1}>{t('ottplayer_manual2-12')}</CardContent>
      <ImageManual image='Ottplayer/ottplayer_manual_24.jpg'/>
      <CardContent sx={sxManualText1}>{t('note_manual01')}</CardContent>
      <CardContent sx={sxManualText1}>{t('enjoy_manual01')}</CardContent>
    </Card>
  );
}

export default OttplayerInstall;