import { Params, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "../ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "../../../services/sxStyles";
import type { ITranslate, PropsStep } from '../../../types/typesBox';

function IlookPlaylist({step}: PropsStep): JSX.Element {
  const {t}: ITranslate = useTranslation();
  const params: Readonly<Params<string>> = useParams();
  const operator: string | undefined = params.operator;
  const devices: string | undefined = params.devices;
  const player: string | undefined = params.player;

  return (
    <Card
      component='div'
      sx={sxCardMain}
    >
      {
        (devices === 'smarttv' && player !== 'ssiptv' && player !== 'ottplayer') ?
          <>
            <Box component='h4' sx={sxHeadMain}>
              {t('step')}{step}{t('step-IlookPlaylist-smarttv')}
            </Box>
            <CardContent sx={sxManualText1}>{t('ilooktv_manual3-1')}</CardContent>
            <ImageManual image='Ilooktv/ilooktv_manual5.jpg'/>
            <ImageManual image='Ilooktv/ilooktv_manual51.jpg'/>
            <CardContent sx={sxManualText1}>{t('ilooktv_manual_smarttv_3-11')}</CardContent>
            <ImageManual image='Ilooktv/ilooktv_manual55.jpg'/>
            <CardContent sx={sxManualText1}>{t('ilooktv_manual_smarttv_3-12')}</CardContent>
          </>
          :
          <>
            <Box component='h4' sx={sxHeadMain}>
              {t('step')}{step}{t('step-IlookPlaylist')}
            </Box>
            <CardContent sx={sxManualText1}>{t('ilooktv_manual3-1')}</CardContent>
            {
              (player === 'flexiptv') ?
                <CardContent sx={sxManualText1}>{t('ilooktv_manual3-12')}</CardContent>
                :
                <CardContent sx={sxManualText1}>{t('ilooktv_manual3-11')}</CardContent>
            }
            <CardContent sx={sxManualText1}>{t('ilooktv_manual3-13')}</CardContent>
            <ImageManual image='Ilooktv/ilooktv_manual4.jpg'/>
            <CardContent sx={sxManualText1}>{t('ilooktv_manual3-2')}</CardContent>
            {
              (player === 'ottplayer' || player == 'ssiptv' || player == 'flexiptv') ?
                null
                :
                <>
                  <CardContent sx={sxManualText1}>{t('ilooktv_manual3-3')}</CardContent>
                  <CardContent sx={sxManualText1}>{t('ilooktv_manual3-4')}</CardContent>
                </>
            }
          </>
      }
    </Card>
  );
}

export default IlookPlaylist;