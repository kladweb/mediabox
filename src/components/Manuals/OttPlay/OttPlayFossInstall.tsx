import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "../ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "../../../services/sxStyles";
import type { ITranslate, PropsStep } from '../../../types/typesBox';

function OttPlayFossInstall({step}: PropsStep): JSX.Element {
  const {t}: ITranslate = useTranslation();

  return (
    <Card component='div' sx={sxCardMain}>
      <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-ottplayfossInstall')}</Box>
      <CardContent sx={sxManualText1}>{t('televizo_manual2-1')}</CardContent>
      <ImageManual image='OttPlay/ottplayerfoss_manual1.jpg'/>
      <CardContent sx={sxManualText1}>{t('televizo_manual2-12')}</CardContent>
      <ImageManual image='AndroidHelp/androidtvbox_manual10_text_editor.jpg'/>
      <CardContent sx={sxManualText1}>{t('televizo_manual2-2')}</CardContent>
      <CardContent sx={sxManualText1}>{t('televizo_manual2-13')}</CardContent>
      <ImageManual image='Televizo/televizo_manual2.jpg'/>
      <CardContent sx={sxManualText1}>{t('ottplayfoss_manual2-3')}</CardContent>
      <ImageManual image='OttPlay/ottplayerfoss_manual3.jpg'/>
      <CardContent sx={sxManualText1}>{t('ottplayfoss_manual2-4')}</CardContent>
    </Card>
  );
}

export default OttPlayFossInstall;