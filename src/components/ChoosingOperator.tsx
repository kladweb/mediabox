import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import { appColors } from "../services/appColors";

function ChoosingOperator() {
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
        {t('operators')}
      </Box>
      <Box
        component='div'
        sx={{
          m: '0 auto',
          width: '100%',
          fontSize: '1.25em',
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
    </>
  );
}

export default ChoosingOperator;