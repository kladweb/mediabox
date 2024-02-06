import { Params, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "../ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "../../../services/sxStyles";
import type { ITranslate, PropsStep } from '../../../types/typesBox';

function VipLimePlaylist({step}: PropsStep) {
  const {t}: ITranslate = useTranslation();
  const params: Readonly<Params<string>> = useParams();
  const player: string | undefined = params.player;
  const devices: string | undefined = params.devices;

  return (
    <Card component='div' sx={sxCardMain}>
      {
        (player !== 'ottnavigator' && devices !== 'smarttv') &&
        <>
          <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-IlookPlaylist')}</Box>
          <CardContent sx={sxManualText1}>{t('viplime_manual3-1')}</CardContent>
          <CardContent sx={sxManualText1}>{t('viplime_manual3-2')}</CardContent>
          <ImageManual image={'viplime_manual_06.jpg'}/>
        </>
      }
      {
        (player !== 'ottnavigator' && devices === 'smarttv') &&
        <>
          <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-IlookPlaylist')}</Box>
          <CardContent sx={sxManualText1}>{t('viplime_manual3-1')}</CardContent>
          <CardContent sx={sxManualText1}>{t('viplime_manual3-22')}</CardContent>
          <ImageManual image={'viplime_manual_062.jpg'}/>
        </>
      }
      {
        (player === 'ottnavigator') &&
        <>
          <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-IlookChoose')}</Box>
          <CardContent sx={sxManualText1}>{t('viplime_manual3-3')}</CardContent>
          <ImageManual image={'viplime_manual_07.jpg'}/>
        </>
      }
      {
        (player === 'ottplayer' || player === 'ssiptv' || player === 'ottnavigator' || devices === 'smarttv') ?
          null
          :
          <CardContent sx={sxManualText1}>{t('ilooktv_manual3-3')}</CardContent>
      }
      <CardContent sx={sxManualText1}>{t('viplime_manual3-4')}</CardContent>
    </Card>
  );
}

export default VipLimePlaylist;