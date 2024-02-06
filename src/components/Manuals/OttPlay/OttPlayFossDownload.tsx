import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import { sxManualText1, sxCardMain, sxHeadMain, sxLink1 } from "../../../services/sxStyles";
import { ILinks, ITranslate, PropsStep } from '../../../types/typesBox';

function OttPlayFossDownload({step}: PropsStep) {
  const {t}: ITranslate = useTranslation();
  const links: ILinks = {
    linkOfficial: 'https://ottp.eu.org/www/install/android/',
    linkFast: 'https://github.com/prog4food/ottplay-foss-android/releases/download/v1.54-bin/ott-play_1.54-foss.apk'
  };

  return (
    <Card component='div' sx={sxCardMain}>
      <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-OttPlayFossDownload')}</Box>
      <CardContent sx={sxManualText1}>{t('ottplayfoss_manual1-1')}</CardContent>
      <CardContent sx={sxManualText1}>{t('ottplayfoss_manual1-2')}</CardContent>
      {
        Object.keys(links).map((nameLink: string, i: number) =>
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

export default OttPlayFossDownload;