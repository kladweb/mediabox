import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import { sxManualText1, sxCardMain, sxHeadMain, sxLink1 } from "../../../services/sxStyles";
import { ILinks, ITranslate, PropsStep } from '../../../types/typesBox';

function OttNavigatorDownload({step}: PropsStep): JSX.Element {
  const {t}: ITranslate = useTranslation();
  const links: ILinks = {
    link4PDA: 'https://4pda.to/forum/index.php?showtopic=881962',
    linkFast: 'https://www.dropbox.com/scl/fi/02zqgnu4af2u1w7h0rf0h/OTT-Navigator-23072804-1.6.9.4.apk?rlkey=hehs4rncmif9ggqujftasah1j&dl=1'
  };

  return (
    <Card component='div' sx={sxCardMain}>
      <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-OttNavigatorDownload')}</Box>
      <CardContent sx={sxManualText1}>{t('ottnavigator_manual1-1')}</CardContent>
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
      <CardContent sx={sxManualText1}>{t('ottnavigator_manual1-2')}</CardContent>
    </Card>
  );
}

export default OttNavigatorDownload;