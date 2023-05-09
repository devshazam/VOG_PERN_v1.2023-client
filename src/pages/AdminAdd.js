import React, {useState} from 'react';
import { createItem } from '../http/deviceAPI'
// import Axios from 'axios';
// import FormData from 'form-data';

import {observer} from "mobx-react-lite";


const AdminAdd = observer(() => {

 
       const [name, setName] = useState('');
        const [price, setPrice] = useState(0);
        const [old_price, setOld_price] = useState(0);
        const [sale, setSale] = useState(0);
        const [category, setCategory] = useState('');
        const [file, setFile] = useState(null);

        

        const gGoods= () => {
            const formData = new FormData();     
            formData.append('name', name)
            formData.append('price', `${price}`)
            formData.append('img', file)
            formData.append('old_price', `${old_price}`)
            formData.append('category', category)
            formData.append('sale', `${sale}`)
            // axios.post('device/create-device/', formData).then(data => console.log(444))
            createItem(formData)
              .then(data => {
            
                alert('Объявление успешно создано!');
                
            });
        }
    // }

    return (
        <>
            
        
        <div className="col-sm-9" id="content">
            <h1>Создать объявление</h1>
          
            {/* <form className="form-horizontal"> */}
                    
                    <legend>Введите данные по примеру</legend>
                    <div className="form-group required">
                        <label htmlFor="input-firstname" className="col-sm-3 control-label">Название услуги</label>
                        <div className="col-sm-9">
                            <input  type="text" className="form-control"   placeholder="Маникюр"  name="name" onChange={e => setName(e.target.value)} />
                                    
                                        <strong>Name</strong>
                        
                        </div>
                    </div>
                    <div className="form-group required">
                        <label htmlFor="input-firstname" className="col-sm-3 control-label">Выберите категорию</label>
                        <div className="col-sm-9">
                            <select type="text" className="form-control" id="input-firstname" placeholder="Красота" name="cat" onChange={e => setCategory(e.target.value)}>
                                <option value="fashion">Красота</option>
                                <option value="fun">Развлечения</option>
                                <option value="helth">Здоровье</option>
                                <option value="cultur">Культура</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group required">
                        <label htmlFor="input-email" className="col-sm-3 control-label">Фото (600х800)</label>
                        <div className="col-sm-9">
                            <input  type="file" className="form-control"  name="foto" onChange={e => setFile(e.target.files[0]) } />
                                
                                    
                                        <strong>Photo</strong>
                                    
                                
                        </div>
                    </div>
                    <div className="form-group required">
                        <label htmlFor="input-email" className="col-sm-3 control-label">Старая цена (руб)</label>
                        <div className="col-sm-9">
                            <input  type="number" className="form-control"   placeholder="123" name="old_price" onChange={e => setOld_price(Number(e.target.value))} />
                               
                                    
                                        <strong>Old-price</strong>
                                    
                               
                        </div>
                    </div>
                    <div className="form-group required">
                        <label htmlFor="input-email" className="col-sm-3 control-label">Цена со скидкой (руб)</label>
                        <div className="col-sm-9">
                            <input  type="number" className="form-control"   placeholder="123" name="price" onChange={e => setPrice(Number(e.target.value))} />
                               
                                    
                                        <strong>Price</strong>
                                    
                               
                        </div>
                    </div>
                    <div className="form-group required">
                        <label htmlFor="input-email" className="col-sm-3 control-label">Общая скидка (%)</label>
                        <div className="col-sm-9">
                            <input  type="number" className="form-control" placeholder="50" name="sale" onChange={e => setSale(Number(e.target.value))} />
                                
                                    
                                        <strong>Sale</strong>
                                    
                               
                        </div>
                    </div>
                <div className="buttons">
                    <div className="pull-right">Нажимая кнопку отправить, я соглашаюсь с <a className="agree" href="#"><b>политикой конфеденциальности </b></a><br></br>                        <button className="btn btn-primary"  onClick={gGoods}>Sent</button>
                    </div>
                </div>
            {/* </form> */}
        </div>

        </>
    );
});

export default AdminAdd;