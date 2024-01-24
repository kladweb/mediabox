import { useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Box } from '@mui/material';
import { useTranslation } from "react-i18next";
import { appColors } from "../services/appColors";
import { players } from "../data/dataIPTV";
import './cards.scss';
import CardPlayer from "./CardPlayer";

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
          m: {xs: '4.5em auto 0.75em', md: '4em auto 0.5em'},
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
    </>
  )
}

export default CardsPlayers;