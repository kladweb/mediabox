import * as React from 'react';
import { useTranslation } from "react-i18next";
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import './loaderLinear.scss';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {xs: '70%', md: 400},
  maxWidth: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  backdropFilter: 'blur(5px)'
};

type Props = {
  isOpenLoader: boolean;
}

export default function LoaderLinear({isOpenLoader}: Props) {
  const {t} = useTranslation();
  return (
    <div>
      <Modal
        open={isOpenLoader}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2"
                      sx={{mb: '1em', textAlign: 'center', fontSize: {xs: '1rem', md: '1.25rem'}}}
          >
            {t('loadManual')}
          </Typography>
          <Stack sx={{width: '100%', color: 'grey.500'}} spacing={2}>
            <LinearProgress color="secondary"/>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
