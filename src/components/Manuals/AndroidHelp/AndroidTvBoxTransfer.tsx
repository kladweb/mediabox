import { useEffect, useState } from "react";
import { Params, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "../ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "../../../services/sxStyles";
import type { ITranslate, PropsStep } from '../../../types/typesBox';

function AndroidTvBoxTransfer({step}: PropsStep): JSX.Element {
  const {t}: ITranslate = useTranslation();
  const params: Readonly<Params<string>> = useParams();
  const player: string | undefined = params.player;
  const operator: string | undefined = params.operator;
  const cinema: string | undefined = params.cinema;

  const [numberFiles, setNumberFiles] = useState<number>(2);

  useEffect(() => {
    if ((player === 'ottnavigator') && (operator === 'sharavoz' || operator === 'viplime' || operator === 'cbilling')) {
      setNumberFiles(1);
    }
  }, []);

  return (
    <Card component='div' sx={sxCardMain}>
      <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-AndroidTvBoxTransfer')}</Box>
      <CardContent sx={sxManualText1}>{t('androidtvbox_manual2-1')}</CardContent>
      <ImageManual image='AndroidHelp/androidtvbox_manual1.jpg'/>
      <CardContent sx={sxManualText1}>{t('androidtvbox_manual2-2')}</CardContent>
      <ImageManual image='AndroidHelp/androidtvbox_manual2.jpg'/>
      <ImageManual image='AndroidHelp/androidtvbox_manual3.jpg'/>
      <CardContent sx={sxManualText1}>{t('androidtvbox_manual2-3')}</CardContent>
      <ImageManual image='AndroidHelp/androidtvbox_manual4.jpg'/>
      <CardContent sx={sxManualText1}>{t('androidtvbox_manual2-4')}</CardContent>
      <CardContent sx={sxManualText1}>{t(`androidtvbox_manual2-5_${numberFiles}`)}</CardContent>
      {
        (cinema) ?
          <>
            <ImageManual image={`AndroidHelp/androidtvbox_manual5_${cinema}_${numberFiles}.jpg`}/>
            <CardContent sx={sxManualText1}>{t(`androidtvbox_manual2-6_${numberFiles}`)}</CardContent>
            <ImageManual image='AndroidHelp/androidtvbox_manual6.jpg'/>
            <ImageManual image='AndroidHelp/androidtvbox_manual7.jpg'/>
            <ImageManual image={`AndroidHelp/androidtvbox_manual8_${cinema}_${numberFiles}.jpg`}/>
          </>
          :
          <>
            <ImageManual image={`AndroidHelp/androidtvbox_manual5_${player}_${numberFiles}.jpg`}/>
            <CardContent sx={sxManualText1}>{t(`androidtvbox_manual2-6_${numberFiles}`)}</CardContent>
            <ImageManual image='AndroidHelp/androidtvbox_manual6.jpg'/>
            <ImageManual image='AndroidHelp/androidtvbox_manual7.jpg'/>
            <ImageManual image={`AndroidHelp/androidtvbox_manual8_${player}_${numberFiles}.jpg`}/>
          </>
      }
    </Card>
  );
}

export default AndroidTvBoxTransfer;