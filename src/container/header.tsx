import React from 'react';
import { Link } from 'react-router-dom';

const SVG:React.FC = () => (
    <svg enableBackground="new 0 0 30 30" height="40px" id="Capa_1" version="1.1" viewBox="0 0 30 30" width="40px">
        <path d="M28.7,10.2c-2.5-3-7.6-4.8-13.7-4.8c0,0,0,0,0,0h0c0,0,0,0,0,0c-6,0-11.2,1.8-13.7,4.8c-1,1.2-1.4,2.6-1.1,4  c0.2,1.2,1,2.3,2,2.8c0.6,0.3,1.3,0.4,1.9,0.4c0.3,0,0.7,0,1-0.1c-0.2,0.6-0.3,1.2-0.4,1.9c-0.2,1.8,0.1,3.1,1,4.1  c1,1.2,2.6,1.3,3.2,1.3c0.2,0,0.3,0,0.3,0h11.7c1.3,0,2.5-0.5,3.2-1.4c1-1.2,1.2-2.9,1.1-4c-0.1-0.6-0.2-1.3-0.4-1.9  c0.3,0.1,0.7,0.1,1.1,0.1c0.6,0,1.3-0.1,1.9-0.4c1-0.5,1.8-1.6,2-2.8C30,12.8,29.7,11.3,28.7,10.2z M23,22.2  c-0.5,0.6-1.2,0.9-2.1,0.9l-11.8,0c-0.1,0-1.5,0.1-2.3-0.8c-0.5-0.6-0.7-1.6-0.6-2.9c0.5-4,3.2-6.4,3.7-6.8c1.4-1.1,3.3-1.8,5.2-1.8  c1.9,0,3.6,0.6,4.9,1.8c1.9,1.6,3.3,4.3,3.7,6.8C23.8,20.2,23.7,21.4,23,22.2z M28.3,13.9c-0.2,0.8-0.6,1.5-1.3,1.8  c-1.1,0.6-2.6,0.1-3-0.1c-0.7-1.6-1.8-3-3.1-4.1c-1.6-1.4-3.7-2.1-5.9-2.1c-2.2,0-4.4,0.8-6.1,2.1c-0.4,0.3-2.1,1.8-3.2,4.2  c-0.5,0.2-1.8,0.6-2.8,0c-0.6-0.3-1.1-1-1.3-1.8c-0.2-0.9,0.1-1.9,0.8-2.7C4.7,8.5,9.4,6.9,15,6.9c5.6,0,10.3,1.6,12.5,4.3  C28.2,12,28.5,12.9,28.3,13.9z M15,12.4c-2.2,0-4.1,1.6-4.1,3.5s1.8,3.5,4.1,3.5c2.2,0,4.1-1.6,4.1-3.5S17.2,12.4,15,12.4z M15,17.9  c-1.4,0-2.6-0.9-2.6-2s1.1-2,2.6-2c1.4,0,2.6,0.9,2.6,2S16.4,17.9,15,17.9z" fill="#ffa400"/>
    </svg>
);

const Header:React.FC = () => {
    return(
        <header>
            <nav className="navbar navbar-expand-sm px-sm-5">
                <Link className="navbar-brand" to="/">
                    <SVG />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link className="nav-link" to="/">
                            <span className="text-white">Products</span>
                        </Link>
                    </li>
                </ul>
                <Link className="ml-auto" to="/cart" >
                    <button className="btn my-btn-cart">
                        <i className="fas fa-cart-plus"></i>
                        My Cart
                    </button>
                </Link>
            </nav>
        </header>
    )
};

export default Header;