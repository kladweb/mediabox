import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box } from '@mui/material';
import IlookRegistration from "./IlookRegistration";
import IlookBuy from "./IlookBuy";
import IlookPlaylist from "./IlookPlaylist";
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
import OttplayerSetup from "./OttplayerSetup";
import OttplayerInstall from "./OttplayerInstall";

function Manuals() {
  const navigate = useNavigate();
  const {t} = useTranslation();
  const params = useParams();
  const operator = params.operator;
  const device = params.device;
  const player = params.player;
  const stepManuals: JSX.Element[] = [];

  useEffect(() => {
    if (player && !playersAll.includes(player)) {
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

  if (operator === 'ilooktv' && (player !== 'cbilling')) {
    stepManuals.push(<IlookPlaylist key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (device === 'androidtvbox' && player !== 'ottplayer') {
    stepManuals.push(<AppsHelpDownload key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (player === 'televizo') {
    stepManuals.push(<TelevizoDownload key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (player === 'ottnavigator') {
    stepManuals.push(<OttNavigatorDownload key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (player === 'ottplayfoss') {
    stepManuals.push(<OttPlayFossDownload key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (player === 'ottplaybyalex') {
    stepManuals.push(<OttPlayByAlexDownload key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (player === 'ottplayer') {
    stepManuals.push(<OttplayerSetup key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (device === 'androidtvbox' && (operator !== 'cbilling' && player !== 'ottplayer')) {
    stepManuals.push(<AndroidTvBoxTransfer key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (device === 'androidtvbox' && player !== 'ottplayer') {
    stepManuals.push(<AppsHelpInstall key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (player === 'televizo') {
    stepManuals.push(<TelevizoInstall key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (player === 'ottnavigator') {
    stepManuals.push(<OttNavigatorInstall key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (player === 'ottplayfoss') {
    stepManuals.push(<OttPlayFossInstall key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (player === 'ottplaybyalex') {
    stepManuals.push(<OttPlayByAlexInstall key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (player === 'ottplayer') {
    stepManuals.push(<OttplayerInstall key={stepManuals.length} step={stepManuals.length + 1}/>);
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