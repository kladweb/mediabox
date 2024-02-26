import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "../ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "../../../services/sxStyles";
import type { ITranslate, PropsStep } from '../../../types/typesBox';

function OttNavigatorInstallPlaylist({step}: PropsStep): JSX.Element {
  const {t}: ITranslate = useTranslation();

  return (
    <Card component='div' sx={sxCardMain}>
      <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-OttNavigatorInstall')}</Box>
      <CardContent sx={sxManualText1}>{t('televizo_manual2-1')}</CardContent>
      <ImageManual image='OttNavigator/ottnavigator_manual1.jpg'/>
      <CardContent sx={sxManualText1}>{t('televizo_manual2-12')}</CardContent>
      <ImageManual image='AndroidHelp/androidtvbox_manual10_text_editor.jpg'/>
      <CardContent sx={sxManualText1}>{t('televizo_manual2-2')}</CardContent>
      <CardContent sx={sxManualText1}>{t('televizo_manual2-13')}</CardContent>
      <ImageManual image='Televizo/televizo_manual2.jpg'/>
      <CardContent sx={sxManualText1}>{t('ottnavigator_manual2-3')}</CardContent>
      <ImageManual image='OttNavigator/ottnavigator_manual3.jpg'/>
      <CardContent sx={sxManualText1}>{t('ottnavigator_manual2-45')}</CardContent>
      <ImageManual image='OttNavigator/ottnavigator_manual5.jpg'/>
      <CardContent sx={sxManualText1}>{t('ottnavigator_manual2-6')}</CardContent>
      <ImageManual image='OttNavigator/ottnavigator_manual6.jpg'/>
      <ImageManual image='OttNavigator/ottnavigator_manual7.jpg'/>
      <CardContent sx={sxManualText1}>{t('ottnavigator_manual2-7')}</CardContent>
      <ImageManual image='OttNavigator/ottnavigator_manual8.jpg'/>
      <ImageManual image='OttNavigator/ottnavigator_manual9.jpg'/>
      <CardContent sx={sxManualText1}>{t('note_manual01')}</CardContent>
      <CardContent sx={sxManualText1}>{t('enjoy_manual01')}</CardContent>
    </Card>
  );
}

export default OttNavigatorInstallPlaylist;