import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "./ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "../../services/sxStyles";

type Props = {
  step: number;
}

function IlookBuy({step}: Props) {
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
      <ImageManual image={`${operator}_manual3.jpg`}/>
      <CardContent sx={sxManualText1}>{t('ilooktv_manual2-2')}</CardContent>
    </Card>
  );
}

export default IlookBuy;