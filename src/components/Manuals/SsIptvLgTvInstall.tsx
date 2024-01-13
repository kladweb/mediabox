import * as React from "react";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "./ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "../../services/sxStyles";

type Props = {
  step: number;
}

function SsIptvLgTvInstall({step}: Props) {
  const {t} = useTranslation();

  return (
    <Card
      component='div'
      sx={sxCardMain}
    >
      <Box component='h4' sx={sxHeadMain}>
        {t('step')}{step}{t('step-ssIptvLgTvInstall')}
      </Box>
      <CardContent sx={sxManualText1}>{t('ssiptv_manual1-1')}</CardContent>
      <CardContent sx={sxManualText1}>{t('ssiptv_manual1-2')}</CardContent>
    </Card>
  );
}

export default SsIptvLgTvInstall;