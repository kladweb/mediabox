import * as React from "react";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import { sxManualText1, sxCardMain, sxHeadMain, sxLinksRegistration } from "../../services/sxStyles";

type Props = {
  step: number;
}

function OttPlayFossDownload({step}: Props) {
  const {t} = useTranslation();
  const links = {
    linkOfficial: 'https://ottp.eu.org/www/install/android/',
    // link4PDA: 'https://4pda.to/forum/index.php?showtopic=943863',
    linkFast: 'https://github.com/prog4food/ottplay-foss-android/releases/download/v1.54-bin/ott-play_1.54-foss.apk'
  };

  return (
    <Card
      component='div'
      sx={sxCardMain}
    >
      <Box component='h4' sx={sxHeadMain}>
        {t('step')}{step}{t('step-OttPlayFossDownload')}
      </Box>
      <CardContent sx={sxManualText1}>{t('ottplayfoss_manual1-1')}</CardContent>
      <CardContent sx={sxManualText1}>{t('ottplayfoss_manual1-2')}</CardContent>
      {
        Object.keys(links).map((nameLink, i) =>
          <Box
            key={i}
            component='a'
            href={links[nameLink as keyof (typeof links)]}
            target="_blank"
            sx={sxLinksRegistration}
          >
            {t(nameLink)}
          </Box>
        )
      }
      <CardContent sx={sxManualText1}>{t('sendFiles_manual1-2')}</CardContent>
    </Card>
  );
}

export default OttPlayFossDownload;