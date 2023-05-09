import React from 'react';

export default function  NavBar(){

    return ( <>

            <nav id="menu" className="navbar mt-1 mb-1">
                <div className="nav-inner container">
                    {/* <div className="navbar-header"><span id="category" className="visible-xs">Categories</span>
                        <button type="button" className="btn btn-navbar navbar-toggle" ><i className="fa fa-bars"></i></button>
                    </div> */}
                    <div className="navbar-collapse">
                        <ul className="main-navigation">
                            <li><a href="/"    className="parent"  >Главная</a> </li>
                            <li><a href="/"   className="parent"  >Красота</a> </li>
                            <li><a href="/"   className="parent"  >Здоровье</a> </li>
                            <li><a href="/"   className="parent"  >Развлечение</a> </li>
                            <li><a href="/"   className="parent"  >Культура</a> </li>
                            <li><a href="/contacts"   className="parent"  >Контакты</a> </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
    </>
    );
}