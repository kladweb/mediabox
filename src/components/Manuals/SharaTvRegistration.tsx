import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "./ImageManual";
import { operators } from "../../data/dataIPTV";
import { sxManualText1, sxCardMain, sxHeadMain, sxLinksRegistration } from "../../services/sxStyles";

type Props = {
  step: number;
}

function SharaTvRegistration({step}: Props) {
  const {t} = useTranslation();
  const params = useParams();
  const operator = params.operator;
  const links: string[] = operators[operator as keyof (typeof operators)]['links'];

  const handlerOperator = (link: string) => {
    window.open(link);
  }

  return (
    <Card
      component='div'
      sx={sxCardMain}
    >
      <Box component='h4' sx={sxHeadMain}>
        {t('step')}{step}{t('step-IlookRegistration')}
      </Box>
      <CardContent sx={sxManualText1}>{t('sharatv_manual1-1')}
      </CardContent>
      <Box component='button'
           onClick={() => {
             handlerOperator(links[0]);
           }}
           sx={sxLinksRegistration}
      >
        {operators[operator as keyof (typeof operators)]['name']}
      </Box>
      <ImageManual image={'sharatv_manual_01.jpg'}/>
      <ImageManual image={'sharatv_manual_02.jpg'}/>
      <CardContent sx={sxManualText1}>{t('ilooktv_manual1-2')}</CardContent>
      <ImageManual image={'sharatv_manual_03.jpg'}/>
      <CardContent sx={sxManualText1}>{t('viplime_manual1-3')}</CardContent>
      <CardContent sx={sxManualText1}>{t('ilooktv_manual1-4')}</CardContent>
    </Card>
  );
}

export default SharaTvRegistration;