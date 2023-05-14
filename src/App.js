import React from 'react';
// import {Context} from "./index";

import { BrowserRouter, Routes, Route } from "react-router-dom";


import Layout from './Layout';

import Contacts from "./pages/Contacts";
import Home from "./pages/Home";

import Empty from "./pages/Empty";

const App = () => {


  return (
    <div className="App">
    
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              {/* <Route path="product/:id" element={<ProductView />} /> */}
              <Route path="contacts" element={<Contacts />} />
              <Route path="*" element={<Empty />} />
            </Route>
      </Routes>
      
    </BrowserRouter>

 
      
    </div>
  );
};

export default App;
