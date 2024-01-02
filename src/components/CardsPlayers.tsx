import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Box } from '@mui/material';
import { useTranslation } from "react-i18next";
import CardOperator from "./CardOperator";
import { appColors } from "../services/appColors";

import { players } from "../data/dataIPTV";
import './cards.scss';
import CardPlayer from "./CardPlayer";
import { useEffect } from "react";

function CardsPlayers() {
  const navigate = useNavigate();
  const deviceNames = Object.keys(players);
  const {t} = useTranslation();
  const params = useParams();
  const device = params.device;

  useEffect(() => {
    if (device && !(deviceNames.includes(device))) {
      navigate('/');
    }
  }, []);

  return (
    <>
      <Box
        component='h3'
        sx={{
          m: '3em auto 0.5em',
          width: '100%',
          fontSize: '2rem',
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
                >
                  <CardPlayer player={player}/>
                </NavLink>
              )
            }
          </>
        }
      </Box>
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