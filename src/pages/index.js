import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Sample from './sample';
import Layout from '../components/Layout';

const Pages = () => {
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path = "sample" element={<Sample />} />
        </Routes>
      </BrowserRouter>
    );
};
export default Pages;
