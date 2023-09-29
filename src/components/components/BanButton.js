import React, { useContext, useState } from "react";
import { Context } from "../../index";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { observer } from "mobx-react-lite";
import { updateJson } from "../../http/jsonAPI";
import isEmail from 'validator/lib/isEmail';
import Image from "react-bootstrap/Image";
import NavDropdown from "react-bootstrap/NavDropdown";


const BanForSite = () => {
   const [flagLamp, setFlagLamp] = useState(false);

   const blockSite = async () => {
        updateJson().then((data) => {
            alert("Выполнено успешно!");
        }).catch((error) => {
            console.log('dev', error);
            alert('Ошибка 503 - Обратитесь к администратору!');
        });
    };


    return (
        <>

            <NavDropdown.Item onClick={blockSite} className="fioLink">
                Блокировать сайт
            </NavDropdown.Item>

        </>
    );
};

export default BanForSite;
