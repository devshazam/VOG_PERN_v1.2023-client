import React, {useContext, useEffect, useState} from 'react';
import {Context} from "./index";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {observer} from "mobx-react-lite";

import Layout from './Layout';
import LayoutAdmin from "./LayoutAdmin";
import AdminAdd from "./pages/AdminAdd";
// import AdminChange from "./pages/AdminChange";
import AdminPanel from "./pages/AdminPanel";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import ProductView from "./pages/ProductView";
import ProductsList from "./pages/ProductsList";
import Empty from "./pages/Empty";

import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
         if(!data.stop){
            user.setUser(data)
            user.setIsAuth(true)
            // console.log(123)
         }
        }).catch(e => console.log(e)).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner animation="border" />;
    }

  return (
    <div className="App">
    
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="product/:id" element={<ProductView />} />
              <Route path="prod-list/:category/:page" element={<ProductsList />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="*" element={<Empty />} />
            </Route>
          <Route path="admin" element={<LayoutAdmin />}>
              <Route index element={<AdminPanel />} />
              <Route path="add-product" element={<AdminAdd />} />
          </Route>
      </Routes>
      
    </BrowserRouter>

 
      
    </div>
  );
});

export default App;
