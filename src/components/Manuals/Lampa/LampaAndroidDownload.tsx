import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import { sxManualText1, sxCardMain, sxHeadMain, sxLink1 } from "../../../services/sxStyles";
import type { ITranslate, PropsStep } from '../../../types/typesBox';

function LampaAndroidDownload({step}: PropsStep): JSX.Element {
  const {t}: ITranslate = useTranslation();
  const linkLampa: string = 'https://www.dropbox.com/scl/fi/4bylxbdm6kcm0gjlbzxla/Lampa-v7.7.7-82.apk?rlkey=drfpvnnkluy73qwry7td5ezby&dl=1'
  const linkVimu: string = 'https://www.dropbox.com/scl/fi/ph3p26byqoujw7pyi8eap/Vimu-Media-Player-6.82.apk?rlkey=0l17nfi3som7gmryu761zgsts&dl=1'


  return (
    <Card component='div' sx={sxCardMain}>
      <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-LampaAndroidDownload')}</Box>
      <CardContent sx={sxManualText1}>{t('lampaandroid_manual1-1')}</CardContent>
      <Box component='a' href={linkLampa} target="_blank" sx={sxLink1}>Lampa+v7.7.7-82.apk</Box>
      <CardContent sx={sxManualText1}>{t('hdvideobox_manual1-2')}</CardContent>
      <Box component='a' href={linkVimu} target="_blank" sx={sxLink1}>Vimu+Media+Player.apk</Box>
      <CardContent sx={sxManualText1}>{t('ottnavigator_manual1-2')}</CardContent>
    </Card>
  );
}

export default LampaAndroidDownload;