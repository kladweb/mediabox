import { useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Box } from '@mui/material';
import { appColors } from "../services/appColors";
import { useTranslation } from "react-i18next";
import CardDevice from "./CardDevice";

import { devices } from "../data/dataIPTV";
import './cards.scss';

function CardsDevices() {
  const navigate = useNavigate();
  const devicesNames = Object.keys(devices);
  const {t} = useTranslation();
  const params = useParams();
  const devicesPage = params.devices;

  useEffect(() => {
    if (devicesPage && !devicesNames.includes(devicesPage)) {
      navigate('/');
    }
  }, [devicesPage]);

  return (
    <>
      <Box
        component='h3'
        sx={{
          mt: 12,
          mx: 'auto',
          width: '100%',
          fontSize: {xs: '1.25rem', md: '1.5rem'},
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
                (devicesPage && devicesNames.includes(devicesPage)) &&
                <>
                  {
                    devices[devicesPage as keyof (typeof devices)].map((device: string, i: number) => {
                        device = device.replace(/[\s]/g, '').toLowerCase();
                        return (
                          <NavLink key={i} to={device.toLowerCase()} className='nav-cards'>
                            {/*<NavLink key={device} to={'player'} className='nav-cards'>*/}
                            <CardDevice device={device}/>
                          </NavLink>
                        );
                      }
                    )
                  }
                </>
              }
            </>
        }
      </Box>
    </>
  )
}

export default CardsDevices;