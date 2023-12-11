import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PageDevices from '../pages/PageDevices';
import PageOperator from '../pages/PageOperator';
import PageAndroid from "../pages/PageAndroid";
import PageChoosingOperator from "../pages/PageChoosingOperator";
import PageManual from "../pages/PageManual";
import PageMain from "../pages/PageMain";

export const PagesRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<PageMain/>}/>
      <Route path='/operators' element={<PageOperator/>}/>
      <Route path='/operators/:operator' element={<PageDevices/>}/>
      <Route path='/operators/:operator/:device' element={<PageChoosingOperator/>}/>

      <Route path='/choose' element={<PageChoosingOperator/>}/>
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
  );
}