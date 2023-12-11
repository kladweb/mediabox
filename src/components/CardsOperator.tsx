import { NavLink } from "react-router-dom";
import { Box } from '@mui/material';
import { useTranslation } from "react-i18next";
import CardOperator from "./CardOperator";
import { appColors } from "../services/appColors";

import { operators } from "../data/dataIPTV";
import './cards.scss';

function CardsOperator() {
  const {t} = useTranslation();
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
          Object.keys(operators).map((operator, i) => (
            <NavLink
              key={i}
              // key={operators[operator as keyof (typeof operators)]['name']}
              // to={'/device'}
              to={operator.toLowerCase()}
              className='nav-cards'
            >
              <CardOperator operator={operator}/>
            </NavLink>
          ))
          // operators.map((operator: string) =>
          //   <NavLink key={operator} to={`${operator.toLowerCase()}`} className='nav-cards'>
          //     <CardOperator operator={operator}/>
          //   </NavLink>
          // )
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
          textAlign: 'center'
        }}
      >
        <NavLink to={'/choose'} className='nav-cards nav-link'>
          {t('whichChooseOperator')}
        </NavLink>
      </Box>
    </>
  )
}

export default CardsOperator;