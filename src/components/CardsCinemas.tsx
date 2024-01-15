import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Box } from '@mui/material';
import { useTranslation } from "react-i18next";
import { appColors } from "../services/appColors";
import { players, cinemas } from "../data/dataIPTV";
import './cards.scss';
import CardPlayer from "./CardPlayer";
import { useEffect } from "react";
import CardCinema from "./CardCinema";

function CardsCinemas() {
  const navigate = useNavigate();
  const deviceNames = Object.keys(players);
  const {t} = useTranslation();
  const params = useParams();
  const device = params.device;

  // useEffect(() => {
  //   if (device && !(deviceNames.includes(device))) {
  //     navigate('/');
  //   }
  // }, []);

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
        {t('headApplication')}
      </Box>
      <Box component='div' sx={{
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
      >
        {
          Object.keys(cinemas).map((cinema, i) =>
            <NavLink
              key={i}
              // key={operators[operator as keyof (typeof operators)]['name']}
              // to={'/device'}
              to={cinema}
              className='nav-cards'
            >
              <CardCinema cinema={cinema}/>
            </NavLink>
          )
        }
      </Box>
    </>
  )
}

export default CardsCinemas;