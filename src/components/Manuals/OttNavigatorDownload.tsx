import * as React from "react";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import { sxManualText1, sxCardMain, sxHeadMain, sxLinksRegistration } from "./sxsManuals";

type Props = {
  step: number;
}

function OttNavigatorDownload({step}: Props) {
  const {t} = useTranslation();
  const links = {
    link4PDA: 'https://4pda.to/forum/index.php?showtopic=881962',
  };

  return (
    <Card
      component='div'
      sx={sxCardMain}
    >
      <Box component='h4' sx={sxHeadMain}>
        {t('step')}{step}{t('step-OttNavigatorDownload')}
      </Box>
      <CardContent sx={sxManualText1}>{t('ottnavigator_manual1-1')}</CardContent>
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
      <CardContent sx={sxManualText1}>{t('ottnavigator_manual1-2')}</CardContent>
    </Card>
  );
}

export default OttNavigatorDownload;