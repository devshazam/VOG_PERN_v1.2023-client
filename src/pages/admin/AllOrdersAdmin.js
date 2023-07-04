import React, {useState, useEffect, useContext} from 'react';
import Table from 'react-bootstrap/Table';
import {Context} from "../../index";

import Pagination from 'react-bootstrap/Pagination';
import { fetchDevices, deleteDevice } from '../../http/deviceAPI'


// Страница с формой для входа (логин) на сайт

const AllOrdersAdmin = () => {
    const [itemSort, setItemSort] = useState('createdAt');
    const [orderSort, setOrderSort] = useState('ASC');
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const [devices, setDevices] = useState({});
    const [count, setCount] = useState(0);
    const {device} = useContext(Context)
    // user.role

if(devices) console.log(devices)
    useEffect(() => {
        fetchDevices(itemSort, orderSort, limit, page).then(data => {
            setDevices(data.rows)
            setCount(data.count)
        })
    }, [])

    console.log(devices)

    useEffect(() => {
        fetchDevices(itemSort, orderSort, limit, page).then(data => {
            setDevices(data.rows)
            setCount(data.count)
        })
    }, [itemSort, orderSort, limit, page])

    
    // function deleteItem(id) {
	// 	deleteDevice(id)
	// }
    function choicePage(number){
        setPage(number);
    }


    let midlItem1 = Math.ceil(count / limit)
    let items = [];
    for (let number = 1; number <= midlItem1; number++) {
    items.push(
        <Pagination.Item key={number} active={number === page} onClick={() => choicePage(number)}>
        {number}
        </Pagination.Item>,
    );
    }
    const paginationBasic = (
        <div>
        <Pagination>{items}</Pagination>

        </div>
    );
    




    return (
        <>
            
        
            <div id="right">

<div className="wrapper">



        <div className="mid">
            <div className="mid-23">
                <p>Элемент сортировки</p>
                <select name="lam" className="search-form__field" id="cars" value={itemSort} onChange={e => setItemSort(e.target.value)}>
                    <option value="createdAt" >Дата</option>
                    <option value="name" >Названию товара</option>
                </select>
            </div>
            <div className="mid-23">
                <p>Порядок сортировки</p>
                <select name="num" className="search-form__field" id="cars" value={orderSort}onChange={e => setOrderSort(e.target.value)}>
                    <option value="ASC" >По убыванию</option>
                    <option value="DESC" >По возрастанию</option>
                </select>
            </div>
            {/* <div className="mid-23">
                <p>Статус готовности</p>
                <select name="num" className="search-form__field" id="cars" value={orderSort}onChange={e => setOrderSort(e.target.value)}>
                    <option value="ASC" >По убыванию</option>
                    <option value="DESC" >По возрастанию</option>
                </select>
            </div> */}
        </div>



            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Имя</th>
                    <th>Описание заказа</th>
                    <th>Описание Клиента</th>
                    <th>Картинка</th>
                    <th>Статус Готовности и Оплаты</th>
                    <th>Дата создания</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(devices).length ? devices.map(device =>
                        <tr key={device.id}>
                            <td>{device.id}</td>
                            <td>{device.name}</td>
                            <td>{device.feature}</td>
                            <td>{device.userDescription}</td>
                            
                            
                            <td>
                                <img width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
                                <a href={process.env.REACT_APP_API_URL + device.img}> Ссылка на картинку</a>
                            </td>
                            <td>{device.status_done ? <p>готово</p> : <p>не готово</p>}<br></br>
                            {device.status_pay ? <p>оплачено</p> : <p>не оплачено</p>}</td>
                            

                            <td>{device.createdAt}</td>
                            <td> 
                                {/* <button onClick={() => deleteItem(device.id)}>Выполнить</button> */}
                                </td>
                        </tr>
                    ) : 
                        <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                        </tr>
                    }
                </tbody>
            </Table>
            {paginationBasic}
    </div>

                        
</div>
          

        </>
    );
};

export default AllOrdersAdmin;