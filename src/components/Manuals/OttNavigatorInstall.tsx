import * as React from "react";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "./ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "./sxsManuals";
import { useParams } from "react-router-dom";

type Props = {
  step: number;
}

function OttNavigatorInstall({step}: Props) {
  const params = useParams();
  const operator = params.operator;
  const {t} = useTranslation();

  console.log(operator);

  return (
    <Card
      component='div'
      sx={sxCardMain}
    >
      <Box component='h4' sx={sxHeadMain}>
        {t('step')}{step}{t('step-OttNavigatorInstall')}
      </Box>
      <CardContent sx={sxManualText1}>{t('televizo_manual2-1')}</CardContent>
      <ImageManual image={`ottnavigator_manual1.jpg`}/>
      <CardContent sx={sxManualText1}>{t('televizo_manual2-2')}</CardContent>
      <ImageManual image={`televizo_manual2.jpg`}/>
      <CardContent sx={sxManualText1}>{t('ottnavigator_manual2-3')}</CardContent>
      <ImageManual image={`ottnavigator_manual3.jpg`}/>
      <CardContent sx={sxManualText1}>{t('ottnavigator_manual2-4')}</CardContent>
      <ImageManual image={`ottnavigator_manual4.jpg`}/>
      <CardContent sx={sxManualText1}>{t(`ottnavigator_${operator}_manual2-5`)}</CardContent>
      <ImageManual image={`ottnavigator_${operator}_manual5.jpg`}/>
      <CardContent sx={sxManualText1}>{t('ottnavigator_manual2-6')}</CardContent>
      <ImageManual image={`ottnavigator_manual6.jpg`}/>
      <ImageManual image={`ottnavigator_manual7.jpg`}/>
      <CardContent sx={sxManualText1}>{t('ottnavigator_manual2-7')}</CardContent>
      <ImageManual image={`ottnavigator_manual8.jpg`}/>
      <ImageManual image={`ottnavigator_manual9.jpg`}/>
      <CardContent sx={sxManualText1}>{t('televizo_manual2-9')}</CardContent>
    </Card>
  );
}

export default OttNavigatorInstall;