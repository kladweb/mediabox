import { Params, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "../ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "../../../services/sxStyles";
import { operators } from "../../../data/dataIPTV";
import type { ITranslate, PropsStep } from '../../../types/typesBox';

function FlexIptvInstall({step}: PropsStep): JSX.Element {
  const {t}: ITranslate = useTranslation();
  const params: Readonly<Params<string>> = useParams();
  const operator: string | undefined = params.operator;

  return (
    <Card component='div' sx={sxCardMain}>
      <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-flexiptvInstall')}</Box>
      <CardContent sx={sxManualText1}>{t('flexiptv_manual1-1')}</CardContent>
      <CardContent sx={sxManualText1}>{t('flexiptv_manual1-2')}</CardContent>
      <ImageManual image='FlexIptv/flexiptv_manual01.jpg'/>
      <CardContent sx={sxManualText1}>{t('flexiptv_manual1-3')}</CardContent>
      <ImageManual image='FlexIptv/flexiptv_manual02.jpg'/>
      <CardContent sx={sxManualText1}>{t('flexiptv_manual1-4')}</CardContent>
      <ImageManual image='FlexIptv/flexiptv_manual03.jpg'/>
      <CardContent sx={sxManualText1}>{t('flexiptv_manual1-5')}</CardContent>
      <ImageManual image='FlexIptv/flexiptv_manual04.jpg'/>
      <CardContent sx={sxManualText1}>{t('flexiptv_manual1-6')}</CardContent>
      <ImageManual image='FlexIptv/flexiptv_manual05.jpg'/>
      <CardContent sx={sxManualText1}>{t('flexiptv_manual1-7')}</CardContent>
      <ImageManual image='FlexIptv/flexiptv_manual06.jpg'/>
      <CardContent sx={sxManualText1}>{t('flexiptv_manual1-8')}</CardContent>
      <ImageManual image='FlexIptv/flexiptv_manual07.jpg'/>
      <ImageManual image='FlexIptv/flexiptv_manual08.jpg'/>
      <CardContent sx={sxManualText1}>
        {t('flexiptv_manual1-9')}
        {operators[operator as keyof (typeof operators)]['name']}
        {':\n'}
        {operators[operator as keyof (typeof operators)]['epg']}
      </CardContent>
      <ImageManual image={`FlexIptv/flexiptv_manual09_${operator}.jpg`}/>
      <CardContent sx={sxManualText1}>{t('flexiptv_manual1-10')}</CardContent>
      <ImageManual image='FlexIptv/flexiptv_manual10.jpg'/>
      <CardContent sx={sxManualText1}>{t('flexiptv_manual1-11')}</CardContent>
      <ImageManual image='FlexIptv/flexiptv_manual11.jpg'/>
      <ImageManual image='FlexIptv/flexiptv_manual12.jpg'/>
      <CardContent sx={sxManualText1}>{t('flexiptv_manual1-12')}</CardContent>
      <ImageManual image='FlexIptv/flexiptv_manual13.jpg'/>
      <CardContent sx={sxManualText1}>{t('flexiptv_manual1-13')}</CardContent>
      <ImageManual image='FlexIptv/flexiptv_manual14.jpg'/>
      <CardContent sx={sxManualText1}>{t('flexiptv_manual1-14')}</CardContent>
      <ImageManual image='FlexIptv/flexiptv_manual15.jpg'/>
      <ImageManual image='FlexIptv/flexiptv_manual16.jpg'/>
      <ImageManual image='FlexIptv/flexiptv_manual17.jpg'/>
      <ImageManual image='FlexIptv/flexiptv_manual18.jpg'/>
      <CardContent sx={sxManualText1}>{t('note_manual01')}</CardContent>
      <CardContent sx={sxManualText1}>{t('enjoy_manual01')}</CardContent>
    </Card>
  );
}

export default FlexIptvInstall;