import React, { useState, useEffect, useContext } from 'react';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const GetFile = observer(() => {
    const {user, device} = useContext(Context)
    const [file, setFile] = useState(null); // Файл
    
    
        useEffect(() => {
                device.setFile(file)
        }, [file]); // <- add the count variable here

    return (
        <>
                <div className="mid">
                    <div className="mid-23">
                        <p>Ваш телефон</p>
                        <p>{user.user.phone ? user.user.phone : 'Пожалуйста зарегистрируйтесь!'}</p>
                        {/* <input type="text" name="tel" className="search-form__field"  placeholder="+7 800 123-45-67"  onChange={e => setTel(e.target.value)} >

                        </input> */}
                    </div>
                    <div className="mid-23">
                        <p>Картинка</p>
                        <input type="file" name="foto" className="search-form__field" onChange={e => setFile(e.target.files[0]) }>

                        </input>
                    </div>
                </div>
          
        </>
    );
});

export default GetFile;