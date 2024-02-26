import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "../ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "../../../services/sxStyles";
import type { ITranslate, PropsStep } from '../../../types/typesBox';

function SharavozBuy({step}: PropsStep): JSX.Element {
  const {t}: ITranslate = useTranslation();

  return (
    <Card component='div' sx={sxCardMain}>
      <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-SharavozBuy')}</Box>
      <CardContent sx={sxManualText1}>{t('szaravoz_manual2-1')}</CardContent>
      <CardContent sx={sxManualText1}>{t('szaravoz_manual2-2')}</CardContent>
      <ImageManual image='Sharavoz/szaravoz_manual_10.jpg'/>
      <CardContent sx={sxManualText1}>{t('szaravoz_manual2-3')}</CardContent>
      <ImageManual image='Sharavoz/szaravoz_manual_11.jpg'/>
    </Card>
  );
}

export default SharavozBuy;