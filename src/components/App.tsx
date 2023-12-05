import React, { Suspense } from 'react';
import { BrowserRouter } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import Header from "./Header";
import { PagesRouter } from "../routes/PagesRouter";
import './App.css';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Suspense fallback='...loading'>
        <Header/>
        <PagesRouter/>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
