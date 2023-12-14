import { NavLink, useParams } from "react-router-dom";
import { Box } from '@mui/material';
import { useTranslation } from "react-i18next";
import CardOperator from "./CardOperator";
import { appColors } from "../services/appColors";

import { players } from "../data/dataIPTV";
import './cards.scss';
import CardPlayer from "./CardPlayer";

function CardsPlayers() {
  const {t} = useTranslation();
  const params = useParams();
  const device = params.device;

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
        {t('headOperator')}
      </Box>
      <Box component='div' sx={{
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}
      >
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
      </Box>
      <Box
        component='h3'
        sx={{
          m: '0.5em auto 2em',
          width: '100%',
          fontSize: '1.5em',
          fontWeight: '400',
          color: appColors.light1,
          textAlign: 'center',
          transition: '0.2s',
          ':hover': {
            color: appColors.mid2,
            transition: '0.1s'
          }
        }}
      >
        <NavLink to={'/choose'} className='nav-cards nav-link'>
          {t('whichChooseOperator')}
        </NavLink>
      </Box>
    </>
  )
}

export default CardsPlayers;