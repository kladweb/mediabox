import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PageMain from '../pages/PageMain';
import PageOperator from '../pages/PageOperator';

export const PagesRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<PageMain/>}/>
      <Route path='/operator' element={<PageOperator/>}/>
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
  );
}