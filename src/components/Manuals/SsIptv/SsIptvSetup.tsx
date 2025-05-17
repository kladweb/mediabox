import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "../ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain, sxLink1 } from "../../../services/sxStyles";
import type { ITranslate, PropsStep } from '../../../types/typesBox';

function SsIptvSetup({step}: PropsStep): JSX.Element {
  const {t}: ITranslate = useTranslation();
  const linkSsIptv: string = 'https://ss-iptv.com/ru/users/playlist';

  return (
    <Card component='div' sx={sxCardMain}>
      <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-ssIptvSetup')}</Box>
      <CardContent sx={sxManualText1}>{t('ssiptv_manual2-1')}</CardContent>
      <ImageManual image='SsIptv/ssiptv_manual03.jpg'/>
      <CardContent sx={sxManualText1}>{t('ssiptv_manual2-2')}</CardContent>
      <ImageManual image='SsIptv/ssiptv_manual04.jpg'/>
      <CardContent sx={sxManualText1}>{t('ssiptv_manual2-3')}</CardContent>
      <Box component='a' href={linkSsIptv} target="_blank" sx={sxLink1}>SS IPTV website</Box>
      <CardContent sx={sxManualText1}>{t('ssiptv_manual2-4')}</CardContent>
      <ImageManual image='SsIptv/ssiptv_manual05.jpg'/>
      <CardContent sx={sxManualText1}>{t('ssiptv_manual2-5')}</CardContent>
      <ImageManual image='SsIptv/ssiptv_manual06.jpg'/>
      <CardContent sx={sxManualText1}>{t('ssiptv_manual2-6')}</CardContent>
      <ImageManual image='SsIptv/ssiptv_manual07.jpg'/>
      <CardContent sx={sxManualText1}>{t('ssiptv_manual2-7')}</CardContent>
      <ImageManual image='SsIptv/ssiptv_manual08.jpg'/>
      <CardContent sx={sxManualText1}>{t('ssiptv_manual2-8')}</CardContent>
      <CardContent sx={sxManualText1}>{t('ssiptv_manual2-9')}</CardContent>
      <CardContent sx={sxManualText1}>{t('ssiptv_manual2-10')}</CardContent>
      <ImageManual image='SsIptv/ssiptv_manual09.jpg'/>
      <ImageManual image='SsIptv/ssiptv_manual10.jpg'/>
      <CardContent sx={sxManualText1}>{t('note_manual01')}</CardContent>
      <CardContent sx={sxManualText1}>{t('enjoy_manual01')}</CardContent>
    </Card>
  );
}

export default SsIptvSetup;