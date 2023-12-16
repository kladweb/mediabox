import * as React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { appColors } from "../../services/appColors";
import ImageManual from "./ImageManual";
import { operators } from "../../data/dataIPTV";
import { sxManualText1, sxCardMain, sxHeadMain, sxLinksRegistration } from "./sxsManuals";

function TelevizoInstall() {
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
        {t('step')}6{t('step6')}
      </Box>
      <CardContent sx={sxManualText1}>{t('televizo_manual2-1')}</CardContent>
      <ImageManual image={`televizo_manual1.jpg`}/>
      <CardContent sx={sxManualText1}>{t('televizo_manual2-2')}</CardContent>
      <ImageManual image={`televizo_manual2.jpg`}/>
      <CardContent sx={sxManualText1}>{t('televizo_manual2-3')}</CardContent>
      <ImageManual image={`televizo_manual3.jpg`}/>
      <CardContent sx={sxManualText1}>{t('televizo_manual2-4')}</CardContent>
      <ImageManual image={`televizo_manual4.jpg`}/>
      <ImageManual image={`televizo_manual5.jpg`}/>
      <CardContent sx={sxManualText1}>{t('televizo_manual2-5')}</CardContent>
      <ImageManual image={`televizo_manual6.jpg`}/>
      <ImageManual image={`televizo_manual7.jpg`}/>
      <CardContent sx={sxManualText1}>{t('televizo_manual2-6')}</CardContent>
      <ImageManual image={`televizo_manual8.jpg`}/>
      <ImageManual image={`televizo_manual9.jpg`}/>
      <CardContent sx={sxManualText1}>{t('televizo_manual2-7')}</CardContent>
      <ImageManual image={`televizo_manual10.jpg`}/>
      <CardContent sx={sxManualText1}>{t('televizo_manual2-8')}</CardContent>
      <ImageManual image={`televizo_manual11.jpg`}/>
    </Card>
  );
}

export default TelevizoInstall;