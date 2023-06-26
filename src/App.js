import React from 'react';
// import {Context} from "./index";

import { BrowserRouter, Routes, Route } from "react-router-dom";


import Layout from './Layout';

import Contacts from "./pages/Contacts";
import Payinfo from "./pages/Payinfo";
import Banner from "./pages/Banner";

import Home from "./pages/Home";

import Empty from "./pages/Empty";
import Vizitki from "./pages/Vizitki";
import Oferta from "./pages/Oferta";


import Samokley from "./pages/samokleyki/Samokley";
import Samokleyka_belaya from "./pages/samokleyki/Samokleyka-belaya";
import Samokleyka_chernaya from "./pages/samokleyki/Samokleyka-chernaya";
import Samokleyka_prozrachnaya from "./pages/samokleyki/Samokleyka-prozrachnaya";
import Samokleyka_svetootrazhayuschaya from "./pages/samokleyki/Samokleyka-svetootrazhayuschaya.js";
import Samokleyka_fotolyuminiscentnaya from "./pages/samokleyki/Samokleyka-fotolyuminiscentnaya";
import Samokleyka_cvetnaya from "./pages/samokleyki/Samokleyka-cvetnaya";
import Samokleyka_dezaynerskaya from "./pages/samokleyki/Samokleyka-dezaynerskaya";
import Samokleyka_perforirovannaya from "./pages/samokleyki/Samokleyka-perforirovannaya";


import Pechat_holst from "./pages/pechat-holstov/Pechat-holst";
import Pechat_na_holste from "./pages/pechat-na-holste/Pechat-na-holste";
import Pechat_na_holste_regular from "./pages/pechat-na-holste/Pechat-na-holste-regular";
import Pechat_na_holste_individual from "./pages/pechat-na-holste/Pechat-na-holste-individual";
import Pechat_na_holste_podramnik from "./pages/pechat-na-holste/Pechat-na-holste-podramnik";

import Tverdy_pereplet from "./pages/tverdy-pereplet/Tverdy-pereplet";



import Razrabotka_saitov from "./pages/razrabotka-saitov/RazrabotkaSaitov";






import StruinayPechat from "./pages/struinay-pechat/StruinayPechat";
import StruinayPechatGlanecDvustoron from "./pages/struinay-pechat/StruinayPechatGlanecDvustoron";
import StruinayPechatGlanecOdnostoron from "./pages/struinay-pechat/StruinayPechatGlanecOdnostoron";
import StruinayPechatMatovDvustoron from "./pages/struinay-pechat/StruinayPechatMatovDvustoron";
import StruinayPechatMatovOdnostoron from "./pages/struinay-pechat/StruinayPechatMatovOdnostoron";









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





              <Route path="/pechat-na-holste" element={<Pechat_na_holste />} />
              <Route path="/pechat-na-holste-regular" element={<Pechat_na_holste_regular />} />
              <Route path="/pechat-na-holste-individual" element={<Pechat_na_holste_individual />} />
              <Route path="/pechat-na-holste-podramnik" element={<Pechat_na_holste_podramnik />} />

{/* Cтраница твердый переплет */}
              <Route path="/tverdy-pereplet" element={<Tverdy_pereplet />} />



{/* Страницы струйная печать */}
              <Route path="/struinay-pechat" element={<StruinayPechat />} />
              <Route path="/struinay-pechat-glanec-dvustoron" element={<StruinayPechatGlanecDvustoron />} />
              <Route path="/struinay-pechat-glanec-odnostoronl" element={<StruinayPechatGlanecOdnostoron />} />
              <Route path="/struinay-pechat-matov-dvustoron" element={<StruinayPechatMatovDvustoron />} />
              <Route path="/struinay-pechat-matov-odnostoron" element={< StruinayPechatMatovOdnostoron />} />



              <Route path="/razrabotka-saitov" element={<Razrabotka_saitov />} />
              


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
