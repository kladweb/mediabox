import { NavLink, useParams } from "react-router-dom";
import { Box } from '@mui/material';
import { appColors } from "../services/appColors";
import { useTranslation } from "react-i18next";
import CardDevice from "./CardDevice";

import { devices } from "../data/dataIPTV";
import './cards.scss';

function CardsDevices() {
  const {t} = useTranslation();
  const params = useParams();
  const devicesPage = params.devices;
  console.log(devicesPage);

  return (
    <>
      <Box
        component='h3'
        sx={{
          mt: 12,
          mx: 'auto',
          width: '100%',
          fontSize: '2rem',
          fontWeight: '400',
          color: appColors.mid2,
          textAlign: 'center',
        }}
      >
        {t('headDevice')}
      </Box>
      <Box component='div' sx={{
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}
      >
        {
          (!devicesPage) ?
            <>
              {
                Object.keys(devices).map((device: string, i: number) =>
                  <NavLink key={i} to={device.toLowerCase()} className='nav-cards'>
                    {/*<NavLink key={device} to={'player'} className='nav-cards'>*/}
                    <CardDevice device={device}/>
                  </NavLink>
                )
              }
            </>
            :
            <>
              {
                devices[devicesPage as keyof (typeof devices)].map((device: string, i: number) =>
                  <NavLink key={i} to={device.toLowerCase()} className='nav-cards'>
                    {/*<NavLink key={device} to={'player'} className='nav-cards'>*/}
                    <CardDevice device={device}/>
                  </NavLink>
                )
              }
            </>
        }
      </Box>
    </>
  )
}

export default CardsDevices;