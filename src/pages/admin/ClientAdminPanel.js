import React, {useState, useEffect, useContext} from 'react';
import Table from 'react-bootstrap/Table';
import {Context} from "../../index";

import { login } from '../../http/userAPI.js'


// Страница с формой для входа (логин) на сайт

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {helpers, user} = useContext(Context)
    // user.role

    const sendAuth= () => {
        if(login  && password ){

                    login(email, password)
                    .then(data => {
                    console.log(data);
                    window.location.href = data.confirmation.confirmation_url;
                    });
        }else{
            alert('Поля формы не заполнены!');
        }
    }





    return (
        <>
            
        
            <div id="right">

<div className="wrapper">




        <h2>Список предыдущих товаров:</h2>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>

    </div>

                        
</div>
          

        </>
    );
};

export default LoginForm;