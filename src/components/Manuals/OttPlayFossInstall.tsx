import * as React from "react";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "./ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "./sxsManuals";

type Props = {
  step: number;
}

function OttPlayFossInstall({step}: Props) {
  const {t} = useTranslation();

  return (
    <Card
      component='div'
      sx={sxCardMain}
    >
      <Box component='h4' sx={sxHeadMain}>
        {t('step')}{step}{t('step-ottplayfossInstall')}
      </Box>
      <CardContent sx={sxManualText1}>{t('televizo_manual2-1')}</CardContent>
      <ImageManual image={`ottplayerfoss_manual1.jpg`}/>
      <CardContent sx={sxManualText1}>{t('televizo_manual2-12')}</CardContent>
      <ImageManual image={'androidtvbox_manual10_text_editor.jpg'}/>
      <CardContent sx={sxManualText1}>{t('televizo_manual2-2')}</CardContent>
      <CardContent sx={sxManualText1}>{t('televizo_manual2-13')}</CardContent>
      <ImageManual image={`televizo_manual2.jpg`}/>
      <CardContent sx={sxManualText1}>{t('ottplayfoss_manual2-3')}</CardContent>
      <ImageManual image={`ottplayerfoss_manual3.jpg`}/>
      <CardContent sx={sxManualText1}>{t('ottplayfosso_manual2-4')}</CardContent>
      <ImageManual image={'ottplayfoss_manual4.jpg'}/>
      <CardContent sx={sxManualText1}>{t('ottplayfosso_manual2-5')}</CardContent>
      <ImageManual image={'ottplayfoss_manual5.jpg'}/>
      <CardContent sx={sxManualText1}>{t('ottplayfosso_manual2-6')}</CardContent>
      <ImageManual image={'ottplayfoss_manual6.jpg'}/>
      <ImageManual image={'ottplayfoss_manual7.jpg'}/>
      <CardContent sx={sxManualText1}>{t('ottplayfosso_manual2-7')}</CardContent>
      <ImageManual image={'ottplayfoss_manual8.jpg'}/>
      <ImageManual image={'ottplayfoss_manual9.jpg'}/>
      <ImageManual image={'ottplayfoss_manual10.jpg'}/>
      <CardContent sx={sxManualText1}>{t('ottplayfosso_manual2-8')}</CardContent>
      <ImageManual image={'ottplayfoss_manual11.jpg'}/>
      <CardContent sx={sxManualText1}>{t('ottplayfosso_manual2-9')}</CardContent>
      <ImageManual image={'ottplayfoss_manual12.jpg'}/>
      <CardContent sx={sxManualText1}>{t('ottplayfosso_manual2-10')}</CardContent>
      <ImageManual image={'ottplayfoss_manual13.jpg'}/>
      <CardContent sx={sxManualText1}>{t('ottplayfosso_manual2-11')}</CardContent>
      <ImageManual image={'ottplayfoss_manual14.jpg'}/>
      <ImageManual image={'ottplayfoss_manual15.jpg'}/>
      <CardContent sx={sxManualText1}>{t('televizo_manual2-9')}</CardContent>
    </Card>
  );
}

export default OttPlayFossInstall;