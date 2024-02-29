import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "../ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain, sxLink1 } from "../../../services/sxStyles";
import type { ITranslate, PropsStep } from '../../../types/typesBox';

function DomaVipBuy({step}: PropsStep): JSX.Element {
  const {t}: ITranslate = useTranslation();
  const linkVipLimeBot: string = 'https://t.me/VipLime_test_bot'

  return (
    <Card component='div' sx={sxCardMain}>
      <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-IlookBuy')}</Box>
      <CardContent sx={sxManualText1}>{t('domavip_manual2-1')}</CardContent>
      <CardContent sx={sxManualText1}>{t('domavip_manual2-3')}</CardContent>
      <ImageManual image='DomaVip/domavip_04.jpg'/>
      <CardContent sx={sxManualText1}>{t('domavip_manual2-4')}</CardContent>
      <ImageManual image='DomaVip/domavip_05.jpg'/>
      <CardContent sx={sxManualText1}>{t('sharatv_manual2-6')}</CardContent>
    </Card>
  );
}

export default DomaVipBuy;