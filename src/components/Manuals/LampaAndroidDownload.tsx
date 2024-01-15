import * as React from "react";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import { sxManualText1, sxCardMain, sxHeadMain, sxLinksRegistration } from "../../services/sxStyles";

type Props = {
  step: number;
}

function LampaAndroidDownload({step}: Props) {
  const {t} = useTranslation();
  const linkLampa = 'https://www.dropbox.com/scl/fi/4bylxbdm6kcm0gjlbzxla/Lampa-v7.7.7-82.apk?rlkey=drfpvnnkluy73qwry7td5ezby&dl=1'
  const linkVimu = 'https://www.dropbox.com/scl/fi/ph3p26byqoujw7pyi8eap/Vimu-Media-Player-6.82.apk?rlkey=0l17nfi3som7gmryu761zgsts&dl=1'


  return (
    <Card component='div' sx={sxCardMain}>
      <Box component='h4' sx={sxHeadMain}>
        {t('step')}{step}{t('step-LampaAndroidDownload')}
      </Box>
      <CardContent sx={sxManualText1}>{t('lampaandroid_manual1-1')}</CardContent>
      <Box component='a' href={linkLampa} target="_blank" sx={sxLinksRegistration}>
        Lampa+v7.7.7-82.apk
      </Box>
      <CardContent sx={sxManualText1}>{t('hdvideobox_manual1-2')}</CardContent>
      <Box component='a' href={linkVimu} target="_blank" sx={sxLinksRegistration}>
        Vimu+Media+Player.apk
      </Box>
      <CardContent sx={sxManualText1}>{t('ottnavigator_manual1-2')}</CardContent>
    </Card>
  );
}

export default LampaAndroidDownload;