import * as React from "react";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import { sxManualText1, sxCardMain, sxHeadMain, sxLinksRegistration } from "../../services/sxStyles";

type Props = {
  step: number;
}

function HdvideoboxDownload({step}: Props) {
  const {t} = useTranslation();
  const linkHdvid = 'https://www.dropbox.com/scl/fi/kpeoasy5y4glfi56tts8q/hdvideobox-2.31-fix-MaxVanced.apk?rlkey=915idjx3tgr5bmnt7picuysnd&dl=1'
  const linkVimu = 'https://www.dropbox.com/scl/fi/ph3p26byqoujw7pyi8eap/Vimu-Media-Player-6.82.apk?rlkey=0l17nfi3som7gmryu761zgsts&dl=1'


  return (
    <Card component='div' sx={sxCardMain}>
      <Box component='h4' sx={sxHeadMain}>
        {t('step')}{step}{t('step-HdvideoboxDownload')}
      </Box>
      <CardContent sx={sxManualText1}>{t('hdvideobox_manual1-1')}</CardContent>
      <Box component='a' href={linkHdvid} target="_blank" sx={sxLinksRegistration}>
        hdvideobox-2.31-fix-MaxVanced.apk
      </Box>
      <CardContent sx={sxManualText1}>{t('hdvideobox_manual1-2')}</CardContent>
      <Box component='a' href={linkVimu} target="_blank" sx={sxLinksRegistration}>
        Vimu+Media+Player.apk
      </Box>
      <CardContent sx={sxManualText1}>{t('ottnavigator_manual1-21')}</CardContent>
    </Card>
  );
}

export default HdvideoboxDownload;