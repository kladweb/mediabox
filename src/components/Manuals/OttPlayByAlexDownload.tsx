import * as React from "react";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import { sxManualText1, sxCardMain, sxHeadMain, sxLinksRegistration } from "./sxsManuals";

type Props = {
  step: number;
}

function OttPlayByAlexDownload({step}: Props) {
  const {t} = useTranslation();
  const links = {
    linkOfficial: 'https://forum.ott-play.com/index.php?topic=2.0',
    link4PDA: 'https://4pda.to/forum/index.php?showtopic=991852',
    linkFast: 'http://ott-play.com/android/app-debug.apk'
  };

  return (
    <Card
      component='div'
      sx={sxCardMain}
    >
      <Box component='h4' sx={sxHeadMain}>
        {t('step')}{step}{t('step-OttPlayByAlexDownload')}
      </Box>
      <CardContent sx={sxManualText1}>{t('ottplaybyalex_manual1-1')}</CardContent>
      <CardContent sx={sxManualText1}>{t('ottplaybyalex_manual1-2')}</CardContent>
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

export default OttPlayByAlexDownload;