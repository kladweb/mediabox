import { appColors } from "../../services/appColors";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import * as React from "react";

function Ilooktv() {
  const {t} = useTranslation();
  return (
    <Card
      component='div'
      sx={{
        width: '100%',
        margin: "1.5em auto",
        display: 'block',
        backgroundColor: appColors.light11,
        transition: '1s',
        border: `solid 3px ${appColors.dark2}`,
        borderRadius: '1em'
        // ':hover': {
        //   transform: 'scale(1.01)',
        //   transition: '0.4s'
        // }
      }}
    >
      <CardContent sx={{
        fontSize: '1.25em',
        textAlign: 'left',
        color: `${appColors.light1}`,
      }}
      >
        {t('ilooktvmanual01')}
      </CardContent>
    </Card>
    // <Box
    //   component='p'
    //   sx={{
    //     width: '100%',
    //     fontSize: '1.5em',
    //     fontWeight: '400',
    //     color: appColors.light1,
    //     textAlign: 'left',
    //   }}
    // >
    //   {t('ilooktvmanual01')}
    // </Box>
  );
}

export default Ilooktv;