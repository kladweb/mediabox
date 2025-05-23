import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ImageManual from "../ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain, sxToggle1 } from "../../../services/sxStyles";
import type { ITranslate, PropsStep } from '../../../types/typesBox';

function LampaSmarttvInstall({step}: PropsStep): JSX.Element {
  const {t}: ITranslate = useTranslation();
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
      <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-smartTv-ottplayInstall')}{'Lampa'}</Box>
      <CardContent sx={sxManualText1}>{t('mediaStationX_manual3-1_media')}</CardContent>
      <CardContent sx={sxManualText1}>{t('mediaStationX_manual3-2')}</CardContent>
      <ImageManual image='Mediastation/mediastation_01.jpg'/>
      <CardContent sx={sxManualText1}>{t('mediaStationX_manual3-10')}</CardContent>
      <ImageManual image='Mediastation/mediastation_06.jpg'/>
      <CardContent sx={sxManualText1}>{t('mediaStationX_manual3-11')}</CardContent>
      <ImageManual image='Mediastation/mediastation_07.jpg'/>
      <CardContent sx={sxManualText1}>{t('mediaStationX_manual3-3')}</CardContent>
      <ImageManual image='Mediastation/mediastation_02.jpg'/>
      <CardContent sx={sxManualText1}>{t('mediaStationX_manual3-4')}</CardContent>
      <ImageManual image='Mediastation/mediastation_03.jpg'/>
      <CardContent sx={sxManualText1}>
        {t('mediaStationX_manual3-5')}
        {'Lampa'}
        {t('mediaStationX_manual3-6')}
        {'Lampa'}.
        {t('mediaStationX_manual3-7_media')}
      </CardContent>
      <CardContent sx={sxManualText1}>{t('mediaStationX_manual3-70')}</CardContent>
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
          <ToggleButton value="first" sx={sxToggle1}>{t('mediaStationX_manual3-71')}{'Lampa'}</ToggleButton>
          <ToggleButton value="second" sx={sxToggle1}>{t('mediaStationX_manual3-72')}</ToggleButton>
        </ToggleButtonGroup>
      </CardContent>
      {
        (alignment === 'first') ?
          <>
            <CardContent sx={sxManualText1}>{t('mediaStationX_manual3-8_lampa')}</CardContent>
            <ImageManual image='Lampa/lampa_manual_17.jpg'/>
            <CardContent sx={sxManualText1}>{t('mediaStationX_manual3-9')}</CardContent>
            <CardContent sx={sxManualText1}>{t('mediaStationX_manual3-12_lampa')}</CardContent>
          </>
          :
          null
      }
      {
        (alignment === 'second') ?
          <>
            <CardContent sx={sxManualText1}>{t('mediaStationX_manual4-1')}</CardContent>
            <ImageManual image='Mediastation/mediastation_10.jpg'/>
            <CardContent sx={sxManualText1}>{t('mediaStationX_manual3-9')}</CardContent>
            <ImageManual image='Mediastation/mediastation_11.jpg'/>
            <CardContent sx={sxManualText1}>{t('mediaStationX_manual4-2')}</CardContent>
            <ImageManual image='Mediastation/mediastation_12.jpg'/>
            <CardContent sx={sxManualText1}>{t(`mediaStationX_manual4-3_ottplaybyalex`)}</CardContent>
            <ImageManual image='Mediastation/mediastation_13_ottplayfoss.jpg'/>
            <CardContent sx={sxManualText1}>{t('mediaStationX_manual4-35_lampa')}</CardContent>
            <ImageManual image='Lampa/lampa_manual_18.jpg'/>
            <CardContent sx={sxManualText1}>{t('mediaStationX_manual4-4')}{'Lampa'}.</CardContent>
            <ImageManual image='Lampa/lampa_manual_19.jpg'/>
            <CardContent sx={sxManualText1}>{t('mediaStationX_manual4-5')}</CardContent>
          </>
          :
          null
      }
      <CardContent sx={sxManualText1}>
        {t('mediaStationX_manual5-1_lampa')}
        <Box component='span' sx={{fontStyle: 'italic'}}>{'ggs2003-mediabox@yahoo.com . '}</Box>
        {t('mediaStationX_manual5-2_lampa')}
      </CardContent>
    </Card>
  );
}

export default LampaSmarttvInstall;