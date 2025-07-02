import { Params, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "../ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "../../../services/sxStyles";
import type { ITranslate, PropsStep } from '../../../types/typesBox';

function RusskoetvPlaylist({step}: PropsStep): JSX.Element {
  const {t}: ITranslate = useTranslation();
  const params: Readonly<Params<string>> = useParams();
  const player: string | undefined = params.player;
  const devices: string | undefined = params.devices;

  return (
    <Card component='div' sx={sxCardMain}>
      <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-IlookPlaylist')}</Box>
      <CardContent sx={sxManualText1}>{t('russkoetv_manual3-1')}</CardContent>
      <ImageManual image='Russkoetv/russkoetv_manual_06.png'/>
      <CardContent sx={sxManualText1}>{t('russkoetv_manual3-2')}</CardContent>
      <ImageManual image='Russkoetv/russkoetv_manual_07.png'/>
      <CardContent sx={sxManualText1}>{t('szaravoz_manual3-4')}</CardContent>
    </Card>
  );
}

export default RusskoetvPlaylist;
