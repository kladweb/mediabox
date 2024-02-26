import { useTranslation } from "react-i18next";
import ImageManual from "../ImageManual";
import { Box, Card, CardContent } from "@mui/material";
import { sxManualText1, sxCardMain, sxHeadMain, sxLinksPlugins, } from "../../../services/sxStyles";
import type { ITranslate, PropsStep } from '../../../types/typesBox';

function LampaSetup({step}: PropsStep): JSX.Element {
  const {t}: ITranslate = useTranslation();
  const linksPlugins: string[] = [
    'https://cub.red/plugin/tmdb-proxy',
    'https://nb557.github.io/plugins/online_mod.js',
    'https://bwa.to/plugins/prestige.js'
  ];
  const linksPluginsRezerv1: string = 'http://lampa.stream/modss';

  return (
    <Card component='div' sx={sxCardMain}>
      <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-LampaSetup')}</Box>
      <CardContent sx={sxManualText1}>{t('lampa_manual3-1')}</CardContent>
      <ImageManual image='Lampa/lampa_manual_01.jpg'/>
      <CardContent sx={sxManualText1}>{t('lampa_manual3-2')}</CardContent>
      <ImageManual image='Lampa/lampa_manual_02.jpg'/>
      <CardContent sx={sxManualText1}>{t('lampa_manual3-3')}</CardContent>
      <ImageManual image='Lampa/lampa_manual_03.jpg'/>
      <CardContent sx={sxManualText1}>{t('lampa_manual3-4')}</CardContent>
      <ImageManual image='Lampa/lampa_manual_04.jpg'/>
      <CardContent sx={sxManualText1}>{t('lampa_manual3-5')}</CardContent>
      {
        linksPlugins.map((link: string, index: number) => <CardContent
          key={index}
          sx={sxLinksPlugins}>
          {link}
        </CardContent>)
      }
      <ImageManual image='Lampa/lampa_manual_05.jpg'/>
      <ImageManual image='Lampa/lampa_manual_06.jpg'/>
      <ImageManual image='Lampa/lampa_manual_07.jpg'/>
      <CardContent sx={sxManualText1}>{t('lampa_manual3-6')}</CardContent>
      <ImageManual image='Lampa/lampa_manual_08.jpg'/>
      <CardContent sx={sxManualText1}>
        {t('lampa_manual3-7')}{'\n'}
        {t('lampa_manual3-71')}{'\n'}
        {t('lampa_manual3-72')}
        {linksPluginsRezerv1}{'.\n'}
        {t('lampa_manual3-73')}
      </CardContent>
      <CardContent sx={sxManualText1}>{t('hdvideobox_manual2-8')}</CardContent>
      <CardContent sx={sxManualText1}>{t('lampa_manual3-8')}</CardContent>
      <ImageManual image='Lampa/lampa_manual_09.jpg'/>
      <CardContent sx={sxManualText1}>{t('lampa_manual3-9')}</CardContent>
      <ImageManual image='Lampa/lampa_manual_10.jpg'/>
      <CardContent sx={sxManualText1}>{t('lampa_manual3-10')}</CardContent>
      <ImageManual image='Lampa/lampa_manual_11.jpg'/>
      <CardContent sx={sxManualText1}>{t('lampa_manual3-11')}</CardContent>
      <ImageManual image='Lampa/lampa_manual_12.jpg'/>
      <CardContent sx={sxManualText1}>{t('lampa_manual3-12')}</CardContent>
      <ImageManual image='Lampa/lampa_manual_13.jpg'/>
      <CardContent sx={sxManualText1}>{t('hdvideobox_manual2-10')}</CardContent>
      <ImageManual image='Lampa/lampa_manual_14.jpg'/>
      <ImageManual image='Lampa/lampa_manual_15.jpg'/>
      <ImageManual image='Lampa/lampa_manual_16.jpg'/>
      <CardContent sx={sxManualText1}>{t('enjoy_manual01')}</CardContent>
    </Card>
  );
}

export default LampaSetup;