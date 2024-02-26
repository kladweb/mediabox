import React, { useState } from "react";
import { Params, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Card, CardContent } from "@mui/material";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ImageManual from "../ImageManual";
import { sxManualText1, sxCardMain, sxHeadMain, sxToggle1 } from "../../../services/sxStyles";
import { playersAll } from "../../../data/dataIPTV";
import type { ITranslate, PropsStep } from '../../../types/typesBox';

function SmartTvOttPlayInstall({step}: PropsStep): JSX.Element {
  const [alignment, setAlignment] = useState<string>('');
  const {t}: ITranslate = useTranslation();
  const params: Readonly<Params<string>> = useParams();
  const device: string | undefined = params.device;
  const player: string | undefined = params.player;
  const playerName: string = playersAll[player as keyof (typeof playersAll)];

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
      <Box component='h4' sx={sxHeadMain}>{t('step')}{step}{t('step-smartTv-ottplayInstall')}{playerName}</Box>
      <CardContent sx={sxManualText1}>{t(`mediaStationX_manual3-1_${device}`)}</CardContent>
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
        {playerName}
        {t('mediaStationX_manual3-6')}
        {playerName}.
        {t('mediaStationX_manual3-7')}
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
          <ToggleButton value="first" sx={sxToggle1}>{t('mediaStationX_manual3-71')}{playerName}</ToggleButton>
          <ToggleButton value="second" sx={sxToggle1}>{t('mediaStationX_manual3-72')}</ToggleButton>
        </ToggleButtonGroup>
      </CardContent>
      {
        (alignment === 'first') ?
          <>
            <CardContent sx={sxManualText1}>{t(`mediaStationX_manual3-8_${player}`)}</CardContent>
            <ImageManual image={`Mediastation/mediastation_04_${player}.jpg`}/>
            <CardContent sx={sxManualText1}>{t('mediaStationX_manual3-9')}</CardContent>
            <ImageManual image={`Mediastation/mediastation_05_${player}.jpg`}/>
            <CardContent sx={sxManualText1}>{t('mediaStationX_manual3-12')}{playerName}.</CardContent>
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
            <CardContent sx={sxManualText1}>{t(`mediaStationX_manual4-3_${player}`)}</CardContent>
            <ImageManual image={`Mediastation/mediastation_13_${player}.jpg`}/>
            <CardContent sx={sxManualText1}>{t(`mediaStationX_manual4-35_${player}`)}</CardContent>
            <ImageManual image={`Mediastation/mediastation_14_${player}.jpg`}/>
            <CardContent sx={sxManualText1}>{t('mediaStationX_manual4-4')}{playerName}.</CardContent>
            <ImageManual image={`Mediastation/mediastation_15_${player}.jpg`}/>
            <CardContent sx={sxManualText1}>{t('mediaStationX_manual4-5')}</CardContent>
          </>
          :
          null
      }
    </Card>
  );
}

export default SmartTvOttPlayInstall;