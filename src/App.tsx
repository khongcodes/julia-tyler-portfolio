/////////////////////////////////////////////////////////////////////////////////
/////////////                                                               NOTES

/////////////////////////////////////////////////////////////////////////////////
/////////////                                                             IMPORTS
// 1. React
// 2. Components
// 3. Lazy imports

import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";
import BookDesign from "./views/BookDesign";
import PageNotFound from "./views/PageNotFound";

const About = lazy(() => import("./views/About"));


/////////////////////////////////////////////////////////////////////////////////
/////////////                                                               SETUP


/////////////////////////////////////////////////////////////////////////////////
/////////////                                                  COMPONENTS & LOGIC

const App: React.FC = () => {
  return (
    
      <Suspense fallback={<div/>}>
        <BrowserRouter>
        <Layout>
        <Routes>
          <Route path="/" element={<BookDesign />} />
          <Route path="/book-design" element={<Navigate to="/" />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
        </Layout>
        </BrowserRouter>
      </Suspense>
  );
}

export default App;
