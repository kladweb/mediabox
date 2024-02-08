import { Params, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import { sxManualText1, sxCardMain, sxHeadMain } from "../../../services/sxStyles";
import type { ITranslate, PropsStep } from '../../../types/typesBox';

function IlookChoose({step}: PropsStep): JSX.Element {
  const {t}: ITranslate = useTranslation();
  const params: Readonly<Params<string>> = useParams();
  const device: string | undefined = params.device;

  return (
    <Card component='div' sx={sxCardMain}>
      <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-IlookChoose')}</Box>
      <CardContent sx={sxManualText1}>{t('ilooktv_manual2-3')}</CardContent>
      {
        (device === 'androidtvbox') ?
          <CardContent sx={sxManualText1}>{t('ilooktv_manual2-4')}</CardContent>
          :
          <CardContent sx={sxManualText1}>{t('ilooktv_manual2-5')}</CardContent>
      }
    </Card>
  );
}

export default IlookChoose;