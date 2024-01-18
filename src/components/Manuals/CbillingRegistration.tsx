import * as React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { appColors } from "../../services/appColors";
import ImageManual from "./ImageManual";
import { operators } from "../../data/dataIPTV";
import { sxManualText1, sxCardMain, sxHeadMain, sxLinksRegistration } from "../../services/sxStyles";

type Props = {
  step: number;
}

function CbillingRegistration({step}: Props) {
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
      <CardContent sx={sxManualText1}>{t('cbilling_manual1-1')}
      </CardContent>
      {
        links.map((link, i) =>
          <Box
            key={i}
            component='button'
            onClick={() => {
              handlerOperator(link);
            }}
            sx={sxLinksRegistration}
          >
            {`${operators[operator as keyof (typeof operators)]['name']}${i + 1}`}
          </Box>
        )
      }
      <CardContent sx={sxManualText1}>{t('cbilling_manual1-2')}</CardContent>
      <ImageManual image={'cbilling_manual_01.jpg'}/>
      <CardContent sx={sxManualText1}>{t('cbilling_manual1-3')}</CardContent>
      <ImageManual image={'cbilling_manual_03.jpg'}/>
      <CardContent sx={sxManualText1}>{t('ilooktv_manual1-4')}</CardContent>
    </Card>
  );
}

export default CbillingRegistration;