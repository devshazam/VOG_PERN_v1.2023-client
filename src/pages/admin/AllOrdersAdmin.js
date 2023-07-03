import React, {useState, useEffect, useContext} from 'react';
import Table from 'react-bootstrap/Table';
import {Context} from "../../index";



// Страница с формой для входа (логин) на сайт

const AllOrdersAdmin = () => {
    const [itemSort, setItemSort] = useState('createdAt');
    const [orderSort, setOrderSort] = useState('ASC');
    const [limit, setLimit] = useState('10');
    const [page, setPage] = useState('1');

    const [devices, setDevices] = useState({});
    const [count, setCount] = useState('1');
    const {device} = useContext(Context)
    // user.role


    useEffect(() => {
        fetchDevices(itemSort, orderSort, limit, page).then(data => {
            setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])
    useEffect(() => {
        fetchDevices(itemSort, orderSort, limit, page).then(data => {
            setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [itemSort, orderSort, limit, page])



    return (
        <>
            
        
            <div id="right">

<div className="wrapper">



        <div className="mid">
            <div className="mid-23">
                <p>Элемент сортировки</p>
                <select name="lam" className="search-form__field" id="cars" value={itemSort} onChange={e => setItemSort(e.target.value)}>
                    <option value="createdAt" >По дате</option>
                    <option value="name" >По названию товара</option>
                </select>
            </div>
            <div className="mid-23">
                <p>Порядок сортировки</p>
                <select name="num" className="search-form__field" id="cars" value={orderSort}onChange={e => setOrderSort(e.target.value)}>
                    <option value="ASC" >По убыванию</option>
                    <option value="DESC" >По возрастанию</option>
                </select>
            </div>
        </div>


        <h2>Список предыдущих товаров:</h2>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Имя</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {devices.map(device =>
                        <tr key={device.id}>
                            <td>{device.id}</td>
                            <td>{device.name}</td>
                            <td><Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/></td>
                            <td>@mdo</td>
                            <td onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}></td>
                        </tr>
                    )}
                </tbody>
            </Table>

    </div>

                        
</div>
          

        </>
    );
};

export default AllOrdersAdmin;