import { useEffect, useState } from "react";
import { NavigateFunction, Params, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box } from '@mui/material';
import { appColors } from "../../services/appColors";
import { playersAll } from "../../data/dataIPTV";
import IlookRegistration from "./Ilook/IlookRegistration";
import IlookBuy from "./Ilook/IlookBuy";
import TelevizoDownload from "./Televizo/TelevizoDownload";
import AndroidTvBoxTransfer from "./AndroidHelp/AndroidTvBoxTransfer";
import TelevizoInstall from "./Televizo/TelevizoInstall";
import OttNavigatorDownload from "./OttNavigator/OttNavigatorDownload";
import OttPlayFossDownload from "./OttPlay/OttPlayFossDownload";
import OttNavigatorInstallPlaylist from "./OttNavigator/OttNavigatorInstallPlaylist";
import OttPlayFossInstall from "./OttPlay/OttPlayFossInstall";
import AppsHelpDownload from "./AndroidHelp/AppsHelpDownload";
import AppsHelpInstall from "./AndroidHelp/AppsHelpInstall";
import OttPlayByAlexDownload from "./OttPlay/OttPlayByAlexDownload";
import OttPlayByAlexInstall from "./OttPlay/OttPlayByAlexInstall";
import OttplayerWebSetup from "./Ottplayer/OttplayerWebSetup";
import OttplayerInstall from "./Ottplayer/OttplayerInstall";
import IlookPlaylist from "./Ilook/IlookPlaylist";
import SmartTvOttPlayInstall from "./OttPlay/SmartTvOttPlayInstall";
import OttPlayFossSetupPlaylist from "./OttPlay/OttPlayFossSetupPlaylist";
import OttPlayFossSetupKey from "./OttPlay/OttPlayFossSetupKey";
import SsIptvLgTvInstall from "./SsIptv/SsIptvLgTvInstall";
import SsIptvSetup from "./SsIptv/SsIptvSetup";
import SsIptvSamsungInstall from "./SsIptv/SsIptvSamsungInstall";
import FlexIptvInstall from "./FlexIptv/FlexIptvInstall";
import SharavozRegistration from "./Sharavoz/SharavozRegistration";
import SharavozBuy from "./Sharavoz/SharavozBuy";
import SharavozPlaylist from "./Sharavoz/SharavozPlaylist";
import OttNavigatorInstallKey from "./OttNavigator/OttNavigatorInstallKey";
import VipLimeRegistration from "./VipLime/VipLimeRegistration";
import VipLimeBuy from "./VipLime/VipLimeBuy";
import VipLimePlaylist from "./VipLime/VipLimePlaylist";
import CbillingRegistration from "./Cbilling/CbillingRegistration";
import CbillingBuy from "./Cbilling/CbillingBuy";
import CbillingPlaylist from "./Cbilling/CbillingPlaylist";
import KineskopRegistration from "./Kineskop/KineskopRegistration";
import KineskopBuy from "./Kineskop/KineskopBuy";
import KineskopPlaylist from "./Kineskop/KineskopPlaylist";
import SharaTvRegistration from "./SharaTv/SharaTvRegistration";
import SharaTvBuy from "./SharaTv/SharaTvBuy";
import SharaTvPlaylist from "./SharaTv/SharaTvPlaylist";
import HdvideoboxDownload from "./Hdvideobox/HdvideoboxDownload";
import HdvideoboxInstall from "./Hdvideobox/HdvideoboxInstall";
import LampaAndroidDownload from "./Lampa/LampaAndroidDownload";
import LampaAndroidInstall from "./Lampa/LampaAndroidInstall";
import LampaSetup from "./Lampa/LampaSetup";
import LampaSmarttvInstall from "./Lampa/LampaSmarttvInstall";
import LampaBrowserInstall from "./Lampa/LampaBrowserInstall";
import LoaderLinear from "../LoaderLinear";
import type { ITranslate } from "../../types/typesBox";
import DomaVipBuy from "./Domavip/DomaVipBuy";
import DomaVipRegistration from "./Domavip/DomaVipRegistration";
import DomaVipPlaylist from "./Domavip/DomaVipPlaylist";
import RusskoetvRegistration from "./Russkoetv/RusskoetvRegistration";
import RusskoetvBuy from "./Russkoetv/RusskoetvBuy";
import RusskoetvPlaylist from "./Russkoetv/RusskoetvPlaylist";

function Manual(): JSX.Element {
  const navigate: NavigateFunction = useNavigate();
  const {t}: ITranslate = useTranslation();
  const params: Readonly<Params<string>> = useParams();
  const operator: string | undefined = params.operator;
  const devices: string | undefined = params.devices;
  const device: string | undefined = params.device;
  const player: string | undefined = params.player;
  const cinema: string | undefined = params.cinema;
  const stepManuals: JSX.Element[] = [];
  const [isOpenLoader, setIsOpenLoader] = useState<boolean>(true);

  useEffect((): void => {
    if (player && !Object.keys(playersAll).includes(player)) {
      navigate('/');
    }
  }, []);

  useEffect((): void => {
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
    stepManuals.push(<SharavozRegistration key={stepManuals.length} step={stepManuals.length + 1}/>);
    stepManuals.push(<SharavozBuy key={stepManuals.length} step={stepManuals.length + 1}/>)
    stepManuals.push(<SharavozPlaylist key={stepManuals.length} step={stepManuals.length + 1}/>)
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

  if (operator === 'domavip') {
    stepManuals.push(<DomaVipRegistration key={stepManuals.length} step={stepManuals.length + 1}/>);
    stepManuals.push(<DomaVipBuy key={stepManuals.length} step={stepManuals.length + 1}/>);
    stepManuals.push(<DomaVipPlaylist key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (operator === 'kineskopclub') {
    stepManuals.push(<KineskopRegistration key={stepManuals.length} step={stepManuals.length + 1}/>);
    stepManuals.push(<KineskopBuy key={stepManuals.length} step={stepManuals.length + 1}/>);
    stepManuals.push(<KineskopPlaylist key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (operator === 'russkoetv') {
    stepManuals.push(<RusskoetvRegistration key={stepManuals.length} step={stepManuals.length + 1}/>);
    stepManuals.push(<RusskoetvBuy key={stepManuals.length} step={stepManuals.length + 1}/>);
    stepManuals.push(<RusskoetvPlaylist key={stepManuals.length} step={stepManuals.length + 1}/>);
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
    if (operator === 'ilooktv') {
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
