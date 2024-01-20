import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "./ImageManual";
import { operators } from "../../data/dataIPTV";
import { sxManualText1, sxCardMain, sxHeadMain, sxButtonLinkOperator } from "../../services/sxStyles";

type Props = {
  step: number;
}

function SzaravozRegistration({step}: Props) {
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
      <CardContent sx={sxManualText1}>{t('szaravoz_manual1-1')}
      </CardContent>
      <Box component='button'
           onClick={() => {
             handlerOperator(links[0]);
           }}
           sx={sxButtonLinkOperator}
      >
        {operators[operator as keyof (typeof operators)]['name']}
      </Box>
      <CardContent sx={sxManualText1}>{t('ilooktv_manual1-2')}</CardContent>
      <ImageManual image={`szaravoz_manual_01.jpg`}/>
      <CardContent sx={sxManualText1}>{t('szaravoz_manual1-3')}</CardContent>
      <CardContent sx={sxManualText1}>{t('ilooktv_manual1-4')}</CardContent>
      <ImageManual image={`szaravoz_manual_02.jpg`}/>
    </Card>
  );
}

export default SzaravozRegistration;