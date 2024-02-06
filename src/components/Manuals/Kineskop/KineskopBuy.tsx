import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "../ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "../../../services/sxStyles";
import type { ITranslate, PropsStep } from '../../../types/typesBox';

function KineskopBuy({step}: PropsStep) {
  const {t}: ITranslate = useTranslation();

  return (
    <Card component='div' sx={sxCardMain}>
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