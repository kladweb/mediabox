import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "../ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "../../../services/sxStyles";
import type { ITranslate, PropsStep } from '../../../types/typesBox';

function CbillingBuy({step}: PropsStep) {
  const {t}: ITranslate = useTranslation();

  return (
    <Card component='div' sx={sxCardMain}>
      <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-IlookBuy')}</Box>
      <CardContent sx={sxManualText1}>{t('cbilling_manual2-1')}</CardContent>
      <ImageManual image={'cbilling_manual_04.jpg'}/>
      <CardContent sx={sxManualText1}>{t('cbilling_manual2-11')}</CardContent>
      <ImageManual image={'cbilling_manual_05.jpg'}/>
      <CardContent sx={sxManualText1}>{t('cbilling_manual2-12')}</CardContent>
      <ImageManual image={'cbilling_manual_06.jpg'}/>
      <CardContent sx={sxManualText1}>{t('cbilling_manual2-2')}</CardContent>
      <CardContent sx={sxManualText1}>{t('cbilling_manual2-3')}</CardContent>
      <ImageManual image={'cbilling_manual_07.jpg'}/>
      <CardContent sx={sxManualText1}>{t('cbilling_manual2-4')}</CardContent>
    </Card>
  );
}

export default CbillingBuy;