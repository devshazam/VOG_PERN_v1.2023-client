import React from 'react';

const Contacts = () => {
    return (
        <>
            
        
        <div className="col-sm-9" id="content">
            <h1>Контакты</h1>
            <div className="panel panel-default">
              <div className="panel-body">
                <div className="row">
                  <div className="col-sm-3 left">
                    <strong>Email:</strong><br/>
                    <div className="address"> woskresk@gmail.com</div>
                    <br/>
                    <strong>Телефон:</strong><br/>
                    8 (921) 877-19-40
                   
                  </div>

                  <div className="col-sm-9 rigt">
                      <p>???</p>
        {/* <form action="" className="form-horizontal" method="post" enctype="multipart/form-data">
                <div className="form-group required">
                  <label for="input-name" className="col-sm-2 control-label">Имя</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="input-name" value="" name="name"/>
                  </div>
                </div>
                <div className="form-group required">
                  <label for="input-email" className="col-sm-2 control-label">E-Mail:</label>
                  <div className="col-sm-10">
                    <input type="email" className="form-control" id="input-email" value="" name="email"/>
                  </div>
                </div>
                <div className="form-group required">
                  <label for="input-enquiry" className="col-sm-2 control-label">Тема</label>
                  <div className="col-sm-10">
                    <textarea className="form-control" id="input-enquiry" rows="10" name="text"></textarea>
                  </div>
                </div>
      
              <div className="buttons">
                <div className="pull-right">Нажимая кнопку отправить, я соглашаюсь с <a className="agree" href="#"><b>политикой конфеденциальности </b></a>
                    
                    <input type="submit" className="btn btn-primary" value="Отправить"/>
                </div>
            </div>
      
    </form> */}
                  </div>
                </div>
              </div>
            </div>
            
            
          </div>
          

        </>
    );
};

export default Contacts;