import * as React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { appColors } from "../../services/appColors";
import ImageManual from "./ImageManual";
import { operators } from "../../data/dataIPTV";
import { sxManualText1, sxCardMain, sxHeadMain, sxLinksRegistration } from "./sxsManuals";

function TelevizoDownload() {
  const {t} = useTranslation();
  const params = useParams();
  const operator = params.operator;
  const links = {
    televizoLink1: 'https://televizo.net/',
    televizoLink2: 'https://4pda.to/forum/index.php?showtopic=943863',
    televizoLink3: 'https://www.dropbox.com/scl/fi/6haivb3jrcasqfy0t9xfb/Televizo_1.9.6.50-google.apk?rlkey=zxgpn050trbdp9bfwq0k5jzn7&dl=1'
  };

  return (
    <Card
      component='div'
      sx={sxCardMain}
    >
      <Box component='h4' sx={sxHeadMain}>
        {t('step')}4{t('step4')}
      </Box>
      <CardContent sx={sxManualText1}>{t('televizo_manual1-1')}</CardContent>
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
      <CardContent sx={sxManualText1}>{t('televizo_manual1-2')}</CardContent>
    </Card>
  );
}

export default TelevizoDownload;