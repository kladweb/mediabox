import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box } from '@mui/material';
import { appColors } from "../../services/appColors";
import { playersAll } from "../../data/dataIPTV";
import IlookRegistration from "./IlookRegistration";
import IlookBuy from "./IlookBuy";
import TelevizoDownload from "./TelevizoDownload";
import AndroidTvBoxTransfer from "./AndroidTvBoxTransfer";
import TelevizoInstall from "./TelevizoInstall";
import OttNavigatorDownload from "./OttNavigatorDownload";
import OttPlayFossDownload from "./OttPlayFossDownload";
import OttNavigatorInstallPlaylist from "./OttNavigatorInstallPlaylist";
import OttPlayFossInstall from "./OttPlayFossInstall";
import AppsHelpDownload from "./AppsHelpDownload";
import AppsHelpInstall from "./AppsHelpInstall";
import OttPlayByAlexDownload from "./OttPlayByAlexDownload";
import OttPlayByAlexInstall from "./OttPlayByAlexInstall";
import OttplayerWebSetup from "./OttplayerWebSetup";
import OttplayerInstall from "./OttplayerInstall";
import IlookPlaylist from "./IlookPlaylist";
import SmartTvOttPlayInstall from "./SmartTvOttPlayInstall";
import OttPlayFossSetupPlaylist from "./OttPlayFossSetupPlaylist";
import OttPlayFossSetupKey from "./OttPlayFossSetupKey";
import SsIptvLgTvInstall from "./SsIptvLgTvInstall";
import SsIptvSetup from "./SsIptvSetup";
import SsIptvSamsungInstall from "./SsIptvSamsungInstall";
import FlexIptvInstall from "./FlexIptvInstall";
import SzaravozRegistration from "./SzaravozRegistration";
import SzaravozBuy from "./SzaravozBuy";
import SzaravozPlaylist from "./SzaravozPlaylist";
import OttNavigatorInstallKey from "./OttNavigatorInstallKey";
import VipLimeRegistration from "./VipLimeRegistration";
import VipLimeBuy from "./VipLimeBuy";
import VipLimePlaylist from "./VipLimePlaylist";
import CbillingRegistration from "./CbillingRegistration";
import CbillingBuy from "./CbillingBuy";
import CbillingPlaylist from "./CbillingPlaylist";
import KineskopRegistration from "./KineskopRegistration";
import KineskopBuy from "./KineskopBuy";
import KineskopPlaylist from "./KineskopPlaylist";
import SharaTvRegistration from "./SharaTvRegistration";
import SharaTvBuy from "./SharaTvBuy";
import SharaTvPlaylist from "./SharaTvPlaylist";
import HdvideoboxDownload from "./HdvideoboxDownload";
import HdvideoboxInstall from "./HdvideoboxInstall";
import LampaAndroidDownload from "./LampaAndroidDownload";
import LampaAndroidInstall from "./LampaAndroidInstall";
import LampaSetup from "./LampaSetup";
import LampaSmarttvInstall from "./LampaSmarttvInstall";
import LampaBrowserInstall from "./LampaBrowserInstall";
import LoaderLinear from "../LoaderLinear";

