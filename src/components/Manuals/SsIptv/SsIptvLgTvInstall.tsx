import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import { sxManualText1, sxCardMain, sxHeadMain } from "../../../services/sxStyles";
import type { ITranslate, PropsStep } from '../../../types/typesBox';

function SsIptvLgTvInstall({step}: PropsStep): JSX.Element {
  const {t}: ITranslate = useTranslation();

  return (
    <Card component='div' sx={sxCardMain}>
      <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-ssIptvLgTvInstall')}</Box>
      <CardContent sx={sxManualText1}>{t('ssiptv_manual1-1')}</CardContent>
      <CardContent sx={sxManualText1}>{t('ssiptv_manual1-2')}</CardContent>
    </Card>
  );
}

export default SsIptvLgTvInstall;