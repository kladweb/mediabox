import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "../ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "../../../services/sxStyles";
import type { ITranslate, PropsStep } from '../../../types/typesBox';

function LampaAndroidInstall({step}: PropsStep): JSX.Element {
  const {t}: ITranslate = useTranslation();

  return (
    <Card component='div' sx={sxCardMain}>
      <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-LampaAndroidInstall')}</Box>
      <CardContent sx={sxManualText1}>{t('hdvideobox_manual2-1')}</CardContent>
      <ImageManual image={'androidtvbox_manual8_lampaandroid_2.jpg'}/>
      <CardContent sx={sxManualText1}>{t('hdvideobox_manual2-3')}</CardContent>
      <CardContent sx={sxManualText1}>{t('lampaandroid_manual2-4')}</CardContent>
    </Card>
  );
}

export default LampaAndroidInstall;