import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "../ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "../../../services/sxStyles";
import type { ITranslate, PropsStep } from '../../../types/typesBox';
import { Params, useParams } from "react-router-dom";

function DomaVipPlaylist({step}: PropsStep): JSX.Element {
  const {t}: ITranslate = useTranslation();
  const params: Readonly<Params<string>> = useParams();
  const player: string | undefined = params.player;
  const devices: string | undefined = params.devices;

  return (
    <Card component='div' sx={sxCardMain}>
      <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-IlookPlaylist')}</Box>
      <CardContent sx={sxManualText1}>{t('domavip_manual3-1')}</CardContent>
      <ImageManual image='DomaVip/domavip_06.jpg'/>
      {
        (player === 'ottplayer' || player === 'flexiptv' || devices === 'smarttv') ?
         <>
           <CardContent sx={sxManualText1}>{t('domavip_manual3-21')}{t('domavip_manual3-3')}</CardContent>
           <ImageManual image='DomaVip/domavip_08.jpg'/>
         </>
          :
          <>
            <CardContent sx={sxManualText1}>{t('domavip_manual3-2')}{t('domavip_manual3-3')}</CardContent>
            <ImageManual image='DomaVip/domavip_07.jpg'/>
            <CardContent sx={sxManualText1}>{t('ilooktv_manual3-3')}</CardContent>
            <CardContent sx={sxManualText1}>{t('ilooktv_manual3-4')}</CardContent>
          </>
      }
      <CardContent sx={sxManualText1}>{t('szaravoz_manual3-4')}</CardContent>
    </Card>
  );
}

export default DomaVipPlaylist;