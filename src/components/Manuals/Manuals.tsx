import { useNavigate, useParams } from "react-router-dom";
import { Box } from '@mui/material';
import { appColors } from "../../services/appColors";
import { useTranslation } from "react-i18next";
import IlookRegistration from "./IlookRegistration";
import IlookBuy from "./IlookBuy";
import IlookPlaylist from "./IlookPlaylist";
import TelevizoDownload from "./TelevizoDownload";
import AndroidTvBoxTransferl from "./AndroidTvBoxTransferl";
import TelevizoInstall from "./TelevizoInstall";
import { useEffect } from "react";
import { playersAll } from "../../data/dataIPTV";
import OttNavigatorDownload from "./OttNavigatorDownload";
import OttNavigatorInstall from "./OttNavigatorInstall";
import OttPlayFossDownload from "./OttPlayFossDownload";

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

  // const [stepManuals, setStepManuals] = useState<JSX.Element[]>([]);

  // useEffect(() => {
  //   if (operator === 'ilooktv') {
  //     setStepManuals([...stepManuals,
  //       <IlookRegistration key={stepManuals.length + 1} step={stepManuals.length + 1}/>,
  //       <IlookBuy key={stepManuals.length + 2} step={stepManuals.length + 2}/>
  //     ]);
  //   }
  //   if (operator === 'ilooktv' && player === 'televizo') {
  //     setStepManuals([...stepManuals,
  //      <IlookPlaylist
  //     ]);
  //   }
  // }, []);

  if (operator === 'ilooktv') {
    stepManuals.push(<IlookRegistration key={stepManuals.length} step={stepManuals.length + 1}/>);
    stepManuals.push(<IlookBuy key={stepManuals.length} step={stepManuals.length + 1}/>)
  }

  if (operator === 'ilooktv' && (player !== 'cbilling')) {
    stepManuals.push(<IlookPlaylist key={stepManuals.length} step={stepManuals.length + 1}/>);
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

  if (device === 'androidtvbox' && (player !== 'cbilling')) {
    stepManuals.push(<AndroidTvBoxTransferl key={stepManuals.length} step={stepManuals.length + 1}/>);
  }

  if (player === 'televizo') {
    stepManuals.push(<TelevizoInstall key={stepManuals.length} step={stepManuals.length + 1}/>);
  }


  if (player === 'ottnavigator') {
    stepManuals.push(<OttNavigatorInstall key={stepManuals.length} step={stepManuals.length + 1}/>);
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