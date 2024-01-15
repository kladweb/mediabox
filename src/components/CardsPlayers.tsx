import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Box } from '@mui/material';
import { useTranslation } from "react-i18next";
import CardOperator from "./CardOperator";
import { appColors } from "../services/appColors";

import { players } from "../data/dataIPTV";
import './cards.scss';
import CardPlayer from "./CardPlayer";
import { useEffect, useState } from "react";
import LoaderLinear from "./LoaderLinear";

function CardsPlayers() {
  const navigate = useNavigate();
  const deviceNames = Object.keys(players);
  const {t} = useTranslation();
  const params = useParams();
  const device = params.device;

  const [isOpenLoader, setIsOpenLoader] = useState(false);

  useEffect(() => {
    if (device && !(deviceNames.includes(device))) {
      navigate('/');
    }
  }, []);

  const hendlerClickPlayer = (e: any, player: string) => {
    e.preventDefault();
    setIsOpenLoader(true);
    setTimeout(() => {
      setIsOpenLoader(false);
      navigate(player.replace(/[-\s]/g, '').toLowerCase());
    }, 1500);
  }

  return (
    <>
      <Box
        component='h3'
        sx={{
          m: {xs: '4.5em auto 0.75em', md: '3em auto 0.5em'},
          width: '100%',
          fontSize: {xs: '1.2rem', md: '1.5rem'},
          fontWeight: '400',
          color: appColors.mid2,
          textAlign: 'center',
        }}
      >
        {t('headPlayer')}
      </Box>
      <Box component='div' sx={{
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
      >
        {
          (device && deviceNames.includes(device)) &&
          <>
            {
              players[device as keyof (typeof players)].map((player, i) =>
                <NavLink
                  key={i}
                  // key={operators[operator as keyof (typeof operators)]['name']}
                  // to={'/device'}
                  to={player.replace(/[-\s]/g, '').toLowerCase()}
                  className='nav-cards'
                  onClick={(e) => {
                    hendlerClickPlayer(e, player);
                  }}
                >
                  <CardPlayer player={player}/>
                </NavLink>
              )
            }
          </>
        }
      </Box>
      <LoaderLinear isOpenLoader={isOpenLoader}/>
      {/*<Box sx={{*/}
      {/*  margin: '0 auto',*/}
      {/*  display: 'block',*/}
      {/*  width: '100%',*/}
      {/*  textAlign: 'center',*/}
      {/*  fontSize: '1rem',*/}
      {/*  color: appColors.light1,*/}
      {/*}}>*/}
      {/*  {t('ottplaybyalex-Note')}*/}
      {/*</Box>*/}
    </>
  )
}

export default CardsPlayers;