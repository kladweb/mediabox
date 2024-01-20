import * as React from "react";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import { sxManualText1, sxCardMain, sxHeadMain, sxLink1 } from "../../services/sxStyles";

type Props = {
  step: number;
}

function TelevizoDownload({step}: Props) {
  const {t} = useTranslation();
  const links = {
    linkOfficial: 'https://televizo.net/',
    link4PDA: 'https://4pda.to/forum/index.php?showtopic=943863',
    linkFast: 'https://www.dropbox.com/scl/fi/6haivb3jrcasqfy0t9xfb/Televizo_1.9.6.50-google.apk?rlkey=zxgpn050trbdp9bfwq0k5jzn7&dl=1'
  };

  return (
    <Card
      component='div'
      sx={sxCardMain}
    >
      <Box component='h4' sx={sxHeadMain}>
        {t('step')}{step}{t('step-TelevizoDownload')}
      </Box>
      <CardContent sx={sxManualText1}>{t('televizo_manual1-1')}</CardContent>
      {
        Object.keys(links).map((nameLink, i) =>
          <Box
            key={i}
            component='a'
            href={links[nameLink as keyof (typeof links)]}
            target="_blank"
            sx={sxLink1}
          >
            {t(nameLink)}
          </Box>
        )
      }
      <CardContent sx={sxManualText1}>{t('sendFiles_manual1-2')}</CardContent>
    </Card>
  );
}

export default TelevizoDownload;