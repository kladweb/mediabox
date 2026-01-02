import {Box, Card, CardContent} from "@mui/material";
import {sxButtonLinkOperator, sxCardMain, sxHeadMain, sxManualText1} from "../../../services/sxStyles";
import type {ITranslate, PropsStep} from "../../../types/typesBox";
import {useTranslation} from "react-i18next";
import {operators} from "../../../data/dataIPTV";
import {Params, useParams} from "react-router-dom";

function TvTeamRegistration({step}: PropsStep) {
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
      <CardContent sx={sxManualText1}>{t('tvteam_manual1-1')}
      </CardContent>
      <Box component='button'
           sx={sxButtonLinkOperator}
           onClick={() => {
             handlerOperator(links[0]);
           }}
      >
        {operators[operator as keyof (typeof operators)]['name']}
      </Box>
      <CardContent sx={sxManualText1}>{t('tvteam_manual1-2')}</CardContent>
    </Card>
  )
}

export default TvTeamRegistration;