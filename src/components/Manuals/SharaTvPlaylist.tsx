import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "./ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "../../services/sxStyles";
import SharaTvBuy from "./SharaTvBuy";

type Props = {
  step: number;
}

function SharaTvPlaylist({step}: Props) {
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
      <CardContent sx={sxManualText1}>{t('sharatv_manual3-1')}</CardContent>
      <ImageManual image={'sharatv_manual_07.jpg'}/>
      <CardContent sx={sxManualText1}>{t('sharatv_manual3-2')}</CardContent>
      <ImageManual image={'sharatv_manual_08.jpg'}/>
      <CardContent sx={sxManualText1}>{t('szaravoz_manual3-4')}</CardContent>
    </Card>
  );
}

export default SharaTvPlaylist;