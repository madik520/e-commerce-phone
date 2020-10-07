import React from 'react';
import { Link } from 'react-router-dom';


interface ICardItem {
    id: number,
    title: string,
    img: string,
    price: number,
    inCart: boolean,
    onClick: React.MouseEventHandler<HTMLDivElement>,
    submit: React.MouseEventHandler
}

const CardItem:React.FC<ICardItem> = ({ id,  title, img,  price, onClick, inCart, submit }) => (
    <li className="col-9 mx-auto col-md-6 col-lg-3 my-3" id={`${id}`}>
        <div className="card">
            <div className="item-main">
                <Link onClick={submit} to={"/details"}>
                    <img src={`${img}`} alt="card"/>
                </Link>
                <div onClick={onClick} className="add-to-card">
                    {inCart ? "In cart" : <i className="fas fa-cart-plus"></i>}
                </div>
            </div>
            <div className="item-footer">
                <span>{title}</span>
                <span>${price}</span>
            </div>
        </div>
    </li>
);

export default CardItem;