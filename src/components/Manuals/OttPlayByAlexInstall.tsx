import * as React from "react";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "./ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "./sxsManuals";

type Props = {
  step: number;
}

function OttPlayByAlexInstall({step}: Props) {
  const {t} = useTranslation();

  return (
    <Card
      component='div'
      sx={sxCardMain}
    >
      <Box component='h4' sx={sxHeadMain}>
        {t('step')}{step}{t('step-ottplaybyalexInstall')}
      </Box>
      <CardContent sx={sxManualText1}>{t('televizo_manual2-1')}</CardContent>
      <ImageManual image={'ottplaybyalex_manual1.jpg'}/>
      <CardContent sx={sxManualText1}>{t('televizo_manual2-12')}</CardContent>
      <ImageManual image={'androidtvbox_manual10_text_editor.jpg'}/>
      <CardContent sx={sxManualText1}>{t('televizo_manual2-2')}</CardContent>
      <CardContent sx={sxManualText1}>{t('televizo_manual2-13')}</CardContent>
      <ImageManual image={`televizo_manual2.jpg`}/>
      <CardContent sx={sxManualText1}>{t('ottplaybyalex_manual2-3')}</CardContent>
      <ImageManual image={'ottplaybyalex_manual3.jpg'}/>
      <CardContent sx={sxManualText1}>{t('ottplaybyalex_manual2-4')}</CardContent>
    </Card>
  );
}

export default OttPlayByAlexInstall;