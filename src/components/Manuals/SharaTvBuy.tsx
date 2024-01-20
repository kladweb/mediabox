import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "./ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "../../services/sxStyles";
import { useParams } from "react-router-dom";

type Props = {
  step: number;
}

function SharaTvBuy({step}: Props) {
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
      <CardContent sx={sxManualText1}>{t('sharatv_manual2-1')}</CardContent>
      <ImageManual image={'sharatv_manual_04.jpg'}/>
      <CardContent sx={sxManualText1}>{t('sharatv_manual2-2')}</CardContent>
      <ImageManual image={'sharatv_manual_05.jpg'}/>
      <CardContent sx={sxManualText1}>{t('sharatv_manual2-2')}</CardContent>
      <ImageManual image={'sharatv_manual_06.jpg'}/>
      <CardContent sx={sxManualText1}>{t('sharatv_manual2-5')}</CardContent>
      <ImageManual image={'sharatv_manual_10.jpg'}/>
      <CardContent sx={sxManualText1}>{t('sharatv_manual2-6')}</CardContent>
      <CardContent sx={sxManualText1}>{t('sharatv_manual2-7')}</CardContent>
      <ImageManual image={'sharatv_manual_12.jpg'}/>
    </Card>
  );
}

export default SharaTvBuy;