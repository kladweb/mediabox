import * as React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "./ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "./sxsManuals";

type Props = {
  step: number;
}

function IlookKey({step}: Props) {
  const {t} = useTranslation();
  const params = useParams();
  const device = params.device;

  return (
    <Card component='div' sx={sxCardMain}>
      <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-IlookKey')}</Box>
      <CardContent sx={sxManualText1}>{t('ilooktv_manual2-3')}</CardContent>
      {
        (device === 'androidtvbox') ?
          <CardContent sx={sxManualText1}>{t('ilooktv_manual2-4')}</CardContent>
          :
          <CardContent sx={sxManualText1}>{t('ilooktv_manual2-5')}</CardContent>
      }
    </Card>
  );
}

export default IlookKey;