import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "./ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "./sxsManuals";

type Props = {
  step: number;
}

function KineskopBuy({step}: Props) {
  const {t} = useTranslation();
  const params = useParams();
  const operator = params.operator;

  return (
    <Card
      component='div'
      sx={sxCardMain}
    >
      <Box component='h4' sx={sxHeadMain}>
        {t('step')}{step}{t('step-IlookBuy')}
      </Box>
      <CardContent sx={sxManualText1}>{t('ilooktv_manual2-1')}</CardContent>
      <CardContent sx={sxManualText1}>{t('kineskopclub_manual2-2')}</CardContent>
      <ImageManual image={'kineskop_manual_09.jpg'}/>
      <CardContent sx={sxManualText1}>{t('kineskopclub_manual2-3')}</CardContent>
      <ImageManual image={'kineskop_manual_10.jpg'}/>
    </Card>
  );
}

export default KineskopBuy;