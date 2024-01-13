import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "./ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "../../services/sxStyles";

type Props = {
  step: number;
}

function AndroidTvBoxTransfer({step}: Props) {
  const {t} = useTranslation();
  const params = useParams();
  const player = params.player;
  const operator = params.operator;

  const [numberFiles, setNumberFiles] = useState(2);

  useEffect(() => {
    if ((player === 'ottnavigator') && (operator === 'sharavoz' || operator === 'viplime' || operator === 'cbilling')) {
      setNumberFiles(1);
    }
  }, []);

  return (
    <Card
      component='div'
      sx={sxCardMain}
    >
      <Box component='h4' sx={sxHeadMain}>
        {t('step')}{step}{t('step-AndroidTvBoxTransfer')}
      </Box>
      <CardContent sx={sxManualText1}>{t('androidtvbox_manual2-1')}</CardContent>
      <ImageManual image={`androidtvbox_manual1.jpg`}/>
      <CardContent sx={sxManualText1}>{t('androidtvbox_manual2-2')}</CardContent>
      <ImageManual image={`androidtvbox_manual2.jpg`}/>
      <ImageManual image={`androidtvbox_manual3.jpg`}/>
      <CardContent sx={sxManualText1}>{t('androidtvbox_manual2-3')}</CardContent>
      <ImageManual image={`androidtvbox_manual4.jpg`}/>
      <CardContent sx={sxManualText1}>{t('androidtvbox_manual2-4')}</CardContent>
      <CardContent sx={sxManualText1}>{t(`androidtvbox_manual2-5_${numberFiles}`)}</CardContent>
      <ImageManual image={`androidtvbox_manual5_${player}_${numberFiles}.jpg`}/>
      <CardContent sx={sxManualText1}>{t(`androidtvbox_manual2-6_${numberFiles}`)}</CardContent>
      <ImageManual image={'androidtvbox_manual6.jpg'}/>
      <ImageManual image={'androidtvbox_manual7.jpg'}/>
      <ImageManual image={`androidtvbox_manual8_${player}_${numberFiles}.jpg`}/>
    </Card>
  );
}

export default AndroidTvBoxTransfer;