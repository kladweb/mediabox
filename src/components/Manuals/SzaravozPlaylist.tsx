import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "./ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "./sxsManuals";

type Props = {
  step: number;
}

function SzaravozPlaylist({step}: Props) {
  const {t} = useTranslation();
  const params = useParams();
  const device = params.device;
  let player = params.player;
  if (player === 'ottplayfoss' || player === 'ottplaybyalex') {
    player = 'televizo';
  }

  if (player !== 'ottplayfoss' &&
    player !== 'ottplaybyalex' &&
    player !== 'ottplayer' &&
    player !== 'ssiptv' &&
    player !== 'ottnavigator') {
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
    <Card
      component='div'
      sx={sxCardMain}
    >
      <Box component='h4' sx={sxHeadMain}>
        {t('step')}{step}{t('step-IlookPlaylist')}
      </Box>
      <CardContent sx={sxManualText1}>{t('szaravoz_manual3-1')}</CardContent>
      <ImageManual image={'szaravoz_manual_03.jpg'}/>
      <CardContent sx={sxManualText1}>{t('szaravoz_manual3-2')}</CardContent>
      <ImageManual image={'szaravoz_manual_04.jpg'}/>
      <CardContent sx={sxManualText1}>{t(`szaravoz_manual3-3_${player}`)}</CardContent>
      <ImageManual image={`szaravoz_manual_05_${player}.jpg`}/>
      {
        (player === 'ottplayer' || player === 'ssiptv' || player === 'ottnavigator') ?
          null
          :
          <CardContent sx={sxManualText1}>{t('ilooktv_manual3-3')}</CardContent>
      }
    </Card>
  );
}

export default SzaravozPlaylist;