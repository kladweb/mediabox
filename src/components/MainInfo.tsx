import { useNavigate } from "react-router-dom";
import { Box, CardActionArea, Typography } from '@mui/material';
import { useTranslation } from "react-i18next";

import './cards.scss';
import { sxMainCards, sxMainDescription } from "../services/sxStyles";

function MainInfo() {
  const {t} = useTranslation();
  const navigate = useNavigate();

  const handlerChoosePageIptv = () => {
    navigate('/iptv');
  }

  const handlerChoosePageMedia = () => {
    navigate('/media');
  }

  return (
    <>
      <Box component='p' sx={sxMainDescription}>{t('mainText1')}</Box>
      <CardActionArea sx={sxMainCards} onClick={handlerChoosePageIptv}>
        <Typography gutterBottom variant="h5" component="div" sx={{fontSize: '3em', p: 0, m: 0}}>
          IPTV
        </Typography>
        <Typography gutterBottom variant="h6" component="div" sx={{fontSize: '1.25em'}}>
          {t('mainButton1')}
        </Typography>
      </CardActionArea>
      <Box component='p' sx={sxMainDescription}>{t('mainText2')}</Box>
      <CardActionArea sx={sxMainCards} onClick={handlerChoosePageMedia}>
        <Typography gutterBottom variant="h5" component="div" sx={{fontSize: '3em', p: 0, m: 0}}>
          {t('mainButton21')}
        </Typography>
        <Typography gutterBottom variant="h6" component="div" sx={{fontSize: '1.25em'}}>
          {t('mainButton22')}
        </Typography>
        <Typography gutterBottom variant="h6" component="div" sx={{fontSize: '1.25em'}}>
          {t('mainButton23')}
        </Typography>
      </CardActionArea>
    </>
  )
}

export default MainInfo;