import React, { Suspense } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Box } from '@mui/material'

import Header from "./Header";
import { PagesRouter } from "../routes/PagesRouter";
import { appColors } from "../services/appColors";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      {/*<Suspense fallback='...loading'>*/}
      <Suspense>
        <Header/>
        <Box
          sx={{
            minHeight: '100vh',
            backgroundColor: appColors.mid1,
          }}>
          <PagesRouter/>
        </Box>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
