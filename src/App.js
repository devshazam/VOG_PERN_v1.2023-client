
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
import ListOfOrders from "./pages/admin-user/sub-page/ListOfOrders.js"

import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";

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
              <Route path="/admin/bar" element={<PrivateCab  />} />
              <Route path="/admin/bar/:id" element={<ListOfOrders  />} />
              <Route path="/admin/create" element={<CreateGoods  />} />
              <Route path="/admin/user-basket" element={<UserBasket  />} />
              <Route path="/admin/user-basket-cashless" element={<UserBasketCashless  />} />

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
              <Route path="/goods/one/:id" element={<OneGoods />} />
              <Route path="/goods/one-update/:id" element={<UpdateGoods />} />

              

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
