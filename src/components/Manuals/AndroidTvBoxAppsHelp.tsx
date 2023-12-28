import * as React from "react";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import { sxManualText1, sxCardMain, sxHeadMain, sxLinksRegistration } from "./sxsManuals";

type Props = {
  step: number;
}

function AndroidTvBoxAppsHelp({step}: Props) {
  const {t} = useTranslation();
  const linkLeanKey = 'https://www.dropbox.com/scl/fi/rcmwwfts2xr93mdxgvy86/LeanKeyKeyboardPro_v6.1.13.apk?rlkey=91bmt9vphhk04qg660nn4nbua&dl=1';
  const linkTextEditor = 'https://www.dropbox.com/scl/fi/xlvic7nufk5dw5sbftlu1/Text-Editor_-Modern-Advanced_90.2_Apkpure.apk?rlkey=p8hs7wv2023m9vpa9kujqwoex&dl=1';

  return (
    <Card
      component='div'
      sx={sxCardMain}
    >
      <Box component='h4' sx={sxHeadMain}>
        {t('step')}{step}{t('step-AndroidTvBoxAppsHelp')}
      </Box>
      <CardContent sx={sxManualText1}>{t('android-help1-1')}</CardContent>
      <CardContent sx={sxManualText1}>{t('android-help1-2')}</CardContent>
      <Box component='a' href={linkLeanKey} target="_blank" sx={sxLinksRegistration}>
        LeanKeyKeyboardPro_v6.1.13.apk
      </Box>
      <CardContent sx={sxManualText1}>{t('android-help1-3')}</CardContent>
      <Box component='a' href={linkLeanKey} target="_blank" sx={sxLinksRegistration}>
        Text Editor_Modern&Advanced_90.2_Apkpure.apk
      </Box>
      <CardContent sx={sxManualText1}>{t('android-help1-4')}</CardContent>
    </Card>
  );
}

export default AndroidTvBoxAppsHelp;