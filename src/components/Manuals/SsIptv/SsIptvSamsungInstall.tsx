import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ImageManual from "../ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain, sxToggle1, sxLink1 } from "../../../services/sxStyles";
import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import type { ITranslate, PropsStep } from '../../../types/typesBox';

function SsIptvSamsungInstall({step}: PropsStep): JSX.Element {
  const {t}: ITranslate = useTranslation();
  const linkSsiptvTizen: string = 'https://ss-iptv.com/files/ssiptv_tizen_usb.zip';
  const linkSsiptvOrsay: string = 'https://ss-iptv.com/files/ssiptv_orsay_usb.zip';
  const [alignment, setAlignment] = useState<string>('');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <Card component='div' sx={sxCardMain}>
      <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-ssIptvSamsungInstall')}</Box>
      <CardContent sx={sxManualText1}>{t('ssiptv_manual1-3')}</CardContent>
      <CardContent sx={sxManualText1}>{t('ssiptv_manual1-31')}</CardContent>
      <CardContent sx={{textAlign: 'center'}}>
        <ToggleButtonGroup
          color='warning'
          value={alignment}
          exclusive
          orientation='vertical'
          onChange={handleChange}
          aria-label="Platform"
          size='small'
        >
          <ToggleButton value="first" sx={sxToggle1}>{t('ssiptv_manual1-41')}</ToggleButton>
          <ToggleButton value="second" sx={sxToggle1}>{t('ssiptv_manual1-42')}</ToggleButton>
        </ToggleButtonGroup>
      </CardContent>
      {
        (alignment === 'first') ?
          <>
            <CardContent sx={sxManualText1}>{t('ssiptv_manual1-51')}</CardContent>
            <Box component='a' href={linkSsiptvTizen} target="_blank" sx={sxLink1}>
              ssiptv_tizen_usb.zip
            </Box>
            <CardContent sx={sxManualText1}>{t('ssiptv_manual1-52')}</CardContent>
            <CardContent sx={sxManualText1}>{t('ssiptv_manual1-53')}</CardContent>
            <CardContent sx={sxManualText1}>{t('ssiptv_manual1-56')}</CardContent>
            <CardContent sx={sxManualText1}>{t('ssiptv_manual1-57')}</CardContent>
            <ImageManual image='SsIptv/ssiptv_manual11.jpg'/>
            <CardContent sx={sxManualText1}>{t('ssiptv_manual1-54')}</CardContent>
          </>
          :
          null
      }
      {
        (alignment === 'second') ?
          <>
            <CardContent sx={sxManualText1}>{t('ssiptv_manual1-51')}</CardContent>
            <Box component='a' href={linkSsiptvOrsay} target="_blank" sx={sxLink1}>
              ssiptv_orsay_usb.zip
            </Box>
            <CardContent sx={sxManualText1}>{t('ssiptv_manual1-52')}</CardContent>
            <CardContent sx={sxManualText1}>{t('ssiptv_manual1-53')}</CardContent>
            <CardContent sx={sxManualText1}>{t('ssiptv_manual1-56')}</CardContent>
            <CardContent sx={sxManualText1}>{t('ssiptv_manual1-58')}</CardContent>
            <ImageManual image='SsIptv/ssiptv_manual12.jpg'/>
            <CardContent sx={sxManualText1}>{t('ssiptv_manual1-55')}</CardContent>
          </>
          :
          null
      }
    </Card>
  );
}

export default SsIptvSamsungInstall;