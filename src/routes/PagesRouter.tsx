import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PageMain from '../pages/PageMain';
import PageOperator from '../pages/PageOperator';
import PageAndroid from "../pages/PageAndroid";
import PageChoosingOperator from "../pages/PageChoosingOperator";
import PageManual from "../pages/PageManual";

export const PagesRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<PageMain/>}/>
      <Route path='/choose' element={<PageChoosingOperator/>}/>
      <Route path='/android' element={<PageOperator/>}>
        <Route path='player' element={<PageManual/>}/>
      </Route>
      {/*<Route path='*' element={<Navigate to='/'/>}/>*/}
    </Routes>
  );
}