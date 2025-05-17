import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "../ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "../../../services/sxStyles";
import type { ITranslate, PropsStep } from '../../../types/typesBox';

function SharaTvPlaylist({step}: PropsStep): JSX.Element {
  const {t}: ITranslate = useTranslation();

  return (
    <Card component='div' sx={sxCardMain}>
      <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-IlookPlaylist')}</Box>
      <CardContent sx={sxManualText1}>{t('sharatv_manual3-1')}</CardContent>
      <ImageManual image='SharaTv/sharatv_manual_07.jpg'/>
      <CardContent sx={sxManualText1}>{t('sharatv_manual3-2')}</CardContent>
      <ImageManual image='SharaTv/sharatv_manual_08.jpg'/>
      <CardContent sx={sxManualText1}>{t('szaravoz_manual3-4')}</CardContent>
    </Card>
  );
}

export default SharaTvPlaylist;