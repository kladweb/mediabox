import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import { appColors } from "../services/appColors";
import { operators } from "../data/dataIPTV";
import { NavLink, useNavigate } from "react-router-dom";
import CardDevice from "./CardDevice";
import CardChoosing from "./CardChoosing";
import CardOperator from "./CardOperator";

function ChoosingOperator() {
  const {t} = useTranslation();
  const navigate = useNavigate();

  const handlerBack = () => {
    navigate(-1);
  }

  return (
    <Box component='div' sx={{display: 'flex', flexDirection: 'column'}}>
      <Box
        component='h3'
        sx={{
          m: {xs: '4.5em auto 0.75em', md: '3.5em auto 0.5em'},
          width: '100%',
          fontSize: {xs: '1.2rem', md: '1.75rem'},
          fontWeight: '400',
          color: appColors.mid2,
          textAlign: 'center',
        }}
      >
        {t('operators')}
      </Box>
      <Box
        component='div'
        sx={{
          m: '0 auto',
          width: '100%',
          fontSize: {xs: '1rem', md: '1.25rem'},
          fontWeight: '400',
          color: appColors.light1,
          textAlign: 'justify',
          textIndent: '2em',
        }}
      >
        <Box component='p'>
          {t('operatorsIntro1')}
        </Box>
        <Box component='p'>
          {t('operatorsIntro2')}
        </Box>
      </Box>
      <Box component='div' sx={{margin: '0 auto 2em', display: 'block', width: {xs: '100%', md: '70%'}}}>
        {
          Object.keys(operators).map((operator) => (
            <CardChoosing key={operator} operator={operator}/>
          ))
        }
      </Box>
      <Box component='button'
           onClick={handlerBack}
           sx={{
             display: 'block',
             m: '0 auto 5em',
             p: '0.5em 1em',
             color: `${appColors.mid1}`,
             fontSize: '1em',
             fontWeight: '500',
             border: `solid 2px ${appColors.mid2}`,
             borderRadius: '5px',
             cursor: 'pointer',
             transition: '0.2s',
             ':hover': {
               opacity: '0.8',
               transition: '0.2s'
             }
           }}
      >
        {t('back')}
      </Box>
    </Box>
  );
}

export default ChoosingOperator;