import * as React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "./ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "./sxsManuals";

type Props = {
  step: number;
}

function IlookPlaylistSmartTv({step}: Props) {
  const {t} = useTranslation();
  const params = useParams();
  const operator = params.operator;
  const player = params.player;

  return (
    <Card
      component='div'
      sx={sxCardMain}
    >
      <Box component='h4' sx={sxHeadMain}>
        {t('step')}{step}{t('step-IlookPlaylist-smarttv')}
      </Box>
      <CardContent sx={sxManualText1}>{t('ilooktv_manual3-1')}</CardContent>
      <ImageManual image={`${operator}_manual5.jpg`}/>
      <ImageManual image={`${operator}_manual51.jpg`}/>
      <CardContent sx={sxManualText1}>{t('ilooktv_manual_smarttv_3-11')}</CardContent>
      <ImageManual image={`${operator}_manual55.jpg`}/>
      <CardContent sx={sxManualText1}>{t('ilooktv_manual_smarttv_3-12')}</CardContent>
    </Card>
  );
}

export default IlookPlaylistSmartTv;