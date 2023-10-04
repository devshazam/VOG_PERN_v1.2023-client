
import React, {useContext, useEffect, useState} from 'react';
import {Context} from "./index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {observer} from "mobx-react-lite"; 
import 'bootstrap/dist/css/bootstrap.css';

import Layout from './Layout';
import LayoutAdmin from "./LayoutAdmin";

import Contacts from "./pages/main/Contacts";
import Payinfo from "./pages/main/Payinfo";
import Home from "./pages/main/Home";
import Empty from "./pages/main/Empty";
import Oferta from "./pages/main/Oferta";
import ThreeDdetails from './pages/main/ThreeDdetails';


import Banner from "./pages/produce/Banner";
import Vizitki from "./pages/produce/Vizitki";
import Samokleyka from "./pages/produce/Samokleyka";

import AllGoods from "./pages/goods/AllGoods.js";
import OneGoods from "./pages/goods/OneGoods.js";

import BaseOfOrders from "./pages/admin/BaseOfOrders";
import CreateGoods from "./pages/admin/CreateGoods.js";
import UpdateGoods from "./pages/admin/UpdateGoods.js";
import ListOfOrders from "./pages/admin/ListOfOrders.js";
import ListOfGoods from './pages/admin/ListOfGoods';


import UserBasketCashless from './pages/admin-user/UserBasketCashless';
import UserBasket from "./pages/admin-user/UserBasket.js";
import PrivateOffice from "./pages/admin-user/PrivateOffice.js";
import ListOfUserOrders from "./pages/admin-user/ListOfUserOrders.js";

import VizitsPrice from "./pages/prices/VizitsPrice";
import SamokleykaPrice from "./pages/prices/SamokleykaPrice";
import BannerPrice from "./pages/prices/BannerPrice";

import {Spinner} from "react-bootstrap";
import CreatePrice from './pages/admin/CreatePrice';
import OnePrice from './pages/prices/OnePrice';

import {check} from "./http/userAPI";

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

      useEffect(() => {
        check().then(data => {
          // console.log('dev', data)
            if(data){
              user.setUser(data)
              user.setIsAuth(true)
            }
        }).catch((error) => {
          console.log('Авторизация', error);
        }).finally(() => setLoading(false))
    }, [])

  if (loading) {

    return <div id="mail-spinner"><Spinner animation="border" /></div>;
  }


  return (
    <div className="App">
    
      <BrowserRouter>
      <Routes>
          <Route path="/admin/" element={<LayoutAdmin />}>
              {/* <Route index element={<AllOrdersAdmin />} />  */}
              <Route path="/admin/base-of-orders" element={<BaseOfOrders />} />
              <Route path="/admin/base-of-orders/:orderId" element={<ListOfOrders />} />
              <Route path="/admin/list-of-goods" element={<ListOfGoods   />} />
              <Route path="/admin/create" element={<CreateGoods  />} />

              <Route path="/admin/create-price" element={<CreatePrice  />} />
              <Route path="/admin/update-goods/:goodsId" element={<UpdateGoods />} />

              <Route path="/admin/user/private-office" element={<PrivateOffice  />} />
              <Route path="/admin/user/private-office/:orderId" element={<ListOfUserOrders  />} />
              <Route path="/admin/user/basket" element={<UserBasket  />} />
              <Route path="/admin/user/basket-cashless" element={<UserBasketCashless  />} />
          </Route>


          <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="*" element={<Empty />} />
              <Route path="/payinfo" element={<Payinfo />} />
              <Route path="/3d-details" element={<ThreeDdetails />} />
              <Route path="/oferta" element={<Oferta />} />
              <Route path="/contacts" element={<Contacts />} />

{/* Goods */}
              <Route path="/goods/:category" element={<AllGoods />} />
              <Route path="/goods/one/:goodsId" element={<OneGoods />} />
{/* Produce */}
              <Route path="/produce/vizitki" element={<Vizitki />} />
              <Route path="/produce/banner" element={<Banner />} />
              <Route path="/produce/samokleyka" element={<Samokleyka />} />
{/* Prices */}
              <Route path="/prices/:priceId" element={<OnePrice  />} />
              <Route path="/prices/vizits-price" element={<VizitsPrice  />} />
              <Route path="/prices/samokleyka-price" element={<SamokleykaPrice  />} />
              <Route path="/prices/banner-price" element={<BannerPrice  />} />
              
            </Route>
      </Routes>
      
    </BrowserRouter>

 
      
    </div>
  );
});

export default App;