function Manual() {
  const navigate = useNavigate();
  const {t} = useTranslation();
  const params = useParams();
  const operator = params.operator;
  const devices = params.devices;
  const device = params.device;
  const player = params.player;
  const cinema = params.cinema;
  const stepManuals: JSX.Element[] = [];
  const [isOpenLoader, setIsOpenLoader] = useState(true);

  useEffect(() => {
    if (player && !Object.keys(playersAll).includes(player)) {
      navigate('/');
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsOpenLoader(false);
    }, (cinema) ? 1000 : 2500);
  }, [isOpenLoader]);

  if (operator === 'ilooktv') {
    stepManuals.push(<IlookRegistration key={stepManuals.length} step={stepManuals.length + 1}/>);
    stepManuals.push(<IlookBuy key={stepManuals.length} step={stepManuals.length + 1}/>)
    stepManuals.push(<IlookPlaylist key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (operator === 'sharavoz') {
    stepManuals.push(<SzaravozRegistration key={stepManuals.length} step={stepManuals.length + 1}/>);
    stepManuals.push(<SzaravozBuy key={stepManuals.length} step={stepManuals.length + 1}/>)
    stepManuals.push(<SzaravozPlaylist key={stepManuals.length} step={stepManuals.length + 1}/>)
  }

  if (operator === 'viplime') {
    stepManuals.push(<VipLimeRegistration key={stepManuals.length} step={stepManuals.length + 1}/>);
    stepManuals.push(<VipLimeBuy key={stepManuals.length} step={stepManuals.length + 1}/>);
    stepManuals.push(<VipLimePlaylist key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (operator === 'cbilling') {
    stepManuals.push(<CbillingRegistration key={stepManuals.length} step={stepManuals.length + 1}/>);
    stepManuals.push(<CbillingBuy key={stepManuals.length} step={stepManuals.length + 1}/>);
    stepManuals.push(<CbillingPlaylist key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (operator === 'kineskopclub') {
    stepManuals.push(<KineskopRegistration key={stepManuals.length} step={stepManuals.length + 1}/>);
    stepManuals.push(<KineskopBuy key={stepManuals.length} step={stepManuals.length + 1}/>);
    stepManuals.push(<KineskopPlaylist key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (operator === 'sharatv') {
    stepManuals.push(<SharaTvRegistration key={stepManuals.length} step={stepManuals.length + 1}/>);
    stepManuals.push(<SharaTvBuy key={stepManuals.length} step={stepManuals.length + 1}/>);
    stepManuals.push(<SharaTvPlaylist key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (device === 'androidtvbox' &&
    player !== 'ottplayer' &&
    !(player === 'ottnavigator' && (operator === 'sharavoz' || operator === 'viplime' || operator === 'cbilling'))) {
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

  if (device === 'androidtvbox' && player !== 'ottplayer') {
    stepManuals.push(<AndroidTvBoxTransfer key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (device === 'androidtvbox' &&
    player !== 'ottplayer' &&
    !(player === 'ottnavigator' && (operator === 'sharavoz' || operator === 'viplime' || operator === 'cbilling'))) {
    stepManuals.push(<AppsHelpInstall key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (player === 'televizo' && device === 'androidtvbox') {
    stepManuals.push(<TelevizoInstall key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (player === 'ottnavigator' && device === 'androidtvbox') {
    if (operator === 'sharavoz' || operator === 'viplime' || operator === 'cbilling') {
      stepManuals.push(<OttNavigatorInstallKey key={stepManuals.length} step={stepManuals.length + 1}/>);
    } else {
      stepManuals.push(<OttNavigatorInstallPlaylist key={stepManuals.length} step={stepManuals.length + 1}/>);
    }
  }

  if (player === 'ottplayfoss' && device === 'androidtvbox') {
    stepManuals.push(<OttPlayFossInstall key={stepManuals.length} step={stepManuals.length + 1}/>);
    stepManuals.push(<OttPlayFossSetupPlaylist key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (player === 'ottplaybyalex' && device === 'androidtvbox') {
    stepManuals.push(<OttPlayByAlexInstall key={stepManuals.length} step={stepManuals.length + 1}/>);
    stepManuals.push(<OttPlayFossSetupPlaylist key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (player === 'ottplayer') {
    stepManuals.push(<OttplayerInstall key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  //SMART TV

  if (devices === 'smarttv' && (player === 'ottplayfoss' || player === 'ottplaybyalex')) {
    stepManuals.push(<SmartTvOttPlayInstall key={stepManuals.length} step={stepManuals.length + 1}/>);
    if (operator !== 'sharavoz') {
      stepManuals.push(<OttPlayFossSetupKey key={stepManuals.length} step={stepManuals.length + 1}/>);
    } else {
      stepManuals.push(<OttPlayFossSetupPlaylist key={stepManuals.length} step={stepManuals.length + 1}/>);
    }
  }

  if (device === 'lgsmarttv' && player === 'ssiptv') {
    stepManuals.push(<SsIptvLgTvInstall key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (device === 'samsungsmarttv' && player === 'ssiptv') {
    stepManuals.push(<SsIptvSamsungInstall key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (devices === 'smarttv' && player === 'ssiptv') {
    stepManuals.push(<SsIptvSetup key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  //APPLE TV
  if (player === 'flexiptv') {
    stepManuals.push(<FlexIptvInstall key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  //HD VIDEOBOX
  if (cinema === 'hdvideobox') {
    stepManuals.push(<HdvideoboxDownload key={stepManuals.length} step={stepManuals.length + 1}/>);
    stepManuals.push(<AndroidTvBoxTransfer key={stepManuals.length} step={stepManuals.length + 1}/>);
    stepManuals.push(<HdvideoboxInstall key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  //Lampa android
  if (cinema === 'lampaandroid') {
    stepManuals.push(<LampaAndroidDownload key={stepManuals.length} step={stepManuals.length + 1}/>);
    stepManuals.push(<AndroidTvBoxTransfer key={stepManuals.length} step={stepManuals.length + 1}/>);
    stepManuals.push(<LampaAndroidInstall key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (cinema === 'lampasmarttv') {
    stepManuals.push(<LampaSmarttvInstall key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (cinema === 'lampabrowser') {
    stepManuals.push(<LampaBrowserInstall key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (cinema && cinema !== 'hdvideobox') {
    stepManuals.push(<LampaSetup key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  return (
    <>
      {
        (isOpenLoader) ?
          <LoaderLinear isOpenLoader={isOpenLoader}/>
          :
          <>
            <Box
              component='h4'
              sx={{
                m: {xs: '4.5em auto 0.5em', md: '3.6em auto 0.5em'},
                width: '100%',
                fontSize: {xs: '1.2rem', md: '1.75rem'},
                fontWeight: '600',
                color: appColors.mid2,
                textAlign: 'center',
              }}
            >
              {
                (cinema) ? <>{t('headManualCinema')}</> : <>{t('headManualIptv')}</>
              }
            </Box>
            {stepManuals}
          </>
      }
    </>
  );
}

export default Manual;