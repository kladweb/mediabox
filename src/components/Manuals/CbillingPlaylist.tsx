import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "./ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "../../services/sxStyles";

type Props = {
  step: number;
}

function CbillingPlaylist({step}: Props) {
  const {t} = useTranslation();
  const params = useParams();
  const player = params.player;
  const devices = params.devices;

  return (
    <Card
      component='div'
      sx={sxCardMain}
    >
      {
        (player !== 'ottnavigator') ?
          <>
            <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-IlookPlaylist')}</Box>
            <CardContent sx={sxManualText1}>{t('cbilling_manual3-1')}</CardContent>
            <ImageManual image={'cbilling_manual_08.jpg'}/>
            {
              (player === 'flexiptv' ||
                player === 'ottnavigator' ||
                (player === 'ottplayfoss' && devices === 'smarttv') ||
                (player === 'ottplaybyalex' && devices === 'smarttv')) ?
                <CardContent sx={sxManualText1}>{t('cbilling_manual3-21')}</CardContent>
                :
                <CardContent sx={sxManualText1}>{t('cbilling_manual3-2')}</CardContent>
            }
            <ImageManual image={'cbilling_manual_09.jpg'}/>
          </>
          :
          <>
            <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-IlookChoose')}</Box>
            <CardContent sx={sxManualText1}>{t('cbilling_manual3-3')}</CardContent>
            <CardContent sx={sxManualText1}>{t('cbilling_manual3-4')}</CardContent>
            <ImageManual image={'cbilling_manual_08.jpg'}/>
          </>
      }
      {
        (player === 'ottplayer' || player === 'ottnavigator' || devices === 'smarttv') ?
          null
          :
          <CardContent sx={sxManualText1}>{t('ilooktv_manual3-3')}</CardContent>
      }
      <CardContent sx={sxManualText1}>{t('szaravoz_manual3-4')}</CardContent>
    </Card>
  );
}

export default CbillingPlaylist;