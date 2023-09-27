
import React, {useContext, useEffect, useState} from 'react';
import {Context} from "./index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {observer} from "mobx-react-lite"; 
import 'bootstrap/dist/css/bootstrap.css';

import Layout from './Layout';
import Contacts from "./pages/Contacts";
import Payinfo from "./pages/Payinfo";
import Banner from "./pages/banner/Banner";
import Home from "./pages/Home";
import Empty from "./pages/Empty";
import Vizitki from "./pages//vizitki/Vizitki";
import Oferta from "./pages/Oferta";
import Samokleyka from "./pages/samokleyki/Samokleyka";

import LayoutAdmin from "./LayoutAdmin";
import AllOrdersAdmin from "./pages/admin/AllOrdersAdmin";
import AllGoods from "./pages/goods/AllGoods.js";
import OneGoods from "./pages/goods/OneGoods.js";
import CreateGoods from "./pages/admin/CreateGoods.js";
import UpdateGoods from "./pages/admin/UpdateGoods.js";

import UserBasketCashless from './pages/admin-user/UserBasketCashless';
import UserBasket from "./pages/admin-user/UserBasket.js";
import PrivateCab from "./pages/admin-user/PrivateCab.js";
import ListOfUserOrders from "./pages/admin-user/sub-page/ListOfUserOrders.js"
import ListOfOrders from "./pages/admin/sub-page/ListOfOrders.js"

import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";
import ListOfGoods from './pages/admin/ListOfGoods';
import UpdatePrices from './pages/admin/UpdatePrices';
import CreatePrice from './pages/prices/CreatePrice';
import OnePrice from './pages/prices/OnePrice';
import ThreeDdetails from './pages/ThreeDdetails';

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
        }).catch((error) => console.log('dev', error )).finally(() => setLoading(false))
    }, [])

  if (loading) {

    return <div id="mail-spinner"><Spinner animation="border" /></div>;
  }


  return (
    <div className="App">
    
      <BrowserRouter>
      <Routes>
          <Route path="/admin/" element={<LayoutAdmin />}>
              <Route index element={<AllOrdersAdmin />} /> 
              <Route path="/admin/list-of-goods" element={<ListOfGoods   />} />
              <Route path="/admin/all-orders/:orderId" element={<ListOfOrders   />} />
              <Route path="/admin/bar" element={<PrivateCab  />} />
              <Route path="/admin/bar/:orderId" element={<ListOfUserOrders  />} />
              <Route path="/admin/create" element={<CreateGoods  />} />
              <Route path="/admin/user-basket" element={<UserBasket  />} />
              <Route path="/admin/user-basket-cashless" element={<UserBasketCashless  />} />
              <Route path="/admin/create-price" element={<CreatePrice  />} />
              <Route path="/admin/update-price" element={<UpdatePrices  />} />

          </Route>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              
{/* Товары */}
              <Route path="/vizitki" element={<Vizitki />} />
              <Route path="/banner" element={<Banner />} />
              <Route path="/payinfo" element={<Payinfo />} />

{/* Самоклейки */}
              <Route path="/samokleyka" element={<Samokleyka />} />
              <Route path="/goods/:category" element={<AllGoods />} />
              <Route path="/goods/one/:goodsId" element={<OneGoods />} />
              <Route path="/goods/one-update/:goodsId" element={<UpdateGoods />} />
{/* Прайсы */}
              <Route path="/one-price/:priceId" element={<OnePrice  />} />
              

              <Route path="/3d-details" element={<ThreeDdetails />} />
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
