import * as React from "react";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "./ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "./sxsManuals";

type Props = {
  step: number;
}

function OttplayerInstall({step}: Props) {
  const {t} = useTranslation();

  return (
    <Card
      component='div'
      sx={sxCardMain}
    >
      <Box component='h4' sx={sxHeadMain}>
        {t('step')}{step}{t('step-ottplayerInstall')}
      </Box>
      <CardContent sx={sxManualText1}>{t('ottplayer_manual2-1')}</CardContent>
      <ImageManual image={'ottplayer_manual_12.jpg'}/>
      <CardContent sx={sxManualText1}>{t('ottplayer_manual2-2')}</CardContent>
      <ImageManual image={'ottplayer_manual_13.jpg'}/>
      <CardContent sx={sxManualText1}>{t('ottplayer_manual2-3')}</CardContent>
      <ImageManual image={'ottplayer_manual_14.jpg'}/>
      <CardContent sx={sxManualText1}>{t('ottplayer_manual2-4')}</CardContent>
      <ImageManual image={'ottplayer_manual_15.jpg'}/>
      <ImageManual image={'ottplayer_manual_16.jpg'}/>
      <CardContent sx={sxManualText1}>{t('ottplayer_manual2-5')}</CardContent>
      <ImageManual image={'ottplayer_manual_17.jpg'}/>
      <ImageManual image={'ottplayer_manual_18.jpg'}/>
      <CardContent sx={sxManualText1}>{t('ottplayer_manual2-6')}</CardContent>
      <ImageManual image={'ottplayer_manual_20.jpg'}/>
      <CardContent sx={sxManualText1}>{t('ottplayer_manual2-7')}</CardContent>
      <ImageManual image={'ottplayer_manual_03.jpg'}/>
      <CardContent sx={sxManualText1}>{t('ottplayer_manual2-8')}</CardContent>
      <ImageManual image={'ottplayer_manual_10.jpg'}/>
      <CardContent sx={sxManualText1}>{t('ottplayer_manual2-9')}</CardContent>
      <ImageManual image={'ottplayer_manual_11.jpg'}/>
      <CardContent sx={sxManualText1}>{t('ottplayer_manual2-10')}</CardContent>
      <ImageManual image={'ottplayer_manual_21.jpg'}/>
      <ImageManual image={'ottplayer_manual_22.jpg'}/>
      <CardContent sx={sxManualText1}>{t('ottplayer_manual2-11')}</CardContent>
      <ImageManual image={'ottplayer_manual_23.jpg'}/>
      <CardContent sx={sxManualText1}>{t('ottplayer_manual2-12')}</CardContent>
      <ImageManual image={'ottplayer_manual_24.jpg'}/>
      <CardContent sx={sxManualText1}>{t('televizo_manual2-9')}</CardContent>
    </Card>
  );
}

export default OttplayerInstall;