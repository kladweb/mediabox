import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PageDevices from '../pages/PageDevices';
import PageOperators from '../pages/PageOperators';
import PageChoosingOperator from "../pages/PageChoosingOperator";
import PageManual from "../pages/PageManual";
import PageMain from "../pages/PageMain";
import PagePlayers from "../pages/PagePlayers";
import Blank from "../components/Blank";
import PageCinemas from "../pages/PageCinemas";
import PageAbout from "../pages/PageAbout";

export const PagesRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<PageMain/>}/>
      <Route path='/choose' element={<PageChoosingOperator/>}/>
      <Route path='/iptv' element={<PageOperators/>}/>
      <Route path='/iptv/:operator' element={<PageDevices/>}/>
      <Route path='/iptv/:operator/:devices' element={<PageDevices/>}/>
      <Route path='/iptv/:operator/:devices/:device' element={<PagePlayers/>}/>
      <Route path='/iptv/:operator/:devices/:device/:player' element={<PageManual/>}/>

      <Route path='/media' element={<PageCinemas/>}/>
      <Route path='/media/:cinema' element={<PageManual/>}/>

      <Route path='/faq' element={<Blank/>}/>
      <Route path='/about' element={<PageAbout/>}/>

      <Route path='/blank' element={<Blank/>}/>
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
  );
}