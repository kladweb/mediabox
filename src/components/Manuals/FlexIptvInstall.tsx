import * as React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "./ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "./sxsManuals";
import { operators } from "../../data/dataIPTV";

type Props = {
  step: number;
}

function FlexIptvInstall({step}: Props) {
  const {t} = useTranslation();
  const params = useParams();
  const operator = params.operator;

  return (
    <Card
      component='div'
      sx={sxCardMain}
    >
      <Box component='h4' sx={sxHeadMain}>
        {t('step')}{step}{t('step-flexiptvInstall')}
      </Box>
      <CardContent sx={sxManualText1}>{t('flexiptv_manual1-1')}</CardContent>
      <CardContent sx={sxManualText1}>{t('flexiptv_manual1-2')}</CardContent>
      <ImageManual image={'flexiptv_manual01.jpg'}/>
      <CardContent sx={sxManualText1}>{t('flexiptv_manual1-3')}</CardContent>
      <ImageManual image={'flexiptv_manual02.jpg'}/>
      <CardContent sx={sxManualText1}>{t('flexiptv_manual1-4')}</CardContent>
      <ImageManual image={'flexiptv_manual03.jpg'}/>
      <CardContent sx={sxManualText1}>{t('flexiptv_manual1-5')}</CardContent>
      <ImageManual image={'flexiptv_manual04.jpg'}/>
      <CardContent sx={sxManualText1}>{t('flexiptv_manual1-6')}</CardContent>
      <ImageManual image={'flexiptv_manual05.jpg'}/>
      <CardContent sx={sxManualText1}>{t('flexiptv_manual1-7')}</CardContent>
      <ImageManual image={'flexiptv_manual06.jpg'}/>
      <CardContent sx={sxManualText1}>{t('flexiptv_manual1-8')}</CardContent>
      <ImageManual image={'flexiptv_manual07.jpg'}/>
      <ImageManual image={'flexiptv_manual08.jpg'}/>
      <CardContent sx={sxManualText1}>
        {t('flexiptv_manual1-9')}
        {operators[operator as keyof (typeof operators)]['name']}
        {':\n'}
        {operators[operator as keyof (typeof operators)]['epg']}
      </CardContent>
      <ImageManual image={`flexiptv_manual09_${operator}.jpg`}/>
      <CardContent sx={sxManualText1}>{t('flexiptv_manual1-10')}</CardContent>
      <ImageManual image={'flexiptv_manual10.jpg'}/>
      <CardContent sx={sxManualText1}>{t('flexiptv_manual1-11')}</CardContent>
      <ImageManual image={'flexiptv_manual11.jpg'}/>
      <ImageManual image={'flexiptv_manual12.jpg'}/>
      <CardContent sx={sxManualText1}>{t('flexiptv_manual1-12')}</CardContent>
      <ImageManual image={'flexiptv_manual13.jpg'}/>
      <CardContent sx={sxManualText1}>{t('flexiptv_manual1-13')}</CardContent>
      <ImageManual image={'flexiptv_manual14.jpg'}/>
      <CardContent sx={sxManualText1}>{t('flexiptv_manual1-14')}</CardContent>
      <ImageManual image={'flexiptv_manual15.jpg'}/>
      <ImageManual image={'flexiptv_manual16.jpg'}/>
      <ImageManual image={'flexiptv_manual17.jpg'}/>
      <ImageManual image={'flexiptv_manual18.jpg'}/>
      <CardContent sx={sxManualText1}>{t('flexiptv_manual1-15')}</CardContent>
      <CardContent sx={sxManualText1}>{t('enjoy_manual01')}</CardContent>
    </Card>
  );
}

export default FlexIptvInstall;