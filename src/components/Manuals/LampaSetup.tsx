import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ImageManual from "./ImageManual";
import {
  sxManualText1,
  sxCardMain,
  sxHeadMain,
  sxLinksRegistration,
  sxToggle1,
  sxMainCards, sxMainDescription
} from "../../services/sxStyles";
import { appColors } from "../../services/appColors";

type Props = {
  step: number;
}

function LampaSetup({step}: Props) {
  const {t} = useTranslation();
  const linksPlugins = [
    'https://cub.red/plugin/tmdb-proxy',
    'https://nb557.github.io/plugins/online_mod.js',
    'https://bwa.to/plugins/prestige.js'
  ];

  return (
    <Card
      component='div'
      sx={sxCardMain}
    >
      <Box component='h4' sx={sxHeadMain}>
        {t('step')}{step}{t('step-LampaAndroidSetup')}
      </Box>
      <CardContent sx={sxManualText1}>{t('lampa_manual3-1')}</CardContent>
      <ImageManual image={'lampa_manual_01.jpg'}/>
      <CardContent sx={sxManualText1}>{t('lampa_manual3-2')}</CardContent>
      <ImageManual image={'lampa_manual_02.jpg'}/>
      <CardContent sx={sxManualText1}>{t('lampa_manual3-3')}</CardContent>
      <ImageManual image={'lampa_manual_03.jpg'}/>
      <CardContent sx={sxManualText1}>{t('lampa_manual3-4')}</CardContent>
      <ImageManual image={'lampa_manual_04.jpg'}/>
      <CardContent sx={sxManualText1}>{t('lampa_manual3-5')}</CardContent>
      {
        linksPlugins.map((link) => <CardContent
          sx={{my: '0.5rem', py: 0, fontSize: '1.25rem', fontWeight: '500', color: appColors.mid2}}>
          {link}
        </CardContent>)
      }
      <ImageManual image={'lampa_manual_05.jpg'}/>
      <ImageManual image={'lampa_manual_06.jpg'}/>
      <ImageManual image={'lampa_manual_07.jpg'}/>
      <CardContent sx={sxManualText1}>{t('lampa_manual3-6')}</CardContent>
      <ImageManual image={'lampa_manual_08.jpg'}/>
      <CardContent sx={sxManualText1}>{t('lampa_manual3-7')}</CardContent>
      <CardContent sx={sxManualText1}>{t('hdvideobox_manual2-8')}</CardContent>
      <CardContent sx={sxManualText1}>{t('lampa_manual3-8')}</CardContent>
      <ImageManual image={'lampa_manual_09.jpg'}/>
      <CardContent sx={sxManualText1}>{t('lampa_manual3-9')}</CardContent>
      <ImageManual image={'lampa_manual_10.jpg'}/>
      <CardContent sx={sxManualText1}>{t('lampa_manual3-10')}</CardContent>
      <ImageManual image={'lampa_manual_11.jpg'}/>
      <CardContent sx={sxManualText1}>{t('lampa_manual3-11')}</CardContent>
      <ImageManual image={'lampa_manual_12.jpg'}/>
      <CardContent sx={sxManualText1}>{t('lampa_manual3-12')}</CardContent>
      <ImageManual image={'lampa_manual_13.jpg'}/>


      <ImageManual image={'lampa_manual_14.jpg'}/>
      <CardContent sx={sxManualText1}>{t('hdvideobox_manual2-10')}</CardContent>
      <ImageManual image={'lampa_manual_15.jpg'}/>
      <ImageManual image={'lampa_manual_16.jpg'}/>
      <CardContent sx={sxManualText1}>{t('enjoy_manual01')}</CardContent>
    </Card>
  );
}

export default LampaSetup;