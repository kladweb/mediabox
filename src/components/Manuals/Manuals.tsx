import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from '@mui/material';
import { appColors } from "../../services/appColors";
import { useTranslation } from "react-i18next";
import Ilooktv from "./Ilooktv";

function Manuals() {
  const {t} = useTranslation();
  const params = useParams();

  const operator = params.operator;
  const device = params.device;
  const player = params.player;


  // useEffect(() => {
  //
  // }, []);

  return (
    <>
      <Box
        component='h4'
        sx={{
          m: "3.6em auto 0.5em",
          width: '100%',
          fontSize: '1.75rem',
          fontWeight: '600',
          color: appColors.mid2,
          textAlign: 'center',
        }}
      >
        {t('headManual')}
      </Box>
      <Ilooktv/>
    </>
  )
    ;
}

export default Manuals;