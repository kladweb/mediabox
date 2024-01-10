import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "./ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "./sxsManuals";

type Props = {
  step: number;
}

function SzaravozBuy({step}: Props) {
  const {t} = useTranslation();

  return (
    <Card
      component='div'
      sx={sxCardMain}
    >
      <Box component='h4' sx={sxHeadMain}>
        {t('step')}{step}{t('step-SzaravozBuy')}
      </Box>
      <CardContent sx={sxManualText1}>{t('szaravoz_manual2-1')}</CardContent>
      <CardContent sx={sxManualText1}>{t('szaravoz_manual2-2')}</CardContent>
      <ImageManual image={'szaravoz_manual_10.jpg'}/>
      <CardContent sx={sxManualText1}>{t('szaravoz_manual2-3')}</CardContent>
      <ImageManual image={'szaravoz_manual_11.jpg'}/>
    </Card>
  );
}

export default SzaravozBuy;