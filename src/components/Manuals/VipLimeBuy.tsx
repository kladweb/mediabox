import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "./ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain, sxLink1 } from "../../services/sxStyles";

type Props = {
  step: number;
}

function VipLimeBuy({step}: Props) {
  const {t} = useTranslation();
  const linkVipLimeBot = 'https://t.me/VipLime_test_bot'

  return (
    <Card
      component='div'
      sx={sxCardMain}
    >
      <Box component='h4' sx={sxHeadMain}>
        {t('step')}{step}{t('step-IlookBuy')}
      </Box>
      <CardContent sx={sxManualText1}>{t('viplime_manual2-1')}</CardContent>
      <Box component='a' href={linkVipLimeBot} target="_blank" sx={sxLink1}>
        @VipLime_test_bot
      </Box>
      <ImageManual image={'viplime_manual_05.jpg'}/>
      <CardContent sx={sxManualText1}>{t('viplime_manual2-3')}</CardContent>
      <ImageManual image={'viplime_manual_08.jpg'}/>
      <CardContent sx={sxManualText1}>{t('viplime_manual2-4')}</CardContent>
    </Card>
  );
}

export default VipLimeBuy;