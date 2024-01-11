import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "./ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "./sxsManuals";

type Props = {
  step: number;
}

function VipLimePlaylist({step}: Props) {
  const {t} = useTranslation();
  const params = useParams();
  const player = params.player;

  return (
    <Card
      component='div'
      sx={sxCardMain}
    >
      {
        (player !== 'ottnavigator') ?
          <>
            <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-IlookPlaylist')}</Box>
            <CardContent sx={sxManualText1}>{t('viplime_manual3-1')}</CardContent>
            <CardContent sx={sxManualText1}>{t('viplime_manual3-2')}</CardContent>
            <ImageManual image={'viplime_manual_06.jpg'}/>
          </>
          :
          <>
            <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-IlookChoose')}</Box>
            <CardContent sx={sxManualText1}>{t('viplime_manual3-3')}</CardContent>
            <ImageManual image={'viplime_manual_07.jpg'}/>
          </>
      }
      {
        (player === 'ottplayer' || player === 'ssiptv' || player === 'ottnavigator') ?
          null
          :
          <CardContent sx={sxManualText1}>{t('ilooktv_manual3-3')}</CardContent>
      }
      <CardContent sx={sxManualText1}>{t('viplime_manual3-4')}</CardContent>
    </Card>
  );
}

export default VipLimePlaylist;