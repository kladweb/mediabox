import * as React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "./ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "../../services/sxStyles";
import { playersAll } from "../../data/dataIPTV";

type Props = {
  step: number;
}

function OttPlayFossSetupPlaylist({step}: Props) {
  const {t} = useTranslation();
  const params = useParams();
  const player = params.player;
  const devices = params.devices;

  return (
    <Card
      component='div'
      sx={sxCardMain}
    >
      <Box component='h4' sx={sxHeadMain}>
        {t('step')}{step}{t('step-ottplayfossSetup')}{playersAll[player as keyof (typeof playersAll)]}
      </Box>
      <CardContent sx={sxManualText1}>{t('ottplayfoss_manual2-45')}</CardContent>
      <ImageManual image={'ottplayfoss_manual4.jpg'}/>
      <CardContent sx={sxManualText1}>{t('ottplayfoss_manual2-5')}</CardContent>
      <ImageManual image={'ottplayfoss_manual5.jpg'}/>
      <CardContent sx={sxManualText1}>{t('ottplayfoss_manual2-6')}</CardContent>
      <ImageManual image={'ottplayfoss_manual6.jpg'}/>
      <ImageManual image={'ottplayfoss_manual7.jpg'}/>
      <CardContent sx={sxManualText1}>{t('ottplayfoss_manual2-7')}</CardContent>
      <ImageManual image={'ottplayfoss_manual8.jpg'}/>
      <ImageManual image={'ottplayfoss_manual9.jpg'}/>
      <ImageManual image={'ottplayfoss_manual10.jpg'}/>
      <CardContent sx={sxManualText1}>{t('ottplayfoss_manual2-8')}</CardContent>
      <ImageManual image={'ottplayfoss_manual11.jpg'}/>

      {
        (devices !== 'smarttv') ?
          <>
            <CardContent sx={sxManualText1}>{t('ottplayfoss_manual2-9')}</CardContent>
            <ImageManual image={'ottplayfoss_manual12.jpg'}/>
          </>
          :
          <>
            <CardContent sx={sxManualText1}>{t('ottplayfoss_manual2-92')}</CardContent>
            <ImageManual image={'ottplayfoss_manual122.jpg'}/>
          </>
      }



      <CardContent sx={sxManualText1}>{t('ottplayfoss_manual2-10')}</CardContent>
      <ImageManual image={'ottplayfoss_manual13.jpg'}/>
      <CardContent sx={sxManualText1}>{t('ottplayfoss_manual2-11')}</CardContent>
      <ImageManual image={'ottplayfoss_manual14.jpg'}/>
      <ImageManual image={'ottplayfoss_manual15.jpg'}/>
      <CardContent sx={sxManualText1}>{t('note_manual01')}</CardContent>
      <CardContent sx={sxManualText1}>{t('enjoy_manual01')}</CardContent>
    </Card>
  );
}

export default OttPlayFossSetupPlaylist;