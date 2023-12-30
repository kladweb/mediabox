import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "./ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "./sxsManuals";
import * as React from "react";

type Props = {
  step: number;
}

function AppsHelpInstall({step}: Props) {
  const {t} = useTranslation();
  const params = useParams();
  const player = params.player;

  return (
    <Card
      component='div'
      sx={sxCardMain}
    >
      <Box component='h4' sx={sxHeadMain}>
        {t('step')}{step}{t('step-AppsHelpInstall')}
      </Box>
      <CardContent sx={sxManualText1}>{t('android-help1-0')}</CardContent>
      <CardContent sx={sxManualText1}>{t('android-help2-1')}</CardContent>
      <ImageManual image={`androidtvbox_manual9_text_editor_${player}.jpg`}/>
      <CardContent sx={sxManualText1}>{t('android-help2-2')}</CardContent>
      <ImageManual image={`androidtvbox_manual9_keyboard_${player}.jpg`}/>
      <CardContent sx={sxManualText1}>{t('android-help2-3')}</CardContent>
      <ImageManual image={'androidtvbox_manual11_keyboard.jpg'}/>
      <CardContent sx={sxManualText1}>{t('android-help2-4')}</CardContent>
      <ImageManual image={'androidtvbox_manual12_keyboard.jpg'}/>
      <CardContent sx={sxManualText1}>{t('android-help2-5')}</CardContent>
      <ImageManual image={'androidtvbox_manual13_keyboard.jpg'}/>
      <CardContent sx={sxManualText1}>{t('android-help2-6')}</CardContent>
    </Card>
  );
}

export default AppsHelpInstall;