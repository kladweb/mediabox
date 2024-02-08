import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "../ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain } from "../../../services/sxStyles";
import type { ITranslate, PropsStep } from '../../../types/typesBox';

function HdvideoboxInstall({step}: PropsStep): JSX.Element {
  const {t}: ITranslate = useTranslation();

  return (
    <Card component='div' sx={sxCardMain}>
      <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-hdvideoboxInstall')}</Box>
      <CardContent sx={sxManualText1}>{t('hdvideobox_manual2-1')}</CardContent>
      <ImageManual image={'androidtvbox_manual8_hdvideobox_2.jpg'}/>
      <CardContent sx={sxManualText1}>{t('hdvideobox_manual2-3')}</CardContent>
      <CardContent sx={sxManualText1}>{t('hdvideobox_manual2-4')}</CardContent>
      <ImageManual image={'hdvid_manual_01.jpg'}/>
      <ImageManual image={'hdvid_manual_02.jpg'}/>
      <CardContent sx={sxManualText1}>{t('hdvideobox_manual2-5')}</CardContent>
      <ImageManual image={'hdvid_manual_03.jpg'}/>
      <CardContent sx={sxManualText1}>{t('hdvideobox_manual2-6')}</CardContent>
      <ImageManual image={'hdvid_manual_04.jpg'}/>
      <CardContent sx={sxManualText1}>{t('hdvideobox_manual2-7')}</CardContent>
      <ImageManual image={'hdvid_manual_05.jpg'}/>
      <CardContent sx={sxManualText1}>{t('hdvideobox_manual2-8')}</CardContent>
      <CardContent sx={sxManualText1}>{t('hdvideobox_manual2-9')}</CardContent>
      <ImageManual image={'hdvid_manual_06.jpg'}/>
      <CardContent sx={sxManualText1}>{t('hdvideobox_manual2-10')}</CardContent>
      <ImageManual image={'hdvid_manual_07.jpg'}/>
      <ImageManual image={'hdvid_manual_08.jpg'}/>
      <ImageManual image={'hdvid_manual_09.jpg'}/>
      <CardContent sx={sxManualText1}>{t('enjoy_manual01')}</CardContent>
    </Card>
  );
}

export default HdvideoboxInstall;