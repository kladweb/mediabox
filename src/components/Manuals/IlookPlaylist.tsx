import * as React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { appColors } from "../../services/appColors";
import ImageManual from "./ImageManual";
import { operators } from "../../data/dataIPTV";
import { sxManualText1, sxCardMain, sxHeadMain } from "./sxsManuals";

function IlookPlaylist() {
  const {t} = useTranslation();
  const params = useParams();
  const operator = params.operator;

  return (
    <Card
      component='div'
      sx={sxCardMain}
    >
      <Box component='h4' sx={sxHeadMain}>
        {t('step')}3{t('step3')}
      </Box>
      <CardContent sx={sxManualText1}>{t('ilooktv_manual3-1')}</CardContent>
      <ImageManual image={`${operator}_manual4.jpg`}/>
      <CardContent sx={sxManualText1}>{t('ilooktv_manual3-2')}</CardContent>
    </Card>
  );
}

export default IlookPlaylist;