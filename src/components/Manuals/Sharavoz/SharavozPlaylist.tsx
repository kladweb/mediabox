import { Params, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "../ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "../../../services/sxStyles";
import type { ITranslate, PropsStep } from '../../../types/typesBox';

function SharavozPlaylist({step}: PropsStep): JSX.Element {
  const {t}: ITranslate = useTranslation();
  const params: Readonly<Params<string>> = useParams();
  const device: string | undefined = params.device;
  const devices: string | undefined = params.devices;
  let player: string | undefined = params.player;
  if (player === 'ottplayfoss' || player === 'ottplaybyalex') {
    player = 'televizo';
  }

  if (player === 'ottplayfoss' ||
    player === 'ottplaybyalex' ||
    player === 'flexiptv') {
    player = 'other';
  }

  if (player === 'ssiptv') {
    if (device === 'lgsmarttv') {
      player = 'ssiptv_lg'
    } else {
      player = 'ssiptv_samsung'
    }
  }

  return (
    <Card component='div' sx={sxCardMain}>
      {
        (player !== 'ottnavigator') ?
          <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-IlookPlaylist')}</Box>
          :
          <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-IlookChoose')}</Box>
      }
      <CardContent sx={sxManualText1}>{t('szaravoz_manual3-1')}</CardContent>
      <ImageManual image={'szaravoz_manual_03.jpg'}/>
      <CardContent sx={sxManualText1}>{t('szaravoz_manual3-2')}</CardContent>
      <ImageManual image={'szaravoz_manual_04.jpg'}/>
      <CardContent sx={sxManualText1}>
        {t(`szaravoz_manual3-3_${player}`)}
        {
          (params.player === 'flexiptv' ||
            params.player === 'ottnavigator' ||
            (params.player === 'ottplayfoss' && devices === 'smarttv') ||
            (params.player === 'ottplaybyalex' && devices === 'smarttv')) ?
            <>{t('szaravoz_manual3-3_foto')}</>
            :
            <>{t('szaravoz_manual3-3_copy')}</>
        }
      </CardContent>
      <ImageManual image={`szaravoz_manual_05_${player}.jpg`}/>
      {
        (params.player === 'ottplayer' || params.player === 'ottnavigator' || devices === 'smarttv') ?
          null
          :
          <>
            <CardContent sx={sxManualText1}>{t('ilooktv_manual3-3')}</CardContent>
            <CardContent sx={sxManualText1}>{t('ilooktv_manual3-4')}</CardContent>
          </>
      }
      <CardContent sx={sxManualText1}>{t('szaravoz_manual3-4')}</CardContent>
    </Card>
  );
}

export default SharavozPlaylist;