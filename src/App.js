import React from 'react';
// import {Context} from "./index";

import { BrowserRouter, Routes, Route } from "react-router-dom";


import Layout from './Layout';

import Contacts from "./pages/Contacts";
import Payinfo from "./pages/Payinfo";
import Banner from "./pages/Banner";
import Samokley from "./pages/Samokley";
import Home from "./pages/Home";

import Empty from "./pages/Empty";
import Vizitki from "./pages/Vizitki";
import Oferta from "./pages/Oferta";



import Samokleyka_belaya from "./pages/samokleyki/Samokleyka-belaya";
import Samokleyka_chernaya from "./pages/samokleyki/Samokleyka-chernaya";
import Samokleyka_prozrachnaya from "./pages/samokleyki/Samokleyka-prozrachnaya";
import Samokleyka_svetootrazhayuschaya from "./pages/samokleyki/Samokleyka-svetootrazhayuschaya.js";
import Samokleyka_fotolyuminiscentnaya from "./pages/samokleyki/Samokleyka-fotolyuminiscentnaya";
import Samokleyka_cvetnaya from "./pages/samokleyki/Samokleyka-cvetnaya";
import Samokleyka_dezaynerskaya from "./pages/samokleyki/Samokleyka-dezaynerskaya";
import Samokleyka_perforirovannaya from "./pages/samokleyki/Samokleyka-perforirovannaya";


import Pechat_holst from "./pages/Pechat-holst";




const App = () => {


  return (
    <div className="App">
    
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              {/* <Route path="product/:id" element={<ProductView />} /> */}
              <Route path="/vizitki" element={<Vizitki />} />
              <Route path="/banner" element={<Banner />} />
              <Route path="/payinfo" element={<Payinfo />} />
              
              <Route path="/pechat-holst" element={<Pechat_holst />} />


              {/* Самоклейки */}
              <Route path="/samokley" element={<Samokley />} />
              <Route path="/samokleyka_belaya" element={<Samokleyka_belaya />} />
              <Route path="/samokleyka-chernaya" element={<Samokleyka_chernaya />} />
              <Route path="/samokleyka-prozrachnaya" element={<Samokleyka_prozrachnaya />} />
              <Route path="/samokleyka-svetootrazhayuschaya" element={<Samokleyka_svetootrazhayuschaya />} />
              <Route path="/samokleyka-fotolyuminiscentnaya" element={<Samokleyka_fotolyuminiscentnaya />} />
              <Route path="/samokleyka-cvetnaya" element={<Samokleyka_cvetnaya />} />
              <Route path="/samokleyka-dezaynerskaya" element={<Samokleyka_dezaynerskaya />} />
              <Route path="/samokleyka-perforirovannaya" element={<Samokleyka_perforirovannaya />} />





              <Route path="/oferta" element={<Oferta />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="*" element={<Empty />} />
            </Route>
      </Routes>
      
    </BrowserRouter>

 
      
    </div>
  );
};

export default App;
