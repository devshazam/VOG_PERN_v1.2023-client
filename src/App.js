
import React, {useContext, useEffect, useState} from 'react';
import {Context} from "./index";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {observer} from "mobx-react-lite";


import Layout from './Layout';

import Contacts from "./pages/Contacts";
import Payinfo from "./pages/Payinfo";
import Banner from "./pages/banner/Banner";

import Home from "./pages/Home";

import Empty from "./pages/Empty";
import Vizitki from "./pages//vizitki/Vizitki";
import Oferta from "./pages/Oferta";


import Samokley from "./pages/samokleyki/Samokley";
import SamokleykaBelaya from "./pages/samokleyki/SamokleykaBelaya";
import SamokleykaChernaya from "./pages/samokleyki/SamokleykaChernaya";
import SamokleykaProzrachnaya from "./pages/samokleyki/SamokleykaProzrachnaya";
import SamokleykaSvetootrazhayuschaya from "./pages/samokleyki/SamokleykaSvetootrazhayuschaya";
import SamokleykaFotolyuminiscentnaya from "./pages/samokleyki/SamokleykaFotolyuminiscentnaya";
import SamokleykaCvetnaya from "./pages/samokleyki/SamokleykaCvetnaya";
import SamokleykaDezaynerskaya from "./pages/samokleyki/SamokleykaDezaynerskaya";
import SamokleykaPerforirovannaya from "./pages/samokleyki/SamokleykaPerforirovannaya";



import PechatHolste from "./pages/pechat-na-holste/PechatHolste";
import PechatHolsteRegular from "./pages/pechat-na-holste/PechatHolsteRegular";
import PechatHolstIndividual from "./pages/pechat-na-holste/PechatHolstIndividual";
import PechatHolstePodramnik from "./pages/pechat-na-holste/PechatHolstePodramnik";

import TverdyPereplet from "./pages/tverdy-pereplet/TverdyPereplet";


import RazrabotkaSaitov from "./pages/razrabotka-saitov/RazrabotkaSaitov";


import StruinayPechat from "./pages/struinay-pechat/StruinayPechat";
import StruinayPechatGlanecDvustoron from "./pages/struinay-pechat/StruinayPechatGlanecDvustoron";
import StruinayPechatGlanecOdnostoron from "./pages/struinay-pechat/StruinayPechatGlanecOdnostoron";
import StruinayPechatMatovDvustoron from "./pages/struinay-pechat/StruinayPechatMatovDvustoron";
import StruinayPechatMatovOdnostoron from "./pages/struinay-pechat/StruinayPechatMatovOdnostoron";


// Админ панель
import LayoutAdmin from "./LayoutAdmin";
import AllOrdersAdmin from "./pages/admin/AllOrdersAdmin";
// import RegForm from "./pages/admin/RegForm";



import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";


const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

      useEffect(() => {
        check().then(data => {
          // console.log(data)
            user.setUser(data)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

  if (loading) {
      return <Spinner animation="border" />;
  }


  return (
    <div className="App">
    
      <BrowserRouter>
      <Routes>
          <Route path="/admin" element={<LayoutAdmin />}>
              <Route index element={<ClientAdminPanel />} /> 
              <Route path="/devices-view/" element={<AllOrdersAdmin />} />
      </Route>
              <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />

{/* Autorization */}
              {/* <Route path="/login" element={<LoginForm />} /> */}
              {/* <Route path="/registration" element={<RegForm />} /> */}
              
{/* Товары */}
              <Route path="/vizitki" element={<Vizitki />} />
              <Route path="/banner" element={<Banner />} />
              <Route path="/payinfo" element={<Payinfo />} />

{/* Самоклейки */}
              <Route path="/samokley" element={<Samokley />} />
              <Route path="/samokleyka_belaya" element={<SamokleykaBelaya />} />
              <Route path="/samokleyka-chernaya" element={<SamokleykaChernaya />} />
              <Route path="/samokleyka-prozrachnaya" element={<SamokleykaProzrachnaya />} />
              <Route path="/samokleyka-svetootrazhayuschaya" element={<SamokleykaSvetootrazhayuschaya />} />
              <Route path="/samokleyka-fotolyuminiscentnaya" element={<SamokleykaFotolyuminiscentnaya />} />
              <Route path="/samokleyka-cvetnaya" element={<SamokleykaCvetnaya />} />
              <Route path="/samokleyka-dezaynerskaya" element={<SamokleykaDezaynerskaya />} />
              <Route path="/samokleyka-perforirovannaya" element={<SamokleykaPerforirovannaya />} />

{/* Печать на холсте */}
              <Route path="/pechat-na-holste" element={<PechatHolste />} />
              <Route path="/pechat-na-holste-regular" element={<PechatHolsteRegular />} />
              <Route path="/pechat-na-holste-individual" element={<PechatHolstIndividual />} />
              <Route path="/pechat-na-holste-podramnik" element={<PechatHolstePodramnik />} />

{/* Cтраница твердый переплет */}
              <Route path="/tverdy-pereplet" element={<TverdyPereplet />} />

{/* Страницы струйная печать */}
              <Route path="/struinay-pechat" element={<StruinayPechat />} />
              <Route path="/struinay-pechat-glanec-dvustoron" element={<StruinayPechatGlanecDvustoron />} />
              <Route path="/struinay-pechat-glanec-odnostoronl" element={<StruinayPechatGlanecOdnostoron />} />
              <Route path="/struinay-pechat-matov-dvustoron" element={<StruinayPechatMatovDvustoron />} />
              <Route path="/struinay-pechat-matov-odnostoron" element={< StruinayPechatMatovOdnostoron />} />

{/* Разработка сайтов */}
              <Route path="/razrabotka-saitov" element={<RazrabotkaSaitov />} />

{/* Основные страницыы сайта */}
              <Route path="/oferta" element={<Oferta />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="*" element={<Empty />} />
            </Route>
      </Routes>
      
    </BrowserRouter>

 
      
    </div>
  );
});

export default App;
