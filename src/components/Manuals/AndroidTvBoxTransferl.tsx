import * as React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { appColors } from "../../services/appColors";
import ImageManual from "./ImageManual";
import { operators } from "../../data/dataIPTV";
import { sxManualText1, sxCardMain, sxHeadMain, sxLinksRegistration } from "./sxsManuals";

function AndroidTvBoxTransferl() {
  const {t} = useTranslation();
  const params = useParams();
  const operator = params.operator;

  return (
    <Card
      component='div'
      sx={sxCardMain}
    >
      <Box component='h4' sx={sxHeadMain}>
        {t('step')}5{t('step5')}
      </Box>
      <CardContent sx={sxManualText1}>{t('androidtvbox_manual2-1')}</CardContent>
      <ImageManual image={`androidtvbox_manual1.jpg`}/>
      <CardContent sx={sxManualText1}>{t('androidtvbox_manual2-2')}</CardContent>
      <ImageManual image={`androidtvbox_manual2.jpg`}/>
      <ImageManual image={`androidtvbox_manual3.jpg`}/>
      <CardContent sx={sxManualText1}>{t('androidtvbox_manual2-3')}</CardContent>
      <ImageManual image={`androidtvbox_manual4.jpg`}/>
      <CardContent sx={sxManualText1}>{t('androidtvbox_manual2-4')}</CardContent>
      <CardContent sx={sxManualText1}>{t('androidtvbox_manual2-5')}</CardContent>
      <ImageManual image={`androidtvbox_manual5.jpg`}/>
      <CardContent sx={sxManualText1}>{t('androidtvbox_manual2-6')}</CardContent>
    </Card>
  );
}

export default AndroidTvBoxTransferl;