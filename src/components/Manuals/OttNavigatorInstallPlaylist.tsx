import * as React from "react";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "./ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "./sxsManuals";
import { useParams } from "react-router-dom";

type Props = {
  step: number;
}

function OttNavigatorInstallPlaylist({step}: Props) {
  const params = useParams();
  const operator = params.operator;
  const {t} = useTranslation();

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
      <CardContent sx={sxManualText1}>{t('televizo_manual2-12')}</CardContent>
      <ImageManual image={'androidtvbox_manual10_text_editor.jpg'}/>
      <CardContent sx={sxManualText1}>{t('televizo_manual2-2')}</CardContent>
      <CardContent sx={sxManualText1}>{t('televizo_manual2-13')}</CardContent>
      <ImageManual image={`televizo_manual2.jpg`}/>
      <CardContent sx={sxManualText1}>{t('ottnavigator_manual2-3')}</CardContent>
      <ImageManual image={`ottnavigator_manual3.jpg`}/>
      <CardContent sx={sxManualText1}>{t('ottnavigator_manual2-45')}</CardContent>
      <ImageManual image={`ottnavigator_manual5.jpg`}/>
      <CardContent sx={sxManualText1}>{t('ottnavigator_manual2-6')}</CardContent>
      <ImageManual image={'ottnavigator_manual6.jpg'}/>
      <ImageManual image={`ottnavigator_manual7.jpg`}/>
      <CardContent sx={sxManualText1}>{t('ottnavigator_manual2-7')}</CardContent>
      <ImageManual image={`ottnavigator_manual8.jpg`}/>
      <ImageManual image={`ottnavigator_manual9.jpg`}/>
      <CardContent sx={sxManualText1}>{t('note_manual01')}</CardContent>
      <CardContent sx={sxManualText1}>{t('enjoy_manual01')}</CardContent>
    </Card>
  );
}

export default OttNavigatorInstallPlaylist;