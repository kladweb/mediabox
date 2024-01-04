import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box } from '@mui/material';
import IlookRegistration from "./IlookRegistration";
import IlookBuy from "./IlookBuy";
import IlookPlaylistTvBox from "./IlookPlaylistTvBox";
import IlookKey from "./IlookKey";
import TelevizoDownload from "./TelevizoDownload";
import AndroidTvBoxTransfer from "./AndroidTvBoxTransfer";
import TelevizoInstall from "./TelevizoInstall";
import OttNavigatorDownload from "./OttNavigatorDownload";
import OttPlayFossDownload from "./OttPlayFossDownload";
import OttNavigatorInstall from "./OttNavigatorInstall";
import OttPlayFossInstall from "./OttPlayFossInstall";
import { appColors } from "../../services/appColors";
import { playersAll } from "../../data/dataIPTV";
import AppsHelpDownload from "./AppsHelpDownload";
import AppsHelpInstall from "./AppsHelpInstall";
import OttPlayByAlexDownload from "./OttPlayByAlexDownload";
import OttPlayByAlexInstall from "./OttPlayByAlexInstall";
import OttplayerWebSetup from "./OttplayerWebSetup";
import OttplayerInstall from "./OttplayerInstall";
import IlookPlaylistSmartTv from "./IlookPlaylistSmartTv";
import SmartTvOttPlayInstall from "./SmartTvOttPlayInstall";
import OttPlayFossSetup from "./OttPlayFossSetup";
import OttPlaySmartTVSetup from "./OttPlaySmartTVSetup";

function Manuals() {
  const navigate = useNavigate();
  const {t} = useTranslation();
  const params = useParams();
  const operator = params.operator;
  const devices = params.devices;
  const device = params.device;
  const player = params.player;
  const stepManuals: JSX.Element[] = [];

  useEffect(() => {
    if (player && !Object.keys(playersAll).includes(player)) {
      navigate('/');
    }
  }, []);

  if (operator === 'ilooktv') {
    stepManuals.push(<IlookRegistration key={stepManuals.length} step={stepManuals.length + 1}/>);
    stepManuals.push(<IlookBuy key={stepManuals.length} step={stepManuals.length + 1}/>)
  }

  if (operator === 'ilooktv' && (player === 'ottplayfoss' || player === 'ottplaybyalex')) {
    stepManuals.push(<IlookKey key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  // if (operator === 'ilooktv' && ((device === 'androidtvbox' && player !== 'cbilling') ||
  //   (devices === 'smarttv' && player === 'ssiptv'))) {
  //   stepManuals.push(<IlookPlaylistTvBox key={stepManuals.length} step={stepManuals.length + 1}/>);
  // }

  if (operator === 'ilooktv' && (player === 'ssiptv' || player === 'ottplayer')) {
    stepManuals.push(<IlookPlaylistTvBox key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (device === 'androidtvbox' && player !== 'ottplayer') {
    stepManuals.push(<AppsHelpDownload key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (player === 'televizo' && device === 'androidtvbox') {
    stepManuals.push(<TelevizoDownload key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (player === 'ottnavigator' && device === 'androidtvbox') {
    stepManuals.push(<OttNavigatorDownload key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (player === 'ottplayfoss' && device === 'androidtvbox') {
    stepManuals.push(<OttPlayFossDownload key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (player === 'ottplaybyalex' && device === 'androidtvbox') {
    stepManuals.push(<OttPlayByAlexDownload key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (player === 'ottplayer') {
    stepManuals.push(<OttplayerWebSetup key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (device === 'androidtvbox' && (operator !== 'cbilling' && player !== 'ottplayer')) {
    stepManuals.push(<AndroidTvBoxTransfer key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (device === 'androidtvbox' && player !== 'ottplayer') {
    stepManuals.push(<AppsHelpInstall key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (player === 'televizo' && device === 'androidtvbox') {
    stepManuals.push(<TelevizoInstall key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (player === 'ottnavigator' && device === 'androidtvbox') {
    stepManuals.push(<OttNavigatorInstall key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (player === 'ottplayfoss' && device === 'androidtvbox') {
    stepManuals.push(<OttPlayFossInstall key={stepManuals.length} step={stepManuals.length + 1}/>);
    stepManuals.push(<OttPlayFossSetup key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (player === 'ottplaybyalex' && device === 'androidtvbox') {
    stepManuals.push(<OttPlayByAlexInstall key={stepManuals.length} step={stepManuals.length + 1}/>);
    stepManuals.push(<OttPlayFossSetup key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (player === 'ottplayer' && device === 'androidtvbox') {
    stepManuals.push(<OttplayerInstall key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  //SMART TV
  if ((device === 'lgsmarttv' || device === 'samsungsmarttv') &&
    (player === 'ottplayfoss' || player === 'ottplaybyalex')) {
    stepManuals.push(<IlookPlaylistSmartTv key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if ((device === 'lgsmarttv' || device === 'samsungsmarttv') &&
    (player === 'ottplayfoss' || player === 'ottplaybyalex')) {
    stepManuals.push(<SmartTvOttPlayInstall key={stepManuals.length} step={stepManuals.length + 1}/>);
    stepManuals.push(<OttPlaySmartTVSetup key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  return (
    <>
      <Box
        component='h4'
        sx={{
          m: "3.6em auto 0.5em",
          width: '100%',
          fontSize: '1.75rem',
          fontWeight: '600',
          color: appColors.mid2,
          textAlign: 'center',
        }}
      >
        {t('headManual')}
      </Box>
      {stepManuals}
    </>
  );
}

export default Manuals;