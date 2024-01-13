import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "./ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "../../services/sxStyles";

type Props = {
  step: number;
}

function KineskopPlaylist({step}: Props) {
  const {t} = useTranslation();
  const params = useParams();
  const player = params.player;
  const devices = params.devices;

  return (
    <Card
      component='div'
      sx={sxCardMain}
    >
      <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-IlookPlaylist')}</Box>
      <CardContent sx={sxManualText1}>{t('kineskopclub_manual3-1')}</CardContent>
      <ImageManual image={'kineskop_manual_05.jpg'}/>
      <CardContent sx={sxManualText1}>{t('kineskopclub_manual3-2')}</CardContent>
      <ImageManual image={'kineskop_manual_06.jpg'}/>
      <CardContent sx={sxManualText1}>{t('kineskopclub_manual3-3')}</CardContent>
      {
        (player === 'ottplayer' || devices === 'smarttv') ?
          <>
            <CardContent sx={sxManualText1}>{t('kineskopclub_manual3-42')}</CardContent>
            <ImageManual image={'kineskop_manual_07.jpg'}/>
          </>
          :
          <>
            <CardContent sx={sxManualText1}>{t('kineskopclub_manual3-4')}</CardContent>
            <ImageManual image={'kineskop_manual_08.jpg'}/>
            <CardContent sx={sxManualText1}>{t('ilooktv_manual3-3')}</CardContent>
          </>
      }
      <CardContent sx={sxManualText1}>{t('szaravoz_manual3-4')}</CardContent>
    </Card>
  );
}

export default KineskopPlaylist;