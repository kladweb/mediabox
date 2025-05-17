import { Params, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "../ImageManual";
import { operators } from "../../../data/dataIPTV";
import { sxManualText1, sxCardMain, sxHeadMain, sxButtonLinkOperator } from "../../../services/sxStyles";
import type { PropsStep, ITranslate } from '../../../types/typesBox';

function IlookRegistration({step}: PropsStep): JSX.Element {
  const {t}: ITranslate = useTranslation();
  const params: Readonly<Params<string>> = useParams();
  const operator: string | undefined = params.operator;
  const links: string[] = operators[operator as keyof (typeof operators)]['links'];

  const handlerOperator = (link: string): void => {
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
      <CardContent sx={sxManualText1}>{t('ilooktv_manual1-1')}
      </CardContent>
      {
        links.map((link: string, i: number) =>
          <Box
            key={i}
            component='button'
            onClick={() => {
              handlerOperator(link);
            }}
            sx={sxButtonLinkOperator}
          >
            {`${operators[operator as keyof (typeof operators)]['name']}${i + 1}`}
          </Box>
        )
      }
      <CardContent sx={sxManualText1}>{t('ilooktv_manual1-2')}</CardContent>
      <ImageManual image='Ilooktv/ilooktv_manual1.jpg'/>
      <CardContent sx={sxManualText1}>{t('ilooktv_manual1-3')}</CardContent>
      <ImageManual image='Ilooktv/ilooktv_manual2.jpg'/>
      <CardContent sx={sxManualText1}>{t('ilooktv_manual1-4')}</CardContent>
    </Card>
  );
}

export default IlookRegistration;