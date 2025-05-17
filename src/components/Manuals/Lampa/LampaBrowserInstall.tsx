import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import { sxManualText1, sxCardMain, sxHeadMain } from "../../../services/sxStyles";
import { appColors } from "../../../services/appColors";
import type { ITranslate, PropsStep } from '../../../types/typesBox';

function LampaBrowserInstall({step}: PropsStep): JSX.Element {
  const {t}: ITranslate = useTranslation();

  return (
    <Card component='div' sx={sxCardMain}>
      <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-LampaBrowserInstall')}</Box>
      <CardContent sx={sxManualText1}>{t('lampa_manual5-1')}</CardContent>
      <CardContent sx={sxManualText1}>{t('lampa_manual5-2')}</CardContent>
      <CardContent sx={{my: '0.5rem', py: 0, fontSize: '1.25rem', fontWeight: '500', color: appColors.mid2}}>
        {'https://lampa.mx'}
      </CardContent>
    </Card>
  );
}

export default LampaBrowserInstall;