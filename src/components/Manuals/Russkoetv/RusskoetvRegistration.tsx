import { Params, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "../ImageManual";
import { operators } from "../../../data/dataIPTV";
import { sxManualText1, sxCardMain, sxHeadMain, sxButtonLinkOperator } from "../../../services/sxStyles";
import type { ITranslate, PropsStep } from '../../../types/typesBox';

function RusskoetvRegistration({step}: PropsStep): JSX.Element {
  const {t}: ITranslate = useTranslation();
  const params: Readonly<Params<string>> = useParams();
  const operator: string | undefined = params.operator;
  const links: string[] = operators[operator as keyof (typeof operators)]['links'];

  const handlerOperator = (link: string) => {
    window.open(link);
  }

  return (
    <Card component='div' sx={sxCardMain}>
      <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-IlookRegistration')}</Box>
      <CardContent sx={sxManualText1}>{t('russkoetv_manual1-1')}
      </CardContent>
      <Box component='button'
           sx={sxButtonLinkOperator}
           onClick={() => {
             handlerOperator(links[0]);
           }}
      >
        {operators[operator as keyof (typeof operators)]['name']}
      </Box>
      <CardContent sx={sxManualText1}>{t('ilooktv_manual1-2')}</CardContent>
      <ImageManual image='Russkoetv/russkoetv_manual_01.png'/>
      <ImageManual image='Russkoetv/russkoetv_manual_02.png'/>
      <CardContent sx={sxManualText1}>{t('viplime_manual1-3')}</CardContent>
      <CardContent sx={sxManualText1}>{t('ilooktv_manual1-4')}</CardContent>
      <ImageManual image='Russkoetv/russkoetv_manual_03.png'/>
    </Card>
  );
}

export default RusskoetvRegistration;
